import React, { Component } from 'react';
import { Pagination as IcePagination } from '@icedesign/base';

export default class Pagination extends Component {
  static displayName = 'Pagination';

  render() {
    const { current, pageSize, total, onChange } = this.props;
    const tCurrent = current || 1,
      tPageSize = pageSize || 20,
      tTotal = total || 0;
    return (
      <div>
        <span>{`共 ${tTotal} 项`}</span>
        <IcePagination
          style={styles.pagination}
          current={tCurrent}
          pageSize={tPageSize}
          total={tTotal}
          onChange={onChange}
        />
      </div>
    );
  }
}

const styles = {
  pagination: {
    display: 'inline-block',
    marginLeft: '10px',
  }
};
