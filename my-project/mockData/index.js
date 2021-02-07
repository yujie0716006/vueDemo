// 将data文件夹下面的所有文件的文件名添加到filesName数组中
const filesName = ['editTable']

// 便利循环引入mock的数据文件，总后在main.js中引入该文件
filesName.forEach(item => {
  require(`./data/${item}.js`)
})
