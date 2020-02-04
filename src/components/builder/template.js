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

  /** DRAG START */

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

      const fieldDOM = document.getElementById(`field_${fieldID}`);
      fieldDOM.removeAttribute('isDragging');
      fieldDOM.removeAttribute('ghost');

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

    setTimeout(() => {
      field.setAttribute('ghost', true);
    }, 0);
    // const crt = e.target.querySelector('.field-content');
    // e.dataTransfer.setDragImage(crt, 0, 0);
  }

  addedFieldDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  addedFieldDragEnd = (event) => {
    if (event.dataTransfer.dropEffect === 'none') {
      event.target.closest('.field-line').removeAttribute('isDragging');
      event.target.closest('.field-line').removeAttribute('ghost');
    }
  };

  /** DRAG-END */

  /** RESIZE */

  fieldResizeHandler = (event) => {
    event.preventDefault();
    event.persist();

    const { activeField } = this.props;
    if (!activeField) return;

    const fieldContent = document.querySelector(`#field_${activeField.fid} .resume-field-content`);
    const field = document.querySelector(`#field_${activeField.fid}`);
    const page = document.querySelector(`#page_${activeField.pageID}`);

    const data = {
      originalWidth: 0,
      originalHeight: 0,
      originalX: 0,
      originalY: 0,
      originalMouseX: 0,
      originalMouseY: 0,
      originalEvent: event,
      fieldContent,
      field,
      page: page.getBoundingClientRect()
    };

    data.originalWidth = parseFloat(getComputedStyle(fieldContent, null).getPropertyValue('width').replace('px', ''));
    data.originalHeight = parseFloat(getComputedStyle(fieldContent, null).getPropertyValue('height').replace('px', ''));
    data.originalX = fieldContent.getBoundingClientRect().left;
    data.originalY = fieldContent.getBoundingClientRect().top;
    data.originalMouseX = event.pageX;
    data.originalMouseY = event.pageY;

    this.resizeData = data;

    window.addEventListener('mousemove', this.fieldResizing);
    window.addEventListener('mouseup', this.endFieldResizing);
  };

  fieldResizing = (e) => {
    const { originalWidth, originalHeight, originalX, originalY, originalMouseX,
      originalMouseY, originalEvent, fieldContent, field, page } = this.resizeData;

    const currentResizer = originalEvent.target.getAttribute('name');
    let width = 0, height = 0;

    switch (currentResizer) {
      case 'top-left':
        width = originalWidth - (e.pageX - originalMouseX);
        height = originalHeight - (e.pageY - originalMouseY);

        fieldContent.style.width = width + 'px';
        field.style.left = (originalX + (e.pageX - originalMouseX)) - page.x + 'px';

        fieldContent.style.height = height + 'px';
        field.style.top = originalY + (e.pageY - originalMouseY) - page.y + 'px';
        break;
      case 'top-right':
        width = originalWidth + (e.pageX - originalMouseX);
        height = originalHeight - (e.pageY - originalMouseY)

        fieldContent.style.width = width + 'px';

        fieldContent.style.height = height + 'px';
        field.style.top = (originalY + (e.pageY - originalMouseY)) - page.y + 'px';
        break;
      case 'bottom-left':
        height = originalHeight + (e.pageY - originalMouseY);
        width = originalWidth - (e.pageX - originalMouseX);

        fieldContent.style.height = height + 'px';
        fieldContent.style.width = width + 'px';

        field.style.left = (originalX + (e.pageX - originalMouseX)) - page.x + 'px';
        break;
      case 'bottom-right':
        width = originalWidth + (e.pageX - originalMouseX);
        height = originalHeight + (e.pageY - originalMouseY);

        fieldContent.style.width = width + 'px';
        fieldContent.style.height = height + 'px';
        break;
    }
  };

  endFieldResizing = async (e) => {
    window.removeEventListener('mousemove', this.fieldResizing);
    if (!this.resizeData) return;

    const { fieldContent, field } = this.resizeData;

    const { width, height } = getComputedStyle(fieldContent);
    const { left, top } = getComputedStyle(field);

    console.log(`Width: ${width} Height: ${height} Left: ${left} top:  ${top} `);

    const { activeField, actions: { updateItem } } = this.props;
    await updateItem({
      fid: activeField.fid,
      style: { left, top },
      fieldStyle: { width, height },
      pageID: activeField.pageID
    });

    this.resizeData = null;
  }


  /** RESIZE-END */

  render() {
    const { pages, fields, zoom, actions, renderPDF } = this.props;

    return (
      <div className="g-resume-container" style={{ transform: zoom ? `scale(${zoom.percent / 100})` : `scale(1)` }}>
        <div className="pages">
          {pages && pages.map((page, index) => (
            <div
              className="page"
              id={`page_${page.fid}`}
              order={page.order}
              onDrop={this.pageDropzone.bind(this, page)}
              onDragEnd={this.addedFieldDragEnd}
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
                          onBlur={this.fieldOnBlur}
                          renderPDF={this.props.renderPDF}
                          onResize={this.fieldResizeHandler}
                        />
                      )
                    ))}
                  </ul>
                </div>
              </div>

              {(!renderPDF) && (
                <React.Fragment>
                  <div className="page-number">
                    <span>Page {index + 1}</span>
                  </div>

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
                </React.Fragment>
              )}

            </div>
          ))}
        </div>
      </div>
    )
  }

  fieldOnBlur = async ({ val, event }) => {
    const { activeField, actions: { updateItem } } = this.props;
    let field = await updateItem({
      fid: activeField.fid,
      value: { value: val },
      pageID: activeField.pageID
    });
  };
};

export default TemplateContainer;