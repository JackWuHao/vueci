'use strict'

const fs =require('fs')

//找出model下面的所有文件
let files = fs.readdirSync(__dirname+ '/model')

let js_files = files.filter((f)=>{
     return f.endsWith('.js')
})

module.exports= {}

for(let f of js_files){
    let name = f.substring(0, f.length - 3);
    console.log(name);
    module.exports[name] = require(__dirname + '/model/' + f); 
}