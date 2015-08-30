var Passagier = (function () {
    function Passagier() {
    }
    return Passagier;
})();
exports.Passagier = Passagier;
var logic;
(function (logic) {
    var PassagierManager = (function () {
        function PassagierManager() {
            this.p = new Passagier();
        }
        PassagierManager.prototype.getPassagier = function () {
            return this.p;
        };
        PassagierManager.prototype.setPassagier = function (p) {
            this.p = p;
        };
        return PassagierManager;
    })();
    logic.PassagierManager = PassagierManager;
})(logic = exports.logic || (exports.logic = {}));
//# sourceMappingURL=Passagier.js.map