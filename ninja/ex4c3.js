function whoAmI1(){  
    "use strict";  
    return this; 
}
function whoAmI2(){  
    return this; 
}
// assert(whoAmI1() === window, "Window?"); //fail
console.log(whoAmI1); 
// assert(whoAmI2() === window, "Window?"); //pass
console.log(whoAmI2); 