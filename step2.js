const fs = require('fs')
const axios = require('axios')
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

const webCat = async (args) => {

    let path = false

    args.forEach( val => {
        if(val.includes(".com")){
            path = val
        }
    });

    if(path){
        try{

            let result = await axios.get(path)
            console.log(result)

        }catch(err){

            console.log(err)

        }    
    }
}

module.exports = {
    cat: cat(args),
    webCat: webCat(args),
};