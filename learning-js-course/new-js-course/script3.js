import myDefaultObj from "./script2.js";
import * as myModules from "./script2.js";
import { getData, multiply as testFn, x, changeXValue } from "./script2.js";
// as => customowa nazwa
console.log(myModules.multiply(5, 10));
console.log(typeof myModules);
console.log(getData());
console.log(testFn(5, 11));
// x = 3 // Błąd
// Nie możemy w taki sposób zmieniać wartości eksportowanej zmiennej
changeXValue(50);
console.log(x); // 50
