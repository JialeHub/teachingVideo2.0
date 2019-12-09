//类名设置工具
export function addClass(obj, cn) {
  if (hasClass(obj, cn) === false){
    obj.className += " " + cn;
  }
}

//判断元素中是否含有指定的class属性值，有则返回ture，无则false
export function hasClass(obj, cn) {
  let reg = new RegExp("\\b" + cn + "\\b");
  return reg.test(obj.className);
}

//删除元素中的指定class属性
export function removeClass(obj, cn) {
  let reg = new RegExp("\\b" + cn + "\\b");
  obj.className = obj.className.replace(reg, "");
}

//切换元素中的指定class属性，没则添加，有则删除
export function toggleClass(obj, cn) {
  if (hasClass(obj, cn)) {
    removeClass(obj, cn);
  } else {
    addClass(obj, cn);
  }
}
//读取当前显示样式（综合）
export function getStyle(obj, name) {
  //构建getStyle函数
  if (window.getComputedStyle) {
    //浏览器能找到window.getComputedStyle则返回true
    return getComputedStyle(obj, null)[name]; //正常浏览器方法
  } else {
    return obj.currentStyle[name]; //IE8的方法
  }
}
