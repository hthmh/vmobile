import fetch from './fetch'

export function getParams(params) {
  return fetch({
    url: "/get",
    method: "get",
    params: params
  })
}

export function postParams(params) {
  return fetch({
    url: "/post",
    method: "POST",
    data: params,
    needToken: true
  })
}
