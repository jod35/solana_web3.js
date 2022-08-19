import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"

// deposit some sol on an account
export const airdrop = async (address:string, amount:number)=>{

    const pubKey=  new PublicKey(address);
    const connection = new Connection("http:localhost:8899");
    await connection.requestAirdrop(pubKey,LAMPORTS_PER_SOL);


}


airdrop("9zBRc1ayMn1QYpcxUdU8oYqkGYGBVy6CZ5d7UraDXLCk",55)