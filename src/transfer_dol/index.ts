import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { airdrop } from "../create_wallet";
import { showBalance } from "../showBalance";


export const transferSOL = async (from: Keypair, to: PublicKey, amount: number) => {
    const connection = new Connection("http://localhost:8899", "confirmed")

    const transaction = new Transaction();

    const instruction = SystemProgram.transfer({
        toPubkey: to,
        fromPubkey: from.publicKey,
        lamports: LAMPORTS_PER_SOL * amount
    })


    transaction.add(instruction)

    await sendAndConfirmTransaction(
        connection, transaction, [
        from
    ]
    )

    console.log("Done")


    const secret = Uint8Array.from([117, 166, 43, 10, 182, 229, 164, 186, 118, 180, 168, 112, 103, 201, 81, 188, 208, 165, 97, 212, 153, 0, 232, 14, 221, 0, 115, 55, 82, 175, 37, 183, 32, 44, 61, 50, 255, 229, 132, 74, 85, 208, 245, 89, 14, 154, 110, 137, 242, 14, 102, 241, 59, 70, 127, 116, 153, 118, 97, 33, 71, 63, 115, 62])

    const fromkeypair = Keypair.fromSecretKey(secret)

    const topublicKey = new PublicKey("9zBRc1ayMn1QYpcxUdU8oYqkGYGBVy6CZ5d7UraDXLCk");



    (
        async () => {
            const initialBalanceFrom = await showBalance(fromkeypair.publicKey.toString());
            await airdrop(fromkeypair.publicKey.toString(), 4);
            console.log(`Initial balance of this wallet ${initialBalanceFrom}`)


            const initialBalanceTo = await showBalance(fromkeypair.publicKey.toString())
            console.log(`Initial balance of this wallet ${initialBalanceTo}`)


            await transferSOL(fromkeypair, topublicKey, 1)


            setTimeout(async() => {
                const postBalanceFrom = await showBalance(fromkeypair.publicKey.toString());
                await airdrop(fromkeypair.publicKey.toString(), 4);
                console.log(`Initial balance of this wallet ${postBalanceFrom}`)


                const postBalanceTo = await showBalance(fromkeypair.publicKey.toString())
                console.log(`Initial balance of this wallet ${postBalanceTo}`)
            }, 3000);
        }
    )()

}


