import server from './server'
export const promiseOne = () => {
  return server.get('/sysm/acl/selectAll.json');
}
export const promiseTwo = () => {
  return server.get('/sysm/users/selectAll.json');
}
