function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

number = [];
for (i = 0; i < 100; i++) {
  number.push(randomNumber(50));
}

numberGanjil = [];
numberGenap = [];
for (i = 0; i < number.length; i++) {
  if (number[i] % 2 == 0) {
    numberGenap.push(number[i]);
  } else {
    numberGanjil.push(number[i]);
  }
}
min_ganjil = numberGanjil[0];
max_ganjil = numberGanjil[0];
sum_ganjil = 0;
let hasil;
for (i = 0; i < numberGanjil.length; i++) {
  if (numberGanjil[i] < min_ganjil) {
    min_ganjil = numberGanjil[i];
  }
  if (numberGanjil[i] > max_ganjil) {
    max_ganjil = numberGanjil[i];
  }
  sum_ganjil = sum_ganjil + numberGanjil[i];
}
hasil = sum_ganjil / numberGanjil.length;

min_genap = numberGenap[0];
max_genap = numberGenap[0];
sum_genap = 0;
let hasilGenap;
for (i = 0; i < numberGenap.length; i++) {
  if (numberGenap[i] > max_genap) {
    max_genap = numberGenap[i];
  }
  if (numberGenap[i] < min_genap) {
    min_genap = numberGenap[i];
  }
  sum_genap = sum_genap + numberGenap[i];
}
hasilGenap = sum_genap / numberGenap.length;

if (min_genap > min_ganjil) {
  console.log("min lebih besar array genap");
} else if (min_genap < min_ganjil) {
  console.log("min lebih besar array ganjil");
} else if ((min_genap = min_ganjil)) {
  console.log("min memiliki nilai sama antara array genap dan array ganjil");
}

if (max_genap > max_ganjil) {
  console.log("max lebih besar array genap");
} else if (max_genap < max_ganjil) {
  console.log("max lebih besar array ganjil");
} else if ((max_genap = max_ganjil)) {
  console.log("max memiliki nilai sama antara array genap dan array ganjil");
}

if (sum_genap > sum_ganjil) {
  console.log("sum lebih besar array genap");
} else if (sum_genap < sum_ganjil) {
  console.log("sum lebih besar array ganjil");
} else if ((sum_genap = sum_ganjil)) {
  console.log("sum memiliki nilai sama antara array genap dan array ganjil");
}

if (numberGenap > numberGanjil) {
  console.log("hasil lebih besar array");
} else if (numberGenap < numberGanjil) {
  console.log("rata rata lebih besar array ganjil");
} else if ((numberGenap = numberGanjil)) {
  console.log("rata rata memiliki nilai sama antara array genap dan array ganjil");
}

console.log(number);
console.log(numberGanjil);
console.log(numberGenap);
console.log(min_ganjil);
console.log(max_ganjil);
console.log(sum_ganjil);
console.log(min_genap);
console.log(max_genap);
console.log(sum_genap);
console.log(hasil);
console.log(hasilGenap);
