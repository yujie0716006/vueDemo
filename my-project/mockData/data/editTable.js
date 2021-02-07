// 使用require引入mock文件
const Mock = require('mockjs')

// 将mock中模拟的数据暴露出去
export default Mock.mock('/edit_table_data', 'get', {
  "result": "success",
  "code": 0,
  "tableLists|10-18": [
    {
      "id|1-100": 100,
      "date": "@date",
      "name": "@cname",
      "address": "@county(true)",
      "status": "success",
      "edit": "1",
    }
  ],
  "msg": "成功"
})
