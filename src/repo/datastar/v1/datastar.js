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
 * welcome测试接口
 * API related to datastar
 *
 * OpenAPI spec version: v1
 * Contact: 
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader');
var JDCloud = require('../../../lib/core');
var Service = JDCloud.Service;
var serviceId = "datastar"
Service._services[serviceId] = true;

/**
* datastar service.
* @version 1.0.4
*/

JDCloud.DATASTAR= class DATASTAR extends Service {
    constructor(options = {}) {
            options._defaultEndpoint = {};
            options._defaultEndpoint.protocol = options._defaultEndpoint.protocol || 'https';
            options._defaultEndpoint.host = options._defaultEndpoint.host || 'datastar.cn-south-1.jdcloud-api.com';
            options.basePath = '/v1'; //默认要设为空""
            super( serviceId , options);
    }

      /**
      *  根据设备ID获取是否有匹配的人群包
      * @param {Object} opts - parameters
      * @param {string} opts.deviceIds - MD5（deviceId），多个MD5（deviceId）用英文逗号进行分割，注：MD5结果小写 
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status  true为成功，false为失败
      * @param string message  描述信息
      * @param string data  Map&lt;String,String&gt;序列化后的字符串，需要再次转换并使用。Key为deviceId，value为品牌编码，表示匹配上，没在返回结果中的设备id，表示没有匹配上
      */

    getPackageId(opts, regionId = this.config.regionId, callback){
         if (typeof regionId === 'function') {
           callback = regionId
           regionId = this.config.regionId
         }

          if (regionId === undefined || regionId === null) {
               throw new Error('Missing the required parameter \'regionId\' when calling  getPackageId');
          }

         opts = opts || {};

          if (opts.deviceIds === undefined || opts.deviceIds === null) {
               throw new Error('Missing the required parameter \'opts.deviceIds\' when calling getPackageId');
          }

          let postBody = null;
          let queryParams = {
          };
           if (opts.deviceIds !== undefined && opts.deviceIds !== null) {
               queryParams['deviceIds'] = opts.deviceIds
           }

          let pathParams = {
               'regionId': regionId,
          };

         let headerParams = {
               'User-Agent': 'JdcloudSdkNode/1.0.0  datastar/1.0.4',
          };
          
          // 扩展自定义头
          if (opts['x-extra-header']) {
            for (let extraHeader in opts['x-extra-header']) {
              headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
            }
          }

          let formParams = {};

          let contentTypes = ['application/json'];
          let accepts = ['application/json'];

          let returnType = null;

          this.config.logger(`call getPackageId with params:\npathParams:${JSON.stringify(pathParams)},\nqueryParams:${JSON.stringify(queryParams)}, \nheaderParams:${JSON.stringify(headerParams)}, \nformParams:${JSON.stringify(formParams)}, \npostBody:${JSON.stringify(postBody)}`,"DEBUG");

          let request = this.makeRequest('/regions/{regionId}/dmp/getPackageId', 'GET', pathParams, queryParams,
                          headerParams, formParams, postBody, contentTypes, accepts, returnType, callback);

          return request.then(function (result) {
                 if (callback) {
                          return callback(null, result);
                 }
                          return result
                 }, function (error) {
                          if (callback) {
                              return callback(error);
                          }
                          return Promise.reject(error)
                 });
    }

      /**
      *  根据区域、行业、一级指标、二级指标、起始时间等条件查询数据
      * @param {Object} opts - parameters
      * @param {string} opts.region - 查询区域，比如某某省或某某市（可选区域以最终授权为准） 
      * @param {string} opts.industry - 查询行业，比如某个水果或者农作物（可选行业以最终授权为准） 
      * @param {string} opts.startDate - 查询起始时间，格式如下：yyyy-MM-dd 
      * @param {string} opts.endDate - 查询结束时间，格式如下：yyyy-MM-dd 
      * @param {string} opts.firstIndex - 数据对应的第一级分析指标（可选一级指标以最终授权为准） 
      * @param {string} [opts.secondIndex] - 数据对应的第二级分析指标，如不填写，则默认把一级指标下的所有二级指标都查询出来（可选二级指标以最终授权为准）  optional 
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status  true为成功，false为失败
      * @param string message  描述信息
      * @param regionIndustryDataList data  查询数据结果
      */

    getLargeScreenData(opts, regionId = this.config.regionId, callback){
         if (typeof regionId === 'function') {
           callback = regionId
           regionId = this.config.regionId
         }

          if (regionId === undefined || regionId === null) {
               throw new Error('Missing the required parameter \'regionId\' when calling  getLargeScreenData');
          }

         opts = opts || {};

          if (opts.region === undefined || opts.region === null) {
               throw new Error('Missing the required parameter \'opts.region\' when calling getLargeScreenData');
          }
          if (opts.industry === undefined || opts.industry === null) {
               throw new Error('Missing the required parameter \'opts.industry\' when calling getLargeScreenData');
          }
          if (opts.startDate === undefined || opts.startDate === null) {
               throw new Error('Missing the required parameter \'opts.startDate\' when calling getLargeScreenData');
          }
          if (opts.endDate === undefined || opts.endDate === null) {
               throw new Error('Missing the required parameter \'opts.endDate\' when calling getLargeScreenData');
          }
          if (opts.firstIndex === undefined || opts.firstIndex === null) {
               throw new Error('Missing the required parameter \'opts.firstIndex\' when calling getLargeScreenData');
          }

          let postBody = null;
          let queryParams = {
          };
           if (opts.region !== undefined && opts.region !== null) {
               queryParams['region'] = opts.region
           }
           if (opts.industry !== undefined && opts.industry !== null) {
               queryParams['industry'] = opts.industry
           }
           if (opts.startDate !== undefined && opts.startDate !== null) {
               queryParams['startDate'] = opts.startDate
           }
           if (opts.endDate !== undefined && opts.endDate !== null) {
               queryParams['endDate'] = opts.endDate
           }
           if (opts.firstIndex !== undefined && opts.firstIndex !== null) {
               queryParams['firstIndex'] = opts.firstIndex
           }
           if (opts.secondIndex !== undefined && opts.secondIndex !== null) {
               queryParams['secondIndex'] = opts.secondIndex
           }

          let pathParams = {
               'regionId': regionId,
          };

         let headerParams = {
               'User-Agent': 'JdcloudSdkNode/1.0.0  datastar/1.0.4',
          };
          
          // 扩展自定义头
          if (opts['x-extra-header']) {
            for (let extraHeader in opts['x-extra-header']) {
              headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
            }
          }

          let formParams = {};

          let contentTypes = ['application/json'];
          let accepts = ['application/json'];

          let returnType = null;

          this.config.logger(`call getLargeScreenData with params:\npathParams:${JSON.stringify(pathParams)},\nqueryParams:${JSON.stringify(queryParams)}, \nheaderParams:${JSON.stringify(headerParams)}, \nformParams:${JSON.stringify(formParams)}, \npostBody:${JSON.stringify(postBody)}`,"DEBUG");

          let request = this.makeRequest('/regions/{regionId}/largeScreen/getData', 'GET', pathParams, queryParams,
                          headerParams, formParams, postBody, contentTypes, accepts, returnType, callback);

          return request.then(function (result) {
                 if (callback) {
                          return callback(null, result);
                 }
                          return result
                 }, function (error) {
                          if (callback) {
                              return callback(error);
                          }
                          return Promise.reject(error)
                 });
    }

      /**
      *  创建多级筛选
      * @param {Object} opts - parameters
      * @param {string} opts.mallId - 商场ID 
      * @param {string} opts.profileId - 定制画像任务ID 
      * @param {string} opts.dimensions - 多级筛选的标签，多个标签请用英文逗号分隔，最多只能传三个标签 
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status  true为成功，false为失败
      * @param string message  描述信息
      * @param string data  多级筛选的任务ID
      */

    create(opts, regionId = this.config.regionId, callback){
         if (typeof regionId === 'function') {
           callback = regionId
           regionId = this.config.regionId
         }

          if (regionId === undefined || regionId === null) {
               throw new Error('Missing the required parameter \'regionId\' when calling  create');
          }

         opts = opts || {};

          if (opts.mallId === undefined || opts.mallId === null) {
               throw new Error('Missing the required parameter \'opts.mallId\' when calling create');
          }
          if (opts.profileId === undefined || opts.profileId === null) {
               throw new Error('Missing the required parameter \'opts.profileId\' when calling create');
          }
          if (opts.dimensions === undefined || opts.dimensions === null) {
               throw new Error('Missing the required parameter \'opts.dimensions\' when calling create');
          }

         let postBody =   {
          };
           if (opts.mallId !== undefined && opts.mallId !== null) {
               postBody['mallId'] = opts.mallId
           }
           if (opts.profileId !== undefined && opts.profileId !== null) {
               postBody['profileId'] = opts.profileId
           }
           if (opts.dimensions !== undefined && opts.dimensions !== null) {
               postBody['dimensions'] = opts.dimensions
           }

          let queryParams = {};

          let pathParams = {
               'regionId': regionId,
          };

         let headerParams = {
               'User-Agent': 'JdcloudSdkNode/1.0.0  datastar/1.0.4',
          };
          
          // 扩展自定义头
          if (opts['x-extra-header']) {
            for (let extraHeader in opts['x-extra-header']) {
              headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
            }
          }

          let formParams = {};

          let contentTypes = ['application/json'];
          let accepts = ['application/json'];

          let returnType = null;

          this.config.logger(`call create with params:\npathParams:${JSON.stringify(pathParams)},\nqueryParams:${JSON.stringify(queryParams)}, \nheaderParams:${JSON.stringify(headerParams)}, \nformParams:${JSON.stringify(formParams)}, \npostBody:${JSON.stringify(postBody)}`,"DEBUG");

          let request = this.makeRequest('/v1/regions/{regionId}/profileMultiLevel/create', 'POST', pathParams, queryParams,
                          headerParams, formParams, postBody, contentTypes, accepts, returnType, callback);

          return request.then(function (result) {
                 if (callback) {
                          return callback(null, result);
                 }
                          return result
                 }, function (error) {
                          if (callback) {
                              return callback(error);
                          }
                          return Promise.reject(error)
                 });
    }

      /**
      *  多级筛选结果查询接口
      * @param {Object} opts - parameters
      * @param {string} opts.profileSelectRecordId - 多级筛选任务ID 
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status  true为成功，false为失败
      * @param string message  描述信息
      * @param string data  多级筛选任务的执行结果
      */

    getResult(opts, regionId = this.config.regionId, callback){
         if (typeof regionId === 'function') {
           callback = regionId
           regionId = this.config.regionId
         }

          if (regionId === undefined || regionId === null) {
               throw new Error('Missing the required parameter \'regionId\' when calling  getResult');
          }

         opts = opts || {};

          if (opts.profileSelectRecordId === undefined || opts.profileSelectRecordId === null) {
               throw new Error('Missing the required parameter \'opts.profileSelectRecordId\' when calling getResult');
          }

          let postBody = null;
          let queryParams = {
          };
           if (opts.profileSelectRecordId !== undefined && opts.profileSelectRecordId !== null) {
               queryParams['profileSelectRecordId'] = opts.profileSelectRecordId
           }

          let pathParams = {
               'regionId': regionId,
          };

         let headerParams = {
               'User-Agent': 'JdcloudSdkNode/1.0.0  datastar/1.0.4',
          };
          
          // 扩展自定义头
          if (opts['x-extra-header']) {
            for (let extraHeader in opts['x-extra-header']) {
              headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
            }
          }

          let formParams = {};

          let contentTypes = ['application/json'];
          let accepts = ['application/json'];

          let returnType = null;

          this.config.logger(`call getResult with params:\npathParams:${JSON.stringify(pathParams)},\nqueryParams:${JSON.stringify(queryParams)}, \nheaderParams:${JSON.stringify(headerParams)}, \nformParams:${JSON.stringify(formParams)}, \npostBody:${JSON.stringify(postBody)}`,"DEBUG");

          let request = this.makeRequest('/v1/regions/{regionId}/profileMultiLevel/getResult', 'GET', pathParams, queryParams,
                          headerParams, formParams, postBody, contentTypes, accepts, returnType, callback);

          return request.then(function (result) {
                 if (callback) {
                          return callback(null, result);
                 }
                          return result
                 }, function (error) {
                          if (callback) {
                              return callback(error);
                          }
                          return Promise.reject(error)
                 });
    }

};
module.exports = JDCloud.DATASTAR
