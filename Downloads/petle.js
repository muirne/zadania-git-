// 1)

var silnia = function(x) {
    var sil = 1;
    if (x < 3) {
        sil = x;
    } else {
        for (var i=2; i<=x; i++) {
            sil *= i
        }
    }
    return sil;
}

console.log(5);
console.log(8);

// 2)
var n = 5;
var str = '';
for (var y=0; y<n; y++) {
    for (var x=0; x<n; x++) {
        if (y==0 || y==n-1 || x==0 || x==n-1) {
            str += "*";
        } else {
            str += ' ';
        }

    }
    str += "\n";
}
console.log(str);


//zadania samotnie

// 1)
var n = 10;
for (var i=0; i<n; i++) {
    if (i%2==0) {
        console.log(i + ' - parzysta');
    } else {
        console.log(i + ' - nieparzysta');
    }
}


// 2)
var min = 5;
var max = 10;
var sum = 0;
for (var i=min; i<=max; i++) {
    sum += i;
}
console.log(sum)


// 3)
var str = '';
for (var y=0; y<n; y++) {
    for (var x=0; x<n; x++) {
        if ((x + y) % 2 == 0) {
            str += " ";
        } else {
            str += "*";
        }
    }
    str += "\n"
}