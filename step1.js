const fs = require('fs')
const args = process.argv 

const cat = (args) => {

    let path = false

    args.forEach( val => {
        if(val.includes(".txt")){
            path = val
        }
    });

    if(path){

        fs.readFile(path, `utf8`, (err, data) => {
            if(err){
                console.log(`Error : ${err}`)
                process.exit(1)
            }
            console.log(data)
        });

    }
}

module.exports = {
    cat: cat(args),
};