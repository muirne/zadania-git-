// 1)
var table = [];
for (var i=0; i<12; i++) {
    table.push(i);
}
console.log(table);


// 2)
var min = 1;
var max = 10;
var table = [];
var duplicates = [];

for (var i=0; i<10; i++) {
    table.push( Math.random() * (max - min) + min );
}

table = [4, 8, 1, 2, 1, 4, 5, 8, 1, 3 ];

//sprawdzam ile liczb jest powtarzanych
for (var i=0; i<table.length; i++) {

    var currentCheck = table[i];
    var howManyTimes = 0;

    for (var j=0; j<table.length; j++) {    
        if (table[j] == currentCheck) {
            howManyTimes++;
        }
    }
    if (howManyTimes > 1) {
        if (duplicates.indexOf(currentCheck) == -1) {
            duplicates.push(currentCheck);
        }
    }
}
console.log(duplicates);


// 3)
var string = "My name is Bond, James Bond";
var words  = string.split(" ");
for (var i=0; i<words.length; i++) {
    var word = words[i];
    word = word.replace(",", "");
    console.log(word, word.length)
}


//zadania samotnie
// 1)
var avg = [4, 4, 1, 2, 5, 40];
var sum = 0;
for (var i=0; i<avg.length; i++) {
    sum += avg[i];
}
console.log(sum / avg.length);



// 2)
var min = 1;
var max = 60;
var table = [];

for (var i=0; i<10; i++) {
    table.push( Math.floor(Math.random() * (max - min) + min ));
}

for (var i=0; i<10; i++) {
    var nr = table[i];
    if (nr % 2 != 0) {
        nr += 1;
    }
    console.log(nr);
}

// 3)
var arr1 = [4, 55, 17, 22, 1];
var arr2 = [4, 53, 11, 22, 20];
var dup = [];

for (var i=0; i<arr1.length; i++) {
    var curr = arr1[i];
    if (arr2.indexOf(curr) !== -1) {
        if (dup.indexOf(curr) == -1) {
            dup.push(curr);
        }        
    }    
}
console.log(dup);