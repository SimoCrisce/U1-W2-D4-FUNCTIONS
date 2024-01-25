/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  console.log("Esercizio 1 " + l1 * l2);
}

area(60, 30);
area(50, 20);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  const result = num1 + num2;

  if (num1 === num2) {
    return result * 3;
  }

  return result;
}

const result1 = crazySum(10, 10);
const result2 = crazySum(10, 20);

console.log("Esercizio 2: " + result1);
console.log("Esercizio 2: " + result2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num1) {
  const result = Math.abs(num1 - 19);

  if (num1 > 19) {
    return result * 3;
  }
  return result;
}

const result3 = crazyDiff(10);
const result4 = crazyDiff(30);

console.log("Esercizio 3: " + result3);
console.log("Esercizio 3: " + result4);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(num1) {
  if (num1 >= 20 && num1 <= 100) {
    return console.log("Il numero è compreso tra 20 e 100");
  } else if (num1 === 400) {
    return console.log("Il numero è 400");
  } else {
    return console.log("Il numero è minore di 20 o superiore a 100");
  }
}

boundary(120);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
  const string = str;
  if (string === "EPICODE") {
    return string;
  } else {
    return "EPICODE" + string;
  }
}

const par1 = epify("EPICODE");
const par2 = epify(" è una scuola");

console.log(par1);
console.log(par2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
  const words = str.split(" ");
  //   let newString = "";
  const newArrOfWords = [];
  for (let i = 0; i < words.length; i++) {
    const firstChar = words[i].charAt(0).toUpperCase();
    const lastLetters = words[i].slice(1);
    const upperWord = firstChar + lastLetters;
    console.log(upperWord);
    // newString += upperWord + " ";
    newArrOfWords.push(upperWord);
  }
  console.log(newArrOfWords);
  return newArrOfWords.join(" ");
  //   return newString;
}

console.log(upperFirst("ciao mi chiamo simone"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
  const string = str;
  console.log(string.slice(1, -1));
}
cutString("Ciao mi chiamo Simone");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(num1) {}
