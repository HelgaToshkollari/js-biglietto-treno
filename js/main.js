const age = parseInt(prompt("Inserisci l'età del passeggero"));
const percorso = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));

const pricePerKm = 0.21;
const distance = percorso;

const totalPrice = (pricePerKm * distance);
const numPriceDiscount20 = (totalPrice * 0.8 );
const numPriceDiscount40 = (totalPrice * 0.6);


if (age < 18) {
    console.log("Il passegero ha uno sconto del 20% sul biglietto");
    console.log(numPriceDiscount20.toFixed(2));
} else if (age > 18 && age < 65) {
    console.log(totalPrice.toFixed(2));

} else if (age > 65){
    console.log("Il passeggero ha uno sconto del 40% sul biglietto");
    console.log(numPriceDiscount40.toFixed(2));
}

