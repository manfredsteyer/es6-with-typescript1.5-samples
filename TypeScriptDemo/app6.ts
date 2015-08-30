import { FlugManager } from 'FlugManager';

var fm = new FlugManager();

var { id, abflugort, zielort } = fm.getFirst();

var { id, abflugort, zielort } = fm.getFirst()

alert(
`Id: ${id},
 Von: ${abflugort},
 Nach: ${zielort}`);

var { id: nr, abflugort: von, zielort: nach } = fm.getFirst();
alert(
`Id: ${nr},
 Von: ${von},
 Nach: ${nach}`);


var [f1, f2] = fm.getAll();
alert(f1.id + ", " + f2.id);

[, f2] = fm.getAll();


var all = fm.getAll();
for (var flug of all) {
    alert(flug.id);
}

function ajax({ url = '/', headers = { Accept: 'text/json' }, range = [1,10]}) {
    var info = `Url: ${url}, Accept: ${headers.Accept}, range:${range[0]}-${range[1]}`;
    alert(info);
}

ajax({
    url: "/info",
    headers: { Accept: 'text/json, text/xml' },
    range: [11, 20]
});

function url(parts, ...values) {

    var result = "";
    for (var i = 0; i < parts.length; i++) {
        result += parts[i];
        if (i < values.length) {
            result += encodeURIComponent(values[i]);
        }
    }
    return result;
}

var link = url `flug?von=${abflugort}&nach=${zielort}`;
alert(link);