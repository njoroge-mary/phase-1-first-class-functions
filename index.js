function receivesAFunction(callback) {
    console.log("Function receivesAFunction is about to call the callback function.");
    callback();
    console.log("Callback function has been called.");
}
function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!");
    };
}
