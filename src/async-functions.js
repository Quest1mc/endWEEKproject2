module.exports = {
    giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater

}



//The callback function should be called and given the value as a paramenter. 
//it should NOT do this right away but later (asynchroously) using 'seTtimeout' 
function giveItBackLater(value, callback) {
    callback(value)
    setTimeout(2000)
}

function addSomePromises() {
     new Promise(function(resolve,reject){})
    return (giveItBacklater())
    }

function promiseToGiveItBackLater(value) {
    return new Promise(function(resolve,reject){})
}


// giveItBacklater(value)
// .then(value => console.log( value))
// .then(promiseToGiveItBackLater(console.log('just guessing')))
// .catch(value => console.log("REJECTED!"),)