/* eslint no-unused-expressions: 0 */
import React, { Component } from 'react';
import { Icon } from '@icedesign/base';

/**
 * 该组件不关心具体的formComponent的值，只保存原始值
 */
export default class CellEditor extends Component {
  static displayName = 'CellEditor';

  constructor(props) {
    super(props);
    if (!props.formComponent) {
      console.error("props.formComponent must not be null");
    }
    if (props.renderValue) {
      this.renderValue = props.renderValue;
    }
    this.state = {
      editMode: false,
      value: props.value,
    };
  }

  renderValue = (value) => {
    return value;
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  editThisCell = () => {
    // 缓存数据以便回滚
    this.setState({
      editMode: true,
    });
  };

  updateValue = () => {
    // 一般用于校验
    if (this.props.beforeUpdate) {
      if (!this.props.beforeUpdate()) {
        return;
      }
    }
    this.setState({
      editMode: false,
    });
    const { index, valueKey } = this.props;
    this.props.onUpdate && this.props.onUpdate(index, valueKey);
  };

  rollBackThisCell = () => {
    this.setState({
      editMode: false,
    });
    const { index, valueKey } = this.props;
    const { value } = this.state;
    this.props.onReset && this.props.onReset(index, valueKey, value);
  };

  render() {
    const { value, editMode } = this.state;
    if (editMode) {
      return (
        <div className="celleditor">
          {
            React.cloneElement(
              this.props.formComponent,
              { style: styles.formComponentCell }
            )
          }
          <span
            style={styles.operationIcon}
            title="确定"
            onClick={this.updateValue}
          >
            <Icon size="xs" type="select" />
          </span>
          <span
            style={styles.operationIcon}
            title="撤销"
            onClick={this.rollBackThisCell}
          >
            <Icon size="xs" type="refresh" />
          </span>

        </div>
      );
    }
    return (
      <div className="celleditor">
        <span style={styles.staticSpan}>{this.renderValue(value)}</span>
        <span
          style={styles.operationIcon}
          className="celleditor-trigger"
          title="编辑"
          onClick={this.editThisCell}
        >
          <Icon size="xs" type="edit" />
        </span>
      </div>
    );
  }
}

const styles = {
  formComponentCell: {
    width: 'calc(100% - 44px)'
  },
  operationIcon: {
    marginLeft: '10px',
    color: '#999',
    cursor: 'pointer',
  },
  staticSpan: {
    display: 'inline-block',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap'
  }
};
