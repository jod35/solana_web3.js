import { Connection } from "@solana/web3.js"



const returnVersion = async()=>{
    const connection = new Connection("http://127.0.0.1:8899","confirmed")


    console.log(await connection.getVersion());

}

returnVersion()

// 9zBRc1ayMn1QYpcxUdU8oYqkGYGBVy6CZ5d7UraDXLCk
