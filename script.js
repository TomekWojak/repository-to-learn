const name = "Tomek";
const name2 = [...name]

for(const [index, letter] of name2.entries()){
    console.log(`${letter} ${index}`);
}
