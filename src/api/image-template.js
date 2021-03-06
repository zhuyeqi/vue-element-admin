import request from '@/utils/request'
import download from '@/utils/download'

const baseURL = '/ecds-template'

export function getImageTemplate () {
  return download({
    url: baseURL + `/image/template`,
    method: 'get',
    responseType: 'blob'
  })
}

export function generateImage (data) {
  return download({
    url: baseURL + `/image/genImage`,
    method: 'post',
    responseType: 'blob',
    data
  })
}

export function genStampedImage (data) {
  return download({
    url: baseURL + `/image/stampedImage`,
    method: 'post',
    responseType: 'blob',
    data
  })
}

export function getRemoteAddress (data) {
  return request({
    url: baseURL + `/image/getRemoteAddress`,
    method: 'post',
    data
  })
}

export function getPDFAddress (data) {
  return request({
    url: baseURL + `/pdf/getRemoteAddress`,
    method: 'post',
    data
  })
}
