// 1.  You must create a module named `pathFind`. The test imports it with
//     ```js



function pathFind(obj) {
    
    
     MyArray = Object.values(obj)
    const iterator= MyArray.values()
    
    
    for (const value of iterator) {
        return(value); // expected output: "a" "b" "c"
      }
}





module.exports.pathFind = pathFind