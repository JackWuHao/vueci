'use strict'

const Sequelize = require('sequelize')
const config = require('./serverConfig')


var seq = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }

});

/**
 * 定义数据模型 及公共字段
 * 
 * @param {any} name 模型名称【数据库表名】
 * @param {any} attributes 数据字段集合
 * @returns 数据模型对象
 */

function defineModel(name,attributes){
    var attrs ={};
    for (let key in attributes){
        let value = attributes[key]
        if (typeof value === 'object' && value['type']){
            value.allowNull = value.allowNull || false
            attrs[key] = value;
        }else{
            attrs[key] = {
                type:value,
                allowNull:false
        }
      }
    }
    
    //公共字段自定义
    attrs.createAt ={
        type: Sequelize.BIGINT,
        allowNull:false
    }
    attrs.updateAt= {
        type: Sequelize.BIGINT,
        allowNull:false
    }

  //   attrs.version ={
  //       type:Sequelize.BIGINT,
  //       allowNull:false
  //   }
    // 状态：0表示有效，1表示无效，2表示已删除，默认为0.
   attrs.status = {
      type: Sequelize.INTEGER,
      allowNull: false
   };
  
    //调用seq的方法定义模型并返回
    return seq.define(name,attrs,{
        tableName:name,
        timestamps:false,
       // https://my.oschina.net/u/3409026/blog/884725
       //hooks:使用说明
        hooks:{
          beforeUpdate: function(obj){
              let now = Date.now();
              console.log("修改now:");
              obj.updateAt = now;
          },
          beforeValidate:function(obj){
          
              let now = Date.now();
              if (obj.isNewRecord) {
                  console.log('++++++',now);
                  
                  obj.createAt = now;
                  obj.updateAt = now;
              } else {
                  console.log('-----');
                  obj.updateAt = Date.now();
                
              }
          },
        }
    })
};

module.exports = defineModel;


