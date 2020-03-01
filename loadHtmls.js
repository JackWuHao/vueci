
const path = require('path')
const fs = require('fs')


function loadFiles(file){
    var filepath = path.join(__dirname,'/views/',file) 
    if( fs.existsSync(filepath)){
        var data  = fs.readFileSync(filepath)
        return data
    }
    return null

}
module.exports = loadFiles