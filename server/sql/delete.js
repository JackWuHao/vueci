

function deleteUserTest(Tab){
    return Tab.destroy({
        where:{id:1}
    }).then(function(){
         console.log('删除成功');
         
    }).catch(function(error){
        console.log(error);
        
    })
}

module.exports = deleteUserTest