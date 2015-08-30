var Flug_1 = require('Flug');
var FlugManager = (function () {
    function FlugManager() {
        this.fluege = [];
        var f1 = new Flug_1.Flug();
        f1.id = 1;
        f1.abflugort = "München";
        f1.zielort = "Mallorca";
        var f2 = new Flug_1.Flug();
        f2.id = 1;
        f2.abflugort = "Mallorca";
        f2.zielort = "München";
        this.fluege.push(f1);
        this.fluege.push(f2);
    }
    FlugManager.prototype.add = function (f) {
        this.fluege.push(f);
    };
    FlugManager.prototype.getAll = function () {
        return this.fluege;
    };
    FlugManager.prototype.getFirst = function () {
        return this.fluege[0];
    };
    return FlugManager;
})();
exports.FlugManager = FlugManager;
//# sourceMappingURL=FlugManager.js.map