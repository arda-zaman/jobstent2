import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as builderActions from '../../actions/builder';
import { basic_fields, special_fields } from '../../constants/Fields';
import { uuid } from '../../helpers';


class LeftPanel extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  fieldDragStart = (e) => {
    const field = e.target;
    e.dataTransfer.setData('text/plain', JSON.stringify({
      process: 'copy',
      type: field.getAttribute('type')
    }));
    window.componentState.dragType = "copy";
    field.classList.add('active');
  }

  fieldDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  fieldDragEnd = (e) => {
    const field = e.target;
    field.classList.remove('active');
  };

  renderFields(fields) {
    const dom = fields.map((field, index) => {
      return (
        <li
          className={`field`}
          type={field.type}
          data-order={index}
          draggable={true}
          onDragStart={this.fieldDragStart}
          onDragOver={this.fieldDragOver}
          onDragEnd={this.fieldDragEnd}
        >
          <span className="text">{field.text}</span>
        </li>
      )
    });

    return dom;
  }

  panelHandler = (type, event) => {
    const { onLeftPanelListHandler } = this.props;
    onLeftPanelListHandler(type);
  };

  render() {
    return (
      <aside className="left-panel">
        <div className="left-panel-container">
          <div className="panel-title">
            <i className="fas fa-th-list" />
            <strong>Add Field</strong>
          </div>

          <div className="panel-content">
            <div className="search">
              <input type="search" placeholder="Search Fields" />
            </div>
            <div className="fields">
              <div className="field-group" data-passive={this.props.builder.basic_fields == 'closed'}>
                <div
                  className="field-group-title"
                  onClick={this.panelHandler.bind(this, 'basic_fields')}
                >
                  <span>Basic Fields</span>
                  <i className="material-icons">arrow_drop_down</i>
                </div>
                <ul className="field-group-items" >
                  {this.renderFields(basic_fields)}
                </ul>
              </div>

              <div className="field-group" data-passive={this.props.builder.quick_fields == 'closed'}>
                <div
                  className="field-group-title"
                  onClick={this.panelHandler.bind(this, 'quick_fields')}
                >
                  <span>Quick Fields</span>
                  <i className="material-icons">arrow_drop_down</i>
                </div>
                <ul className="field-group-items">
                  {this.renderFields(special_fields)}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </aside>
    )
  }
}

LeftPanel.propTypes = {

};

LeftPanel.defaultProps = {

};

const mapStateToProps = (state) => {
  return {
    builder: state.builder,
  }
}

const mapDispatchToProps = {
  onLeftPanelListHandler: builderActions.leftPanelListHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);