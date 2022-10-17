let data: object[] = []
let readlineSync = require('readline-sync')
export class AddDictionary {
    constructor() {

    }
    addWord() {
        let word = readlineSync.question('What words would you like to add? ', {});
        let phonetic = readlineSync.question('What words would you like to add? ', {});
        let obj = {word:word,phonetic:phonetic} 
        data.push(obj)
    }
    addOrigin(){
        let origin = readlineSync.question('Where does the word come from?', {});
        data.push(origin)
    }
    show():object[]{
        return data
    }
}