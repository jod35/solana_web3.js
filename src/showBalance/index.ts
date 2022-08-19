import { Connection, PublicKey } from "@solana/web3.js"
import { airdrop } from "../create_wallet";

export const showBalance = async (address: string) => {
    const pubKey = new PublicKey(address);

    const connection = new Connection("http://localhost:8899", "confirmed");

    const balance = await connection.getBalance(pubKey);

    return balance

}


(
    async () => {
        const currentBlance = await showBalance("9zBRc1ayMn1QYpcxUdU8oYqkGYGBVy6CZ5d7UraDXLCk")
        airdrop("9zBRc1ayMn1QYpcxUdU8oYqkGYGBVy6CZ5d7UraDXLCk", 2)

        setTimeout(async () => {
            const new_balance = await showBalance("9zBRc1ayMn1QYpcxUdU8oYqkGYGBVy6CZ5d7UraDXLCk")


            console.log(
                `Current Balance: ${currentBlance}\nNew Balance: ${new_balance}`
            )
        }, 3000);
    }
)()