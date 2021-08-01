const fs = require('fs')
const axios = require('axios')
const args = process.argv 


const cat = (args) => {

    let copy_path = false
    let path = args[args.length-1]

    args.forEach( val => {

        if(val.includes("--out") && path.includes(".txt")){
            copy_path = args[args.length-2]
        }
        
    });

    if(path.includes(".txt") && !copy_path){

        fs.readFile(path, `utf8`, (err, data) => {
            if(err){

                console.log(`Error : ${err}`)
                process.exit(1)

            }

            console.log(data)

        });

    }
    else if(copy_path){
        
        fs.readFile(path, `utf8`, (err, data) => {
            if(err){

                console.log(`Error : ${err}`)
                process.exit(1)

            }

            fs.writeFile(copy_path, data, "utf8", err => {
                if(err){

                    console.log(`Error : ${err}`)
                    process.exit(1)

                }
                console.log("Successfully copied ....")
            })

        });
    }
}



const webCat = async (args) => {

    let copy_path = false
    let path = args[args.length-1]

    args.forEach( val => {

        if(val.includes("--out") && path.includes(".com")){
            copy_path = args[args.length-2]
        }
        
    });

    if(path.includes(".com") && !copy_path){
        try{

            let result = await axios.get(path)
            console.log(result)

        }catch(err){

            console.log(err)

        }    
    }
    else if(copy_path){

        let result = false

        try{

            result = await axios.get(path)
            console.log(result)

        }catch(err){

            console.log(err)

        } 
        
        if(result){

            fs.writeFile(copy_path, result.data, "utf8", err => {
                if(err){

                    console.log(`Error : ${err}`)
                    process.exit(1)

                }
                console.log("Successfully copied ....")
            });

        }

    }
}



module.exports = {
    cat: cat(args),
    webCat: webCat(args),
};