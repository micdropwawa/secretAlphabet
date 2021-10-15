const prompt = require("prompt-sync")(); //https://sebhastian.com/javascript-console-input/

//Secret Alphabet

const key = [{"alphabet":"a","secret":"🐒"},{"alphabet":"b","secret":"🐠"},{"alphabet":"c","secret":"🐖"},{"alphabet":"d","secret":"🐯"},{"alphabet":"e","secret":"🐉"},{"alphabet":"f","secret":"🐐"},{"alphabet":"g","secret":"🐨"},{"alphabet":"h","secret":"🐮"},{"alphabet":"i","secret":"🐍"},{"alphabet":"j","secret":"🦘"},{"alphabet":"k","secret":"🦆"},{"alphabet":"l","secret":"🐘"},{"alphabet":"m","secret":"🐱"},{"alphabet":"n","secret":"🦄"},{"alphabet":"o","secret":"🐝"},{"alphabet":"p","secret":"🐁"},{"alphabet":"q","secret":"🐞"},{"alphabet":"r","secret":"🐛"},{"alphabet":"s","secret":"🦋"},{"alphabet":"t","secret":"🐜"},{"alphabet":"u","secret":"🦎"},{"alphabet":"v","secret":"🦢"},{"alphabet":"w","secret":"🦉"},{"alphabet":"x","secret":"🐇"},{"alphabet":"y","secret":"🐴"},{"alphabet":"z","secret":"🦀"}]

const name = prompt("Type a word ")

const nameLower = name.toLowerCase()

const find = (alpha) => {
    for (var j=0;j<alpha.length;j++){
        for (var i=0;i<key.length;i++){
            if (key[i].alphabet == alpha[j]) {
            console.log(key[i].secret + key[i].alphabet + "\n")
            j = j++
        }
    }
}
}

console.log(find(nameLower))