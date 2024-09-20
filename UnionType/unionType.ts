    //Union Type

function printStatusCode(code :string | number){
    console.log(`My Status Code is ${code}.`)
}
printStatusCode(404)
printStatusCode('404')