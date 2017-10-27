// 1)
function FooBar(str) {
    var s = '';
    for (var i=1; i<=str; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            s += 'Foo';
        } 
        if (i % 3 !== 0 && i % 5 === 0) {
            s += 'Bar';
        } 
        if (i % 3 === 0 && i % 5 === 0) {
            s += 'FOOBAR';
        } 
        if (i % 3 !== 0 && i % 5 !== 0) {
            s += i;
        }
    }
    console.log(s);
}

FooBar(15);


// 2)
function myPow(a, n) {
    var p = a;
    for (var i=1; i<n; i++) {
        p = p * a;
    }
    return p;
}
console.log(myPow(2, 3));