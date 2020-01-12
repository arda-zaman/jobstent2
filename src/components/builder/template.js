import React from 'react';
import ResumeItem from './resumeItem';

class TemplateContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    document.querySelector('.g-resume-container').addEventListener('mouseup', this.windowClickEvents);
  }

  componentWillUnmount() {
    document.querySelector('.g-resume-container').removeEventListener('mouseup', this.windowClickEvents);
  }

  windowClickEvents = (e) => {
    const { removeFieldActive } = this.props.actions;
    const fieldLine = e.target.closest('.field-line');

    if (!fieldLine && removeFieldActive) {
      removeFieldActive();
    }
  };

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
        style: Object.assign({}, fieldDefaults.defaultStyle, { left: locations.offsetX, top: locations.offsetY }),
        fieldStyle: { ...fieldDefaults.defaultFieldStyle }
      });

      console.log("RESPONSE:", field);
    } else if (process == 'move') {
      const elementLocations = dataTransfer.locations;
      const currentPageId = dataTransfer.currentPageId;
      let newStyle = {};

      newStyle = {
        left: (event.clientX + parseInt(elementLocations.x, 10)),
        top: (event.clientY + parseInt(elementLocations.y, 10))
      }

      if (currentPageId != pageID) {
        const newPage = document.getElementById(`page_${pageID}`);
        const newPageOrder = parseInt(newPage.getAttribute('order'), 10);
        const currentPage = document.getElementById(`page_${currentPageId}`);
        const currentPageOrder = parseInt(currentPage.getAttribute('order'), 10);

        if (currentPageOrder < newPageOrder) {
          newStyle.top = newStyle.top - newPage.offsetHeight - 100;
        } else {
          newStyle.top = newStyle.top + currentPage.offsetHeight + 100;
        }
      }

      document.getElementById(`field_${fieldID}`).removeAttribute('isDragging');

      let field = await updateItem({
        fid: fieldID,
        style: newStyle,
        pageID: pageID
      });
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
    const field = e.target.closest('.field-line');
    const style = window.getComputedStyle(field, null);
    e.dataTransfer.setData('text', JSON.stringify({
      process: 'move',
      id: field.id.replace('field_', ''),
      currentPageId: field.closest('.page').id.replace('page_', ''),
      locations: {
        x: (parseInt(style.getPropertyValue("left"), 10) - e.clientX),
        y: (parseInt(style.getPropertyValue("top"), 10) - e.clientY)
      }
    }));

    window.componentState.dragType = "move";
    field.setAttribute('isDragging', true);

    // const crt = e.target.querySelector('.field-content');
    // e.dataTransfer.setDragImage(crt, 0, 0);
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
              order={page.order}
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
                          fieldStyle={item.fieldStyle}
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

                  <div className="action-item remove" onClick={actions && actions.removePage}>
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