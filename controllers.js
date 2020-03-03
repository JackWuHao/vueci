'use strict'

const fs = require('fs')


var getAllJsInPath = (path) =>{
  var fils = fs.readdirSync(__dirname+ path)
  var js_files = fils.filter(function(file){
      return file.endsWith('.js')
  })
  return js_files
}


var controllers =  function(router,path){
  
   var js_files =  getAllJsInPath(path)
    for (let file of js_files ){
        var mapping = require(__dirname + path + file)
        for (let url in mapping){
            if (url.startsWith('GET ')){
              let path = url.substring(4)
              //把get请求添加到router中统一管理
              router.get(path,mapping[url])
              console.log(`register URL mapping: GET ${path}`);
            }else if (url.startsWith('POST ')){
              let path = url.substring(5)
              router.post(path,mapping[url])
              console.log(`register URL mapping: POST ${path}`);
            }else{
              console.log(`invalid URL: ${url}`); 
            }
        }
    }
}

module.exports = controllers