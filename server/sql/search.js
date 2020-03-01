


function searchUserTest(Tab){
    Tab.findOne({
        where:{
            id:1
        }
    }).then((data)=>{
        
        //   console.log('data:',data);
          //findOne 返回单个对象
          //findAll 返回数组
         console.log(data.dataValues);
           
           
    }).catch((error)=>{
           console.log(error);
    })
}

module.exports = searchUserTest