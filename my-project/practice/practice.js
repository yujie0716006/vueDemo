// 写一个函数去除两边的空字符串

const str = '   姓名  是多少    '

console.log('啥事', str)
console.log('内容', str.replace(/(^\s*)|(\s*$)/g, ''))
