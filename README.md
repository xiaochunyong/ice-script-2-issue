# ice-script2.x 导致样式丢失问题 - 重现Demo

`master` 分支是使用ice-scripts 2.x (有问题)

`ice1` 分支是使用ice-script 1.x (没问题)



## 问题已经解决

> 将package.json文件中的  改为  

```
- "@icedesign/menu": "^0.1.1"
+ "@icedesign/styled-menu": "^0.1.4"
```


## 该Demo中还存在一个主题问题
> package.json文件中的依赖了主题 `"@icedesign/skin": "^0.1.0",` 在ice-script2中, 应该在`ice.config.js`的 `plugins`部分调整为:

```
plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/skin',
    }],
]
``` 
