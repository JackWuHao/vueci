var id = 0

function nextId(){
    id ++;
    return 'p' + id;
}
class Product{
    constructor(name,description){
        this.id = nextId();
        this.name = name;
        this.description = description;
    }
}

var products = [
    new Product('iPhone 7', 'Apple'),
    new Product('ThinkPad T440', 'Lenovo'),
    new Product('LBP2900', 'Canon')
];


var fn_get_topds = async(ctx,next)=>{
          ctx.rest({
              data:products
          })
}

module.exports = {
    'GET /api/todos': fn_get_topds
}
