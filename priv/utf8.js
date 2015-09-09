
// N2O UTF-8 Support

function utf8_toByteArray(str) {
    var byteArray = [];
    if (str !== undefined && str !== null)
    for (var i = 0; i < str.length; i++)
        if (str.charCodeAt(i) <= 0x7F) byteArray.push(str.charCodeAt(i));
        else {
            var h = encodeURIComponent(str.charAt(i)).substr(1).split('%');
            for (var j = 0; j < h.length; j++) byteArray.push(parseInt(h[j], 16)); }
    return byteArray; };

function utf8_dec(t) { var i=c=c1=c2=0, s=""; while (i<t.byteLength ) {
    c=t.gu(i); if (c<128) { s+=itoa(c); i++; } else
    if ((c>191) && (c<224)) { c2=t.gu(i+1); s+=itoa(((c&31)<<6)|(c2&63)); i+=2; }
    else { c2=t.gu(i+1); c3=t.gu(i+2); s+=itoa(((c&15)<<12)|((c2&63)<<6)|(c3&63));
    i+=3; } } return s; }
