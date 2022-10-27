const age = parseInt(prompt("Inserisci l'età del passeggero"));
const percorso = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));

const pricePerKm = 0.21;
const distance = percorso;

let totalPrice = (pricePerKm * distance);
console.log(totalPrice);

if (age < 18) {
    console.log("Il passegero ha uno sconto del 20% sul biglietto");
    
} 

if (age > 65){
    console.log("Il passeggero ha uno sconto del 40% sul biglietto");
}

