
function createUserTest(Table){
      return  Table.create({
        email:"11502386@qq.com",
        name:"小草",
        phone:"xxx",
        status: 0,
        startDate: Date.now(),
    }).then((data)=>{
        console.log(data);
        
    }).catch((error)=>{
        console.log(error);
        
    })
}

module.exports = createUserTest