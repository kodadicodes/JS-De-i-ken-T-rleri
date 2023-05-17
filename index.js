// ogrenciIsmi adında bir değişken tanımlayın ve değerini "Ahmet Yılmaz" olarak atayın
let ogrenciIsmi = "Ahmet Yılmaz";
// ogrenciIsmi değişkeninin türünü konsola yazdırın (ki "string"dir)
console.log(typeof ogrenciIsmi);

// ogrenciYasi adında bir değişken tanımlayın ve değerini 25 olarak atayın
let ogrenciYasi = 25;
// ogrenciYasi değişkeninin türünü konsola yazdırın (ki "number"dir)
console.log(typeof ogrenciYasi);

// sayi1 ve sayi2 adlı iki değişken tanımlayın ve değerlerini sırasıyla "10" ve "20" olarak atayın
let sayi1 = "10";
let sayi2 = "20";
// sayi1 ve sayi2'yi Number fonksiyonu kullanarak sayılara dönüştürün ve toplayın
let toplam = Number(sayi1) + Number(sayi2);
// Toplamanın sonucunu konsola yazdırın (ki 30'dur)
console.log(toplam);

// sayi3 ve sayi4 adlı iki değişken tanımlayın ve değerlerini sırasıyla 10 ve 20 olarak atayın
let sayi3 = 10;
let sayi4 = 20;
// sayi3 ve sayi4'ü toString yöntemini kullanarak dizelere dönüştürün ve birleştirin
let total = sayi3.toString() + sayi4.toString();
// Birleştirmenin sonucunu konsola yazdırın (ki "1020"dir)
console.log(total);

// sayi5 ve sayi6 adlı iki değişken tanımlayın ve değerlerini sırasıyla 10 ve 20 olarak atayın
sayi5 =10;
sayi6 =20;
// sayi5'in sayi6'dan büyük olup olmadığını konsola yazdırın (ki false'dur)
console.log(sayi5>sayi6);
// false'un türünü konsola yazdırın (ki "boolean"dir)
console.log(typeof false);
// sayi5'in sayi6'dan küçük olup olmadığını konsola yazdırın (ki true'dur)
console.log(sayi5<sayi6);
// true'nun türünü konsola yazdırın (ki "boolean"dir)
console.log(typeof true);

// benimismim adında bir değişken tanımlayın ancak bir değer atamayın
let benimismim;
// benimismim'in türünü konsola yazdırın (ki "undefined"dir)
console.log(typeof benimismim);
