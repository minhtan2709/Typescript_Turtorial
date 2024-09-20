let tuple: [string,number, boolean] = ['Tan',2709,true];
// console.log(tuple);
let userInput:string="MinhTan";//Hay khai bao 1 bien cho phep nguoi dung nhap vao
if((Number(userInput))||(String(userInput))||(Boolean(userInput))){
    tuple.push(userInput);
}
else{
    console.log("Error");
}
console.log(tuple);


