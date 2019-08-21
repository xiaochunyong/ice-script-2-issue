const ConvertAttachmentUrlsToFileList = (list) => {
  const fileList = [];
  // console.log(list)
  if (list) {
    list.map((t) => {
      const filename = decodeURI(t.substring(t.lastIndexOf('/')));
      const file = {
        name: filename,
        fileName: filename,
        status: 'done',
        // size: 1000,
        downloadURL: t,
        fileURL: t,
        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      };
      fileList.push(file);
    });
  }
  // console.log(fileList);
  return fileList;
};


const logisticsBillOrderDetailStatusConvert = (record) => {
  if (!record.logisticsBillNo || record.status == 100) return '待取货';
  else if (!record.flag) return '已取货';
  else if (record.flag == 1) return '无机器';
  else if (record.flag == 2) return '无法扫描条码';
  return '未知状态';
};

function ConvertTreeDataResponse(list) {
  let treeData = null;
  if (list) {
    treeData = [];
    list.map(t => {
      const data = {
        id: t.id,
        value: t.id.toString(),
        label: t.name,
        isLeaf: t.isLeaf
      };
      if (t.children) {
        data.children = ConvertTreeDataResponse(t.children);
      }
      treeData.push(data);
    });
  }
  return treeData;
}

const _converter = (list, value) => {
  if (typeof value === 'undefined') return '';
  const foundList = list.filter(it => `${it.value}` === `${value}`);
  if (foundList.length) {
    return foundList[0].label || ''
  }
  return '';
};

const elementTypeList = [
  { label: 'Banner关联项目', value: 'project' },
  { label: '广告', value: 'multi-ad' },
  { label: '代金券支付方式', value: 'multi-coupon-pay' },
  { label: '文本框', value: 'input' },
  { label: '数字框', value: 'number' },
  { label: '是/否', value: 'boolean' },
  { label: '单选下拉框', value: 'select' },
  { label: '多选下拉框', value: 'multi-select' },
];
const elementTypeConvert = _converter.bind(null, elementTypeList);


// // List<RegionSelectorLevelData>
// function ConvertRegionSelectorDataToCascaderSelectDataSource(list) {
//     var treeData = null;
//     if (list) {
//         treeData = [];
//         var parent = null;
//         list.map((t, i) => {
//             var children = [];
//             t.regions.map(r => {
//                 var data = {
//                     id: r.id,
//                     value: r.id.toString(),
//                     label: r.name,
//                     isLeaf: r.isLeaf
//                 }
//                 children.push(data);
//             })
//             if (parent) {
//                 parent.children = children;
//             }
//             if (i == 0) {
//                 treeData = treeData.concat(children);
//             }
//             parent = t.regions.filter(r => r.id == t.selectedId);
//         })
//     }
//     return treeData;
// }

export {
  ConvertAttachmentUrlsToFileList,
  logisticsBillOrderDetailStatusConvert,
  ConvertTreeDataResponse,
  elementTypeList,
  elementTypeConvert,
};
