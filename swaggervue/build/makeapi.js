const Handlebars = require('handlebars')
//const parse = require('../node_modules/swagger-vue/lib/parse.js') // 不支持core3.1 webapi swagger，需要额外添加版本配置
const parse = require('./parse.core3.js'); //swagger api 版本兼容配置
const fs = require('fs')
const path = require('path')
const http = require('http')
const apiTemplate = fs.readFileSync(path.join(__dirname, './template/api.hbs'), 'utf-8')
const methods = fs.readFileSync(path.join(__dirname, './template/methods.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)
Handlebars.registerHelper('toLowerCase', function(word) {
    return word.toLowerCase()
})
Handlebars.registerHelper('brackets', function(word) {
    return `{${word}}`
})


Handlebars.registerHelper("compares", function(v1, options) {
    if (v1 == 'GET') {
        return options.fn(this);     //满足条件执行，返回 this数据
    } else {
        return options.inverse(this); //不满足条件执行，不返回 this数据
    }
})


http.get('http://localhost:9000/swagger/V2/swagger.json', function(req, res) {
    var json = '';
    req.on('data', function(data) {
        json += data;
    });
    req.on('end', function() {
        var jsonData = JSON.parse(json);
        let opt = {
            swagger: jsonData,
            moduleName: 'ManagebibiApi',
            className: 'ManagebibiApi'
        }
       
        let data = parse(opt)
        for (var method in data.methods)
            data.methods.forEach(function(method) {
                method.parameters.forEach(function(parameter) {
                    if (parameter.in == 'modelbinding') {
                        if (parameter['x-name-pattern']) {
                            parameter.isPatternType = true
                            parameter.pattern = parameter['x-name-pattern']
                        }
                        parameter.isQueryParameter = true
                    }
                    parameter.isArrayParameter = parameter.type == 'array';
                    parameter.camelCaseName = parameter.name;
                })
            })
        let codeResult = Handlebars.compile(apiTemplate)(data)
        fs.writeFileSync(path.join(__dirname, '../src/api/managebibi.js'), codeResult)
    });
});