


function updateUserTest(Tab){
    return Tab.update({
        name:"xxxx2",
    },{
        where:{id:1},
        individualHooks: true
    },).then(function(){
         console.log('updata成功');
          
    }).catch(function(error){
        console.log(error);
    })
}
module.exports = updateUserTest