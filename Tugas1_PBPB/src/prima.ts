let nimAkhir: number = 86;
let batas: number = nimAkhir + 10;

console.log("Bilangan prima dari 1 sampai " + batas + ":");

for (let angka = 2; angka <= batas; angka++) {
    let prima: boolean = true;

    for (let pembagi = 2; pembagi < angka; pembagi++) {
        if (angka % pembagi === 0) {
            prima =false;
            break;
        }
    }

    if (prima) {
        console.log(angka);
    }
}