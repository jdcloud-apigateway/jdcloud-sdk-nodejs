/*
 * Copyright 2018 JDCLOUD.COM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http:#www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 页面测试检测接口
 * 京东云信用评分-OpenAPI页面测试检测接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'bri'
Service._services[serviceId] = true

/**
 * bri service.
 * @version 1.1.0
 */

class BRI extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'bri.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  获取黑白名单列表
      * @param {Object} opts - parameters
      * @param {string} [opts.resourceType] - 数据类型，不传或者为空返回所有类型数据，ip-IP，phone-手机，addr-地址，card-身份，pin-账户，eid-设备  optional
      * @param {string} [opts.bwType] - 数据类型，不传或者为空返回所有类型数据，列表类型，black-黑名单，white-白名单  optional
      * @param {integer} [opts.size] - 页面大小，缺省为10  optional
      * @param {integer} [opts.index] - 起始页，缺省为1  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param integer totalCount  总量
      * @param integer index  分页-页码
      * @param integer size  分页-每页大小
      * @param bwcfg list
      */

  describeBWList (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeBWList"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}
    if (opts.resourceType !== undefined && opts.resourceType !== null) {
      queryParams['resourceType'] = opts.resourceType
    }
    if (opts.bwType !== undefined && opts.bwType !== null) {
      queryParams['bwType'] = opts.bwType
    }
    if (opts.size !== undefined && opts.size !== null) {
      queryParams['size'] = opts.size
    }
    if (opts.index !== undefined && opts.index !== null) {
      queryParams['index'] = opts.index
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  bri/1.1.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call describeBWList with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/regions/{regionId}/blackwhite:list',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  设置黑白名单
      * @param {Object} opts - parameters
      * @param {bwcfgSet} opts.req - 黑白名单数据
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  setBWList (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  setBWList"
      )
    }

    opts = opts || {}

    if (opts.req === undefined || opts.req === null) {
      throw new Error(
        "Missing the required parameter 'opts.req' when calling setBWList"
      )
    }

    let postBody = {}
    if (opts.req !== undefined && opts.req !== null) {
      postBody['req'] = opts.req
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  bri/1.1.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call setBWList with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/regions/{regionId}/blackwhite:list',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  删除黑白名单
      * @param {Object} opts - parameters
      * @param {string} opts.id - 黑白名单ID, 多个用逗号分隔
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  delBWList (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  delBWList"
      )
    }

    opts = opts || {}

    if (opts.id === undefined || opts.id === null) {
      throw new Error(
        "Missing the required parameter 'opts.id' when calling delBWList"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.id !== undefined && opts.id !== null) {
      queryParams['id'] = opts.id
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  bri/1.1.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call delBWList with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/regions/{regionId}/blackwhite:list',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  获取数据信用评分
      * @param {Object} opts - parameters
      * @param {} [opts.tasks] - 检测任务列表，包含一个或多个元素。每个元素是个结构体，最多可添加100元素，即最多对100个数据进行评分。每个元素的具体结构描述见creditTask。  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param creditResult data
      */

  creditScore (opts, callback) {
    opts = opts || {}

    let postBody = {}
    if (opts.tasks !== undefined && opts.tasks !== null) {
      postBody['tasks'] = opts.tasks
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  bri/1.1.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call creditScore with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/creditScore:check',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
}
module.exports = BRI
