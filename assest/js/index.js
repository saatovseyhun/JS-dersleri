// var yash = prompt("yasiniz necedir?");

// if (yash < 18) {
//   alert("yasiniz catmir");
// } else if (yash >= 18 && yash <= 30) {
//   alert("buyurun kecin");
// } else if (yash >= 30 && yash <= 55) {
//   alert("o biri otaga kecin");
// } else if (yash >= 55) {
//   alert("agsaqqal get yat");
// }

// if (yash < 5) {
//   alert("agilli ol");
// }

// if (yash < 18) {
//   alert("salam");
// }

// if// if// if// if// if// if// if// if// if// if// if// if// if

// var ad = prompt("zehmet olmsa adiniz yazin");

// if (ad.trim()) {
//   alert(ad + ", xos gelmisiniz");
// } else {
//   alert("zehmet olmasa adinizi yazin");
// }

// var a = "    ";
// alert(a.trim().length);

// errey []// errey []// errey []// errey []// errey []// errey []

// var a = [1, 2, 3, 4, 5, "salam "];

// var x = a[5];
// console.log(x);

// var a = [1, 2, 3, 4, 5, "salam "];

// a[2] = "akif dayi";
// console.log(a);

// var a = [1, 2, [1, "salam", [1, 2, 3, "ela"], 3], 3];
// var x = a[2][2][3];
// console.log(x);

// var a = [1, 2, 3, 4, "salam"];
// var b = [, 5, 6, 7, 3, "getda"];
// var c = a.concat(b);
// console.log(a);
// console.log(b);
// console.log(c);

// elave-etmek-sonrani

// var a = [1, 2, 3];
// a.push(6);
// var b = a;
// console.log(b);
// console.log(a);

// silme-sonrani

// var a = [1, 2, 3];
// var x = a.pop();
// var b = a;
// console.log(b);
// console.log(a);
// console.log(x);

// evvele+artirmq

// var a = [1, 2, 3];
// var x = a.unshift(6);

// console.log(a);
// console.log(x);

// evveli-silmek

// var a = [1, 2, 3];
// var x = a.shift(6);

// console.log(a);
// console.log(x);

// SPLICE// hibrid metod
// var a = [23, 56, 78];
// var x = a.splice(0);
// console.log(a);
// console.log(x);

// COPY// COPY// COPY// COPY// COPY// COPY// COPY// COPY// COPY

// var a = [1, 2, 3, 4, 5, "salam"];
// var b = [...a];
// b[2] = "getda";
// console.log(b);
// console.log(a);

// SLICE// SLICE// SLICE// SLICE// SLICE// SLICE// SLICE// SLICE

// var a = [1, 2, 4, "salam"];
// var x = a.slice(2, 4);
// console.log(x);

// strinc// strinc// strinc// strinc// strinc// strinc// strinc

// var a = "salam necesen ";
// var b = "aleykum yaxsiyan";
// var c = a.slice(0, 5) + " " + b.slice(0, 7);
// console.log(c);

// LOT donguler// donguler// donguler// donguler// donguler// donguler//

// WHILE- bir basa serte baxilir

// var i = 0;
// while (i < 10) {
//   console.log("salam");
//   i++;
// }

// do while-- birivi icra olunur sonra serte baxilir

// var i = 0;
// do {
//   console.log("salam");
// } while (i > 10);

// FOR

// for (var i = 0; i < 10; i++) {
//   console.log("salam");
// }
// console.log(i);

// var a = [1, 2, 3, 4];
// for (var i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// FOR-IN-yeri

// var a = [1, 2, 3, 4];
// for (var i in a) {
//   console.log(i, a[i]);
// }

// FOR-OF-DYERLERI VERIR

// var a = [14, 56, 76];
// for (var i of a) {
//   console.log(i);
// }

// EXERCISE// EXERCISE// EXERCISE

// var eat = [];
// var yemek = "";
// for (let i = 1; i < 11; i++) {
//   yemek = prompt(`sevdiyinz yemekleri # ${i}`);
//   eat.push(yemek);
// }
// console.log(eat);

// var a = confirm("Alma sevirsiniz");

// if (a) {
//   var yas = prompt("nece yasiniz var");

//   if (yas < 18) {
//     alert("size alma olmaz. armudu ye");
//   } else {
//     var sushi = prompt("sushinin novunu yazin");
//     alert(`buyurun buda sizin ${sushi} sushiniz`);
//   }
// } else {
//   alert("siz alma sevmirsinizse onda size armud verek");
// }
