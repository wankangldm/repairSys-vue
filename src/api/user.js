import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      "code": data.username,
      "password": data.password
    }
  })
  // return request({
  //   url: '/account/login',
  //   method: 'post',
  //   params: {
  //     "username": data.username,
  //     "password": data.password
  //   }
  // })
}
export function registry(data) {
  return request({
    url: '/account/registry',
    method: 'post',
    params: {
      "username": data.username,
      "password": data.password
    }
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout(token) {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function updatePwd(params) {
  return request({
    url: '/account/updatePwd',
    method: 'post',
    params
  })
}

