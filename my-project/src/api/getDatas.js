import server from './server'
export const promiseOne = () => {
  return server.get('/sysm/acl/selectAll.json');
}
export const promiseTwo = () => {
  return server.get('/sysm/users/selectAll.json');
}

// 获取到的模拟数据
export const tableDataApi = () => {
  return server.get('/edit_table_data')
}
