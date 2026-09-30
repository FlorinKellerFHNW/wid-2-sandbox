export default function App() {
  /*
   *
   *    JAVASCRIPT hier
   *
   */

  console.log("Test");

  const a = "Test"; // var (alte Syntax), let (lokale Variblen), const (Konstante) -> verwenden!

  if (a === "Test") {
    console.log("a ist gleich Test");
  } else {
    console.log("a ist nicht gleich Test");
  }

  const wert = 42;
  console.log(typeof wert);

if (typeof wert === "number") {
  console.log("wert ist eine Zahl");
} else if (typeof wert === "string") {
  console.log("wert ist ein String");
} else if (typeof wert === "boolean") {
  console.log("wert ist ein Boolean");
} else if (wert === null) {
  console.log("wert ist null");
} else if (typeof wert === "undefined") {
  console.log("wert ist undefined");
} else {
  console.log("unbekannter Typ: " + typeof wert);
}


const isTheTruth = true;

function logger(x, y, z = "_3") {
  const result = "Funktion!" + x + y + z;
  console.log(result);
  return result;
}

logger("_1", "_2");

function multiply(a, b = 2) {
  if(typeof a!== "number" || typeof b !== "number") {
    console.log("Fehler: Beide Parameter müssen Zahlen sein.");
    return;
  }
  console.log(a * b);
  return;
}

multiply(3);
multiply(3, 4);
multiply("x", 4); // Fehler: Beide Parameter müssen Zahlen sein.
multiply(3, "y"); // Fehler: Beide Parameter müssen Zahlen sein.
multiply(3, undefined); // Fehler: Beide Parameter müssen Zahlen sein.


// Array = Liste von Elementen / Werten
// Array = geordnet
// Array = Elment werden ¨ber ihren Index gefunden
const array = [1, 2, 3, "vier", false, [], undefined, "letztes Element"];
//const element = array[array.length - 1];
//console.log(array.length);

const users = ["Florin", "Matteo", "Dario", "Admin"];
const usersTransformed = users.map(user => user + "_user");
console.log(users);
console.log(usersTransformed);

const filteredUsers = users.filter(user => user !== "Admin");
console.log(filteredUsers);


// Objekt = Liste von Schlüssel-Wert-Paaren
// Objekt = nicht geordnet
// Objekt = Werte werden über Schlüssel identifiziert
const object = {
  meinString: "User",
  meineNumber: 11, 
  meinArray: [1, 2, 3],
  meinObject: {} 
}


  return (
    /*
     *
     *    HTML hier
     *    + JavaScript in {} möglich
     *
     */
    <div>
      <p style={{ color: isTheTruth ? "green" : "red" }}>
      Dieser Satz ändert seine Farbe.
      </p>
      <div>{array}</div>
      {users.map(user => <li>{user}</li>)}
      <div>{object.meinString}</div>
      <div>{object["meineNumber"]}</div>
    </div>
    /*
     *
     */
  );
}
