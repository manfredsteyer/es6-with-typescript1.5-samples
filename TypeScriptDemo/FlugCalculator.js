var FlugCalculator = (function () {
    function FlugCalculator() {
    }
    FlugCalculator.prototype.calcPrice = function (flug) {
        var p = flug.plaetze / flug.plaetzeFrei;
        if (p >= 0.75)
            return FlugCalculator.basePrice / 2;
        return FlugCalculator.basePrice;
    };
    FlugCalculator.basePrice = 300;
    return FlugCalculator;
})();
exports.FlugCalculator = FlugCalculator;
exports.default = FlugCalculator;
// Alternative:
//   export default FlugCalculator { ... } 
//# sourceMappingURL=FlugCalculator.js.map