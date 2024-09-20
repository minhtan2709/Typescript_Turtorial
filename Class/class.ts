class Form_SV{
    private MSSV:number
    private nameSV:string
    public constructor (MSSV:number,nameSV:string){
        this.MSSV = MSSV
        this.nameSV = nameSV
    }
    public getMSSV(){
        return this.MSSV;
    }
    public getNameSV(){
        return this.nameSV;
    }

    
}
let formsv = new Form_SV(27092004,"MinhTan")
console.log(formsv)


