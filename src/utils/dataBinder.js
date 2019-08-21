import rawDataBinder from '@icedesign/data-binder';

const dataBinder = (options) => {
  const responseFormatter = (responseHandler, res, originResponse) => {
    // console.log(res);
    // 做一些数据转换
    const newRes = {
      status: res.code === 0 ? 'SUCCESS' : 'ERROR',
      message: res.message,
      data: {
        currentPage: res.pageIndex,
        pageSize: res.pageSize,
        total: res.totalCount,
        data: res.data,
        list: res.data,
        extra: res.extra,
      }
    };
    // 回传给处理函数
    // 不做回传处理会导致数据更新逻辑中断
    responseHandler(newRes, originResponse);
  };

  for (const k in options) {
    if (!options[k].responseFormatter) {
      options[k].responseFormatter = responseFormatter;
    }
    if (!options[k].defaultBindingData) {
      options[k].defaultBindingData = {
        currentPage: 0,
        pageSize: 20,
        total: 0,
        data: null,
        list: []
      };
    }
  }
  // console.log('CDataBinder', options);
  return rawDataBinder(options);
}

export default dataBinder;
