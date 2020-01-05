import React from 'react';
import ResumeItem from './resumeItem';

class TemplateContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  pageDropzone = async (pagex, event) => {
    event.preventDefault();
    const { actions: { createItem, updateItem }, helpers } = this.props;
    const pageContent = event.target;
    const page = event.target.closest('.page');
    const pageID = page.id.replace('page_', '');

    const dataTransfer = JSON.parse(event.dataTransfer.getData('text'));
    const process = dataTransfer.process;
    const fieldType = dataTransfer.type;
    const fieldID = dataTransfer.id;
    event.dataTransfer.clearData();

    // Drag Element Locations
    const locations = {
      x: window.event.x,
      y: window.event.y,
      offsetX: window.event.offsetX,
      offsetY: window.event.offsetY
    };

    if (process == 'copy') {
      let fieldDefaults = helpers.getFieldDefault(fieldType);

      let field = await createItem({
        type: fieldType,
        page: pageID,
        value: fieldDefaults.defaultValue,
        style: Object.assign({}, fieldDefaults.defaultStyle, { left: locations.offsetX, top: locations.offsetY })
      });

      console.log("RESPONSE:", field);
    } else if (process == 'move') {
      const element = document.querySelector(`#field_${fieldID}`);

      // const newStyle = {
      //   left: locations.offsetX - this.draggedElement.x,
      //   top: locations.offsetY - this.draggedElement.y
      // };

      const newStyle = {
        left: locations.offsetX,
        top: locations.offsetY
      };

      let field = await updateItem({
        fid: fieldID,
        style: newStyle,
        pageID: pageID
      });

      console.log("RESPONSE2:", field);
    }
  };

  fieldDragOver = (layout, event) => {
    event.preventDefault();
    const dragType = window.componentState.dragType;

    if (dragType == 'copy') {
      event.dataTransfer.dropEffect = 'copy';
    } else {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  addedFieldsDragStart = (e) => {
    const field = e.target;
    e.dataTransfer.setData('text/plain', JSON.stringify({
      process: 'move',
      id: field.id.replace('field_', '')
    }));
    window.componentState.dragType = "move";
    field.classList.add('active');

    const crt = e.target.querySelector('.field-content');
    e.dataTransfer.setDragImage(crt, 0, 0);

    const positions = field.getBoundingClientRect();
    this.draggedElement = {
      x: window.event.clientX - positions.x,
      y: window.event.clientY - positions.y
    }
  }

  addedFieldDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }


  render() {
    const { pages, layouts, fields, zoom, actions, renderPDF } = this.props;

    return (
      <div className="g-resume-container" style={{ transform: zoom ? `scale(${zoom.percent / 100})` : `scale(1)` }}>
        <div className="pages">
          {pages && pages.map((page, index) => (
            <div
              className="page"
              id={`page_${page.fid}`}
              onDrop={this.pageDropzone.bind(this, page)}
              onDragOver={this.fieldDragOver.bind(this, page)}
            >
              <div className="page-inside-container">
                <div
                  className="page-content"
                >
                  <ul>
                    {(fields && fields.length > 0) && fields.map((item, index) => (
                      (item.pageID == page.fid) && (
                        <ResumeItem
                          fid={item.fid}
                          type={item.type}
                          value={item.value}
                          style={item.style}
                          draggable={true}
                          onDragStart={this.addedFieldsDragStart}
                          onDragOver={this.addedFieldDragOver}
                          actions={this.props.actions}
                          activeField={this.props.activeField}
                        />
                      )
                    ))}
                  </ul>
                </div>

                <div className="page-number">
                  <em>--</em>
                  <span>Page {index + 1}</span>
                  <em>--</em>
                </div>
              </div>

              {(!renderPDF) && (
                <div className="page-actions">
                  <div className="action-item add" onClick={actions && actions.addNewPage}>
                    <i className="fas fa-plus-circle"></i>
                    <span>Add New Page</span>
                  </div>

                  <span className="seperator">/</span>

                  <div className="action-item remove">
                    <i className="fas fa-trash-alt"></i>
                    <span>Remove Page</span>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    )
  }
};

export default TemplateContainer;