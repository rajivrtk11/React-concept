
function rajiv(){
    try {
        console.log('hello in try')
        return 1;
    }
    catch(err){
        console.log('inside error');
    }
    finally{
        console.log('inside finally')
        return 2;
    }

}
var val = rajiv()