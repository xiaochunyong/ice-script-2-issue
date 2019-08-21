
export const ConstantsInitializer = function (callback) {
  // GetConstant().invoke().then(t => {
  //   global.bizOptions = global.bizOptions || {};
  //   global.bizOptions.constants = t.data;
  //   console.log(`constants loaded: ${Object.keys(t.data).length}`);
  //   callback && callback();
  // });
  callback && callback();
};
export const GetConstantName = function (type, value) {
  const values = global.bizOptions.constants[type] || [];
  let name = null;
  if (values) {
    const item = values.find((json) => {
      return json.value == parseInt(value);
    });
    name = item && item.label;
  }
  if (!name) {
    name = `${type}.${value}`;
  }
  return name;
};

export const GetConstantValueByName = function (type, name) {
  const values = global.bizOptions.constants[type] || [];
  const e = values.find(t => t.label == name);
  if (e) {
    return e.value;
  }
  return null;
};

export const GetConstants = function (type) {
  const values = global.bizOptions.constants[type] || [];
  return values;
};

export const BuildSelectDataSource = function (type, labelForItemAll = '全部') {
  const values = JSON.parse(JSON.stringify(global.bizOptions.constants[type] || []));
  if (labelForItemAll) {
    values.splice(0, 0, { value: '', label: labelForItemAll });
  }
  return values;
};

export const BuildSelectDataSourceNoAllItem = function (type) {
  const values = JSON.parse(JSON.stringify(global.bizOptions.constants[type] || []));
  return values;
};
