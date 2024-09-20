var Form_SV = /** @class */ (function () {
    function Form_SV(MSSV, nameSV) {
        this.MSSV = MSSV;
        this.nameSV = nameSV;
    }
    Form_SV.prototype.getMSSV = function () {
        return this.MSSV;
    };
    Form_SV.prototype.getNameSV = function () {
        return this.nameSV;
    };
    return Form_SV;
}());
var formsv = new Form_SV(27092004, "MinhTan");
console.log(formsv);
