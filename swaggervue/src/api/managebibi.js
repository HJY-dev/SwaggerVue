/* eslint-disable */
import apiRequest from "@/utils/apiRequest"

const domain = process.env.VUE_APP_AUTHORITY

/*==========================================================
 *                    
 ==========================================================*/

    
    /**
    * 查询单条接口
    * request: Api_Get
     * @param id - 
    */
    export const Api_Get = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Api/Get',
            method: 'get',
            params: parameters
        });
    }
    
    
    /**
    * 查询全部接口
    * request: Api_GetList
     * @param key - 
    */
    export const Api_GetList = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Api/GetList',
            method: 'get',
            params: parameters
        });
    }
    
    
    /**
    * 查询分页接口
    * request: Api_GetPage
    */
    export const Api_GetPage = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Api/GetPage',
            method: 'post',
            data: parameters
        });
    }
    
    
    /**
    * 新增接口
    * request: Api_Add
    */
    export const Api_Add = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Api/Add',
            method: 'post',
            data: parameters
        });
    }
    
    
    /**
    * 修改接口
    * request: Api_Update
    */
    export const Api_Update = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Api/Update',
            method: 'put',
            data: parameters
        });
    }
    
    
    /**
    * 删除接口
    * request: Api_SoftDelete
     * @param id - 
    */
    export const Api_SoftDelete = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Api/SoftDelete',
            method: 'delete',
            data: parameters
        });
    }
    
    
    /**
    * 批量删除接口
    * request: Api_BatchSoftDelete
    */
    export const Api_BatchSoftDelete = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Api/BatchSoftDelete',
            method: 'put',
            data: parameters
        });
    }
    
    
    /**
    * 同步接口
    支持新增和修改接口
    根据接口是否存在自动禁用和启用api
    * request: Api_Sync
    */
    export const Api_Sync = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Api/Sync',
            method: 'post',
            data: parameters
        });
    }
    
    
    /**
    * 获取验证码
    * request: Auth_GetVerifyCode
     * @param lastKey - 上次验证码键
    */
    export const Auth_GetVerifyCode = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Auth/GetVerifyCode',
            method: 'get',
            params: parameters
        });
    }
    
    
    /**
    * 获取验证数据
    * request: Auth_GetCaptcha
    */
    export const Auth_GetCaptcha = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Auth/GetCaptcha',
            method: 'get',
            params: parameters
        });
    }
    
    
    /**
    * 检查验证数据
    * request: Auth_CheckCaptcha
     * @param Token - 
     * @param DeleteCache - 
     * @param Data - 
    */
    export const Auth_CheckCaptcha = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Auth/CheckCaptcha',
            method: 'get',
            params: parameters
        });
    }
    
    
    /**
    * 获取密钥
    * request: Auth_GetPassWordEncryptKey
    */
    export const Auth_GetPassWordEncryptKey = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Auth/GetPassWordEncryptKey',
            method: 'get',
            params: parameters
        });
    }
    
    
    /**
    * 查询用户信息
    * request: Auth_GetUserInfo
    */
    export const Auth_GetUserInfo = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Auth/GetUserInfo',
            method: 'get',
            params: parameters
        });
    }
    
    
    /**
    * 用户登录
    根据登录信息生成Token
    * request: Auth_Login
    */
    export const Auth_Login = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Auth/Login',
            method: 'post',
            data: parameters
        });
    }
    
    
    /**
    * 刷新Token
    以旧换新
    * request: Auth_Refresh
     * @param token - 
    */
    export const Auth_Refresh = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Auth/Refresh',
            method: 'get',
            params: parameters
        });
    }
    
    
    /**
    * 获取缓存列表
    * request: Cache_List
    */
    export const Cache_List = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Cache/List',
            method: 'get',
            params: parameters
        });
    }
    
    
    /**
    * 清除缓存
    * request: Cache_Clear
     * @param cacheKey - 
    */
    export const Cache_Clear = function(parameters) {
        return apiRequest({
            url: domain + '/api/Admin/Cache/Clear',
            method: 'delete',
            data: parameters
        });
    }