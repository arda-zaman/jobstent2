import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as builderActions from '../../actions/builder';

class ImageUploader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      svgSettings: {
        logoWidth: 180,
        logoHeight: 180,
      },
      cropperImgSrc: null,
      imageCropper: false,
      imageError: [],
      imageSettings: {
        width: null,
        height: null,
        left: 0,
        top: 0
      },
      initialValues: {
        width: null,
        height: null
      },
      initX2: 0,
      initY2: 0,
      mousePressX2: 0,
      mousePressY2: 0,
      cropperRatio: 4,
    }
  }

  handleProfileImage = (event) => {
    const { builder: { imageUploader } } = this.props;
    const { svgSettings: { logoWidth, logoHeight } } = this.state;
    const img = event.target;

    if (img.width >= logoWidth && img.height >= logoHeight) {
      this.setState({
        imageCropper: true,
        imageError: [],
        imageSettings: {
          width: img.width,
          height: img.height,
          src: img.src
        },
        initialValues: {
          width: img.width,
          height: img.height
        }
      });
    } else {
      let imageError = { ...this.state.imageError };
      imageError.push(`Your image must be bigger than ${logoWidth}px x ${logoHeight}px`);

      this.setState({
        imageError
      });
    }

  };

  imageMouseDown = (event) => {
    let { initX2, initY2, mousePressX2, mousePressY2 } = this.state;

    initX2 = event.target.offsetLeft;
    initY2 = event.target.offsetTop;
    mousePressX2 = event.clientX;
    mousePressY2 = event.clientY;

    this.setState({
      initX2,
      initY2,
      mousePressX2,
      mousePressY2,
    });

    const { imageBackground } = this.refs;

    imageBackground.addEventListener('mousemove', this.repositionElement, false);

    window.addEventListener('mouseup', () => {
      imageBackground.removeEventListener('mousemove', this.repositionElement, false);
    }, false);
  };

  repositionElement = (event) => {
    let { initX2, initY2, mousePressX2, mousePressY2 } = this.state;

    this.setState({
      imageSettings: {
        ...this.state.imageSettings,
        left: initX2 + event.clientX - mousePressX2,
        top: initY2 + event.clientY - mousePressY2
      }
    });
  };

  scaleCropperImage = (e) => {
    let { imageSettings, initialValues: { width, height } } = this.state;

    let ratio = (e.target.value * 25) / 100;

    this.setState({
      cropperRatio: e.target.value,
      imageSettings: {
        ...imageSettings,
        width: width * ratio,
        height: height * ratio,
      }
    });

    const { selectedImage } = this.refs;
    selectedImage.style.width = width * ratio + "px";
    selectedImage.style.height = height * ratio + "px";
  };

  cropperClose = () => {
    const { onImageUploaderCancel } = this.props;
    this.setState({
      imageCropper: false,
      imageSettings: {
        width: null,
        height: null,
        left: 0,
        top: 0
      }
    }, () => {
      onImageUploaderCancel()
    });
  };

  cropperDone = () => {
    const { onImageUploaderDone } = this.props;
    const { cropperRatio, imageSettings, initialValues: { width, height }, svgSettings: { logoWidth, logoHeight } } = this.state;

    let ratio = (cropperRatio * 25) / 100;

    const { hiddenCanvas, selectedImage, selectedBox } = this.refs;

    let ctx = hiddenCanvas.getContext("2d");
    ctx.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);

    let img = new Image(imageSettings.width, imageSettings.height);
    img.src = imageSettings.src;

    img.onload = () => {
      let left = selectedBox.offsetLeft - selectedImage.parentNode.offsetLeft;
      let top = selectedBox.offsetTop - selectedImage.parentNode.offsetTop;

      // ctx.beginPath();
      // // ctx.rect(0, 0, logoWidth * ratio, logoHeight * ratio);
      // ctx.rect(0, 0, imageSettings.width * ratio, imageSettings.height * ratio);
      // ctx.clip();

      ctx.drawImage(
        img,
        left / ratio,
        top / ratio,
        width * ratio,
        height * ratio,
        0,
        0,
        imageSettings.width * ratio,
        imageSettings.height * ratio
      );

      let newProfileImgUrl = hiddenCanvas.toDataURL("image/png", 1.0);

      this.setState({
        imageCropper: false,
      }, () => {
        onImageUploaderDone(newProfileImgUrl);
      });
    };
  };

  imageLoaded = (event) => {
    this.setState({
      imageSettings: {
        width: event.target.naturalWidth,
        height: event.target.naturalHeight
      }
    });
  }

  render() {
    const { builder: { imageUploader } } = this.props;
    const { svgSettings: { logoWidth, logoHeight }, imageSettings: { width, height, left, top } } = this.state;

    if (imageUploader && !imageUploader.open) return <div></div>;

    return (
      <div className="image-cropper-container">
        <div className="background"></div>
        <div className="image-cropper-inside">
          <div className="image-cropper">
            <div className="image-radius">
              <span ref="selectedBox" style={{
                width: logoWidth,
                height: logoHeight
              }}> </span>
            </div>

            <div className="image-background"
              ref="imageBackground"
              onMouseDown={this.imageMouseDown}
              // onMouseMove={this.repositionElement}
              style={{
                width: width + 'px',
                height: height + 'px',
                left: left,
                top: top
              }}
            >
              <img
                src={imageUploader.file.src}
                ref="selectedImage"
                onLoad={this.handleProfileImage}
              />
            </div>
          </div>

          <div className="cropper-settings">
            <div className="range">
              <input type="range" min="1" max="8" defaultValue={this.state.cropperRatio}
                onChange={this.scaleCropperImage} />
            </div>

            <div className="buttons">
              <button onClick={this.cropperClose} type="button" className="button"><i className="material-icons">close</i></button>
              <button onClick={this.cropperDone} type="button" className="button"><i className="material-icons">check</i></button>
            </div>
          </div>
        </div>
        <canvas ref="hiddenCanvas" width={170} height={170}></canvas>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  template: state.template,
  builder: state.builder,
});

const mapDispatchToProps = {
  onImageUploaderCancel: builderActions.imageUploaderCancel,
  onImageUploaderDone: builderActions.imageUploaderDone,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);