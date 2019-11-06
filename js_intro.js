/*
 * multi line comment
 * */
// comment
console.clear()

/*
console.log("hello")
console.info("hello")
console.warn("hello")
console.error("hello")
use "filter" in console
*/
//var x = 5
//x = 6 -- will not cause error on second run [if not refreshed (F5)]

// must use var
var x = 5
console.log(x)
console.log(typeof(x)) // number
x = "hello"
console.log(x)
console.log(typeof(x)) // string
x = new String("hello")
console.log(x.valueOf())
console.log(typeof(x)) // Object [string]

// types - number, string, boolean, object, null, undefined, Symbol [ES6]
