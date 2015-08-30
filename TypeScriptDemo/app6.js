var FlugManager_1 = require('FlugManager');
var fm = new FlugManager_1.FlugManager();
var _a = fm.getFirst(), id = _a.id, abflugort = _a.abflugort, zielort = _a.zielort;
(_b = fm.getFirst(), id = _b.id, abflugort = _b.abflugort, zielort = _b.zielort, _b);
alert("Id: " + id + ",\n Von: " + abflugort + ",\n Nach: " + zielort);
var _c = fm.getFirst(), nr = _c.id, von = _c.abflugort, nach = _c.zielort;
alert("Id: " + nr + ",\n Von: " + von + ",\n Nach: " + nach);
var _d = fm.getAll(), f1 = _d[0], f2 = _d[1];
alert(f1.id + ", " + f2.id);
_e = fm.getAll(), f2 = _e[1];
var all = fm.getAll();
for (var _i = 0; _i < all.length; _i++) {
    var flug = all[_i];
    alert(flug.id);
}
function ajax(_a) {
    var _b = _a.url, url = _b === void 0 ? '/' : _b, _c = _a.headers, headers = _c === void 0 ? { Accept: 'text/json' } : _c, _d = _a.range, range = _d === void 0 ? [1, 10] : _d;
    var info = "Url: " + url + ", Accept: " + headers.Accept + ", range:" + range[0] + "-" + range[1];
    alert(info);
}
ajax({
    url: "/info",
    headers: { Accept: 'text/json, text/xml' },
    range: [11, 20]
});
function url(parts) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < parts.length; i++) {
        result += parts[i];
        if (i < values.length) {
            result += encodeURIComponent(values[i]);
        }
    }
    return result;
}
var link = (_f = ["flug?von=", "&nach=", ""], _f.raw = ["flug?von=", "&nach=", ""], url(_f, abflugort, zielort));
alert(link);
var _b, _e, _f;
//# sourceMappingURL=app6.js.map