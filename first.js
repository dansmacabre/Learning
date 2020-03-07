const newConsole = require("./drugi.js")
console.log("hello")

/* const/let do deklarowania zmiennych
variables - zmienne
const - constans zmienne stałe
let - zmienne zmienne
*/

const flower = "Róża"

let weather = "Słońce"

console.log("Pogoda : ",weather," Kwiat : ",flower)

weather ="Deszcz"

console.log("Pogoda : ",weather," Kwiat : ",flower)

console.log(`Pogoda : ${weather}`)

const  numer = 4,
text = 'hej',
fałsz = false,
nwmCoTo = undefined,
xd = null

console.log(typeof(numer))
console.log(typeof(text))
console.log(typeof(prawda))
console.log(typeof(nwmCoTo))
console.log(typeof(xd))
/*Operatory warunkowe */

if((numer === 4) || (fałsz)){
    console.log("Dostales 4 brawo")
}else{
    console.log("ulala cos poszlo nie tak")
}
/* Zmienne zlozone */
const obiektWTablicy = {nazwa: "Saiala"}
const tablicaWTablicy= [3,4,5,6]
let tablica = [obiektWTablicy,tablicaWTablicy,2,3]

tablica.forEach((element,ktoryToElement) => console.log(`Das ist Element : ${element} I jest to numer : ${ktoryToElement}`))
console.log(tablica[1][2], tablica[0].nazwa)

let obiekt = {
    lata: 16,
    wzrost: 175,
    imie: "Lidka",
    ulobionyKolor: "Czerwony"
}

console.log(obiekt.wzrost)


/*Pętle */
// for(let i = 0 ; i < 100000 ; i++){
//     console.log("Numer Napisany : ",i," NIE BEDE PRZESZKADZALA NA LEKCJACH")
// }
// let lotteryTicket = parseInt(Math.random()*100000)

// console.log(lotteryTicket)

// while(lotteryTicket !== 5000){
//     console.log("Nie udalo ci sie wygrać, numer zwyciezcy to : ", lotteryTicket)
//     lotteryTicket = parseInt(Math.random()*100000)
// }
// console.log("Brawo Wygrałeś 10mln peso, dla potwierdzenia to jest wygrany los : ",lotteryTicket)

console.log("TEST")
newConsole.log("Bardzo wazna wiadomosc prosze pokaż")


