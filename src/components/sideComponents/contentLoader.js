import React from 'react';
import ReactContentLoader from "react-content-loader";
import { getDimensions } from '../../helpers';
import LoadingGif from '../../assets/images/loading.gif';

class ContentLoader extends React.PureComponent {

  renderHeader = () => {
    return (
      <>
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6" />
      </>
    );
  };

  renderBuilder = () => {
    // const { width, height } = getDimensions();
    return (
      <ReactContentLoader
        speed={2}
        primaryColor="#ddd"
        secondaryColor="#aaa"
      >
        <rect x="51" y="0" rx="0" ry="0" width="242" height="28" />
        <rect x="50" y="48" rx="0" ry="0" width="74" height="86" />
        <rect x="215" y="46" rx="0" ry="0" width="74" height="86" />
        <rect x="131" y="49" rx="0" ry="0" width="75" height="10" />
        <rect x="132" y="63" rx="0" ry="0" width="75" height="10" />
        <rect x="131" y="76" rx="0" ry="0" width="75" height="10" />
        <rect x="132" y="90" rx="0" ry="0" width="75" height="10" />
      </ReactContentLoader>
    )
  };

  renderDefaultLoader = () => {
    return (
      <img
        style={{ position: 'absolute', left: "50%", top: "50%", transform: `translate(-50%, -50%)` }}
        src={LoadingGif}
      />
    )
  };

  render() {
    const { type } = this.props;

    if (typeof window === "undefined") return this.renderDefaultLoader();

    let field = null;
    switch (type) {
      // case 'header':
      //   field = this.renderHeader();
      //   break;
      // case 'builder':
      //   field = this.renderBuilder();
      //   break;
      default:
        field = this.renderDefaultLoader();
        break;
    }

    return field;
  }
}

export default ContentLoader;