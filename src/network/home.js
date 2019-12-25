import { request } from './request'

export function getHomeData () {
  return request({
    url: 'api/home/multidata'
  })
}

export function getGoodsData (type, page) {
  return request({
    url: 'api/home/data',
    params: {
      type,
      page
    }
  })
}
