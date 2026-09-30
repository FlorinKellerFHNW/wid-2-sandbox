export default function App() {
// JavaScript hier
// Übung 1
const variable = undefined;
if (typeof variable === "number") {
  console.log("Datentyp ist eine Zahl");
} else if (typeof variable === "string") {
  console.log("Datentyp ist ein String");
} else if (typeof variable === "boolean") {
  console.log("Datentyp ist ein Boolean");
} else if (typeof variable === null) {
  console.log("Datentyp ist null");
}

// Übung 2
const isTheTruth = true; //mit False testen

// Übung 3
function multiply(a, b = 2) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Fehler: beide Parameter müssen Zahlen sein.");
    return;
  }
  console.log(a * b);
  return;
}
multiply(5);
multiply(5, 3);

// Übung 4
const joinWithSpace = (wordone, wordtwo) => `${wordone} ${wordtwo}`;
console.log(joinWithSpace("Hallo", "Welt"));

const compareToZero = (number) => {
  if (number < 0) {
    return "negativ";
  } else if (number > 0) {
    return "positiv";
  } else {
    return "null";
  }
};
console.log(compareToZero(-5));
console.log(compareToZero(5));
console.log(compareToZero(0));

const max = (a, b) => (a > b ? a : b);
console.log(max(3, 8));
console.log(max(9, 2));
console.log(max(4, 4));

// Übung 5
const zahlen = [1, 2, 3, 4, 5];
const malDrei = zahlen.map((zahl) => zahl * 3);
console.log(zahlen);
console.log(malDrei);

const malIndex = zahlen.map((zahl, index) => zahl * index);
console.log(malIndex);

const nutzer = ["Tim", "Anna", "Max", "Admin", "Sara"];
const mitA = nutzer.filter((username) => username.includes("a"));
console.log(mitA);
console.log(nutzer);



  return (
// HTML + JavaScript mit {} hier
    <div>
      <p style={{ color: isTheTruth ? "green" : "red"}}>Dieser Satz ist wahr.</p>



    </div>
  );
}