const prompt = require("prompt-sync")(); //https://sebhastian.com/javascript-console-input/

//Secret Alphabet

const key = [{"alphabet":"a","secret":"ð"},{"alphabet":"b","secret":"ð "},{"alphabet":"c","secret":"ð"},{"alphabet":"d","secret":"ðŊ"},{"alphabet":"e","secret":"ð"},{"alphabet":"f","secret":"ð"},{"alphabet":"g","secret":"ðĻ"},{"alphabet":"h","secret":"ðŪ"},{"alphabet":"i","secret":"ð"},{"alphabet":"j","secret":"ðĶ"},{"alphabet":"k","secret":"ðĶ"},{"alphabet":"l","secret":"ð"},{"alphabet":"m","secret":"ðą"},{"alphabet":"n","secret":"ðĶ"},{"alphabet":"o","secret":"ð"},{"alphabet":"p","secret":"ð"},{"alphabet":"q","secret":"ð"},{"alphabet":"r","secret":"ð"},{"alphabet":"s","secret":"ðĶ"},{"alphabet":"t","secret":"ð"},{"alphabet":"u","secret":"ðĶ"},{"alphabet":"v","secret":"ðĶĒ"},{"alphabet":"w","secret":"ðĶ"},{"alphabet":"x","secret":"ð"},{"alphabet":"y","secret":"ðī"},{"alphabet":"z","secret":"ðĶ"}]

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