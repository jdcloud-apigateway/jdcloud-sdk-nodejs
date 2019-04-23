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
 * elite云存服务相关接口
 * elite云存服务相关接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'elite'
Service._services[serviceId] = true

/**
 * elite service.
 * @version 1.0.4
 */

JDCloud.ELITE = class ELITE extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'elite.cn-south-1.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  分页查询交付单信息
      * @param {Object} opts - parameters
      * @param {integer} opts.pageNo - 页码（最小1）
      * @param {integer} opts.pageSize - 每页记录数（最小10，最大100）
      * @param {string} [opts.deliverNumber] - 交付单号  optional
      * @param {integer} [opts.deliverStatus] - 交付状态  optional
      * @param {string} [opts.createDtStart] - 交付单创建起始时间，格式：yyyy-MM-dd HH:mm:ss  optional
      * @param {string} [opts.createDtEnd] - 交付单创建结束时间，格式：yyyy-MM-dd HH:mm:ss  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status  true为成功，false为失败
      * @param string message  描述信息
      * @param productServiceVoListData data  查询数据结果
      */

  listSaleService (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  listSaleService"
      )
    }

    opts = opts || {}

    if (opts.pageNo === undefined || opts.pageNo === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageNo' when calling listSaleService"
      )
    }
    if (opts.pageSize === undefined || opts.pageSize === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageSize' when calling listSaleService"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.pageNo !== undefined && opts.pageNo !== null) {
      queryParams['pageNo'] = opts.pageNo
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }
    if (opts.deliverNumber !== undefined && opts.deliverNumber !== null) {
      queryParams['deliverNumber'] = opts.deliverNumber
    }
    if (opts.deliverStatus !== undefined && opts.deliverStatus !== null) {
      queryParams['deliverStatus'] = opts.deliverStatus
    }
    if (opts.createDtStart !== undefined && opts.createDtStart !== null) {
      queryParams['createDtStart'] = opts.createDtStart
    }
    if (opts.createDtEnd !== undefined && opts.createDtEnd !== null) {
      queryParams['createDtEnd'] = opts.createDtEnd
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  elite/1.0.4'
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
      `call listSaleService with params:\npathParams:${JSON.stringify(
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

    let request = this.makeRequest(
      '/regions/{regionId}/listSaleService',
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
      *  根据交付单号查询交付单信息
      * @param {Object} opts - parameters
      * @param {string} opts.deliverNumber - 交付单号
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status  true为成功，false为失败
      * @param string message  描述信息
      * @param productServiceVo data  查询数据结果
      */

  getSaleServiceByDeliverNumber (
    opts,
    regionId = this.config.regionId,
    callback
  ) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  getSaleServiceByDeliverNumber"
      )
    }

    opts = opts || {}

    if (opts.deliverNumber === undefined || opts.deliverNumber === null) {
      throw new Error(
        "Missing the required parameter 'opts.deliverNumber' when calling getSaleServiceByDeliverNumber"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.deliverNumber !== undefined && opts.deliverNumber !== null) {
      queryParams['deliverNumber'] = opts.deliverNumber
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  elite/1.0.4'
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
      `call getSaleServiceByDeliverNumber with params:\npathParams:${JSON.stringify(
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

    let request = this.makeRequest(
      '/regions/{regionId}/getSaleServiceByDeliverNumber',
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
      *  确认交付
      * @param {Object} opts - parameters
      * @param {confirmDeliveryInfo} opts.confirmDeliveryInfo - 交付信息
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status  true为成功，false为失败
      * @param string message  描述信息
      */

  confirmSaleServiceDelivery (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  confirmSaleServiceDelivery"
      )
    }

    opts = opts || {}

    if (
      opts.confirmDeliveryInfo === undefined ||
      opts.confirmDeliveryInfo === null
    ) {
      throw new Error(
        "Missing the required parameter 'opts.confirmDeliveryInfo' when calling confirmSaleServiceDelivery"
      )
    }

    let postBody = {}
    if (
      opts.confirmDeliveryInfo !== undefined &&
      opts.confirmDeliveryInfo !== null
    ) {
      postBody['confirmDeliveryInfo'] = opts.confirmDeliveryInfo
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  elite/1.0.4'
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
      `call confirmSaleServiceDelivery with params:\npathParams:${JSON.stringify(
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

    let request = this.makeRequest(
      '/regions/{regionId}/confirmSaleServiceDelivery',
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
      *  获取云存服务信息
      * @param {Object} opts - parameters
      * @param {string} opts.buyerPin - 购买用户pin
      * @param {string} opts.businessData - 业务数据，与下单时的业务数据一致
      * @param {boolean} [opts.queryAll] - 是否查询全部，如果传入false，则只查询当前时间有效的，否则查询所有的  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status  true为成功，false为失败
      * @param string message  描述信息
      * @param storeServiceVo data  查询数据结果
      */

  getStoreService (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  getStoreService"
      )
    }

    opts = opts || {}

    if (opts.buyerPin === undefined || opts.buyerPin === null) {
      throw new Error(
        "Missing the required parameter 'opts.buyerPin' when calling getStoreService"
      )
    }
    if (opts.businessData === undefined || opts.businessData === null) {
      throw new Error(
        "Missing the required parameter 'opts.businessData' when calling getStoreService"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.buyerPin !== undefined && opts.buyerPin !== null) {
      queryParams['buyerPin'] = opts.buyerPin
    }
    if (opts.businessData !== undefined && opts.businessData !== null) {
      queryParams['businessData'] = opts.businessData
    }
    if (opts.queryAll !== undefined && opts.queryAll !== null) {
      queryParams['queryAll'] = opts.queryAll
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  elite/1.0.4'
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
      `call getStoreService with params:\npathParams:${JSON.stringify(
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

    let request = this.makeRequest(
      '/regions/{regionId}/getStoreService',
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
}
module.exports = JDCloud.ELITE
