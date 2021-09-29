const { Keypair, Transaction, SystemProgram } = require("@solana/web3.js");
const { ALICE, CONNECTION, PAYER } = require("../const");

// transfer SOL

async function main() {
  // create to address
  let to = Keypair.generate();
  console.log(`to: ${to.publicKey}`);
  console.log(`Alice key: ${ALICE.publicKey}`)

  let tx = new Transaction();
  // add transfer instruction
  tx.add(
    SystemProgram.transfer({
      fromPubkey: ALICE.publicKey,
      toPubkey: to.publicKey,
      lamports: 1e8, // 0.1 SOL
    })
  );
  // specify feePayer
  tx.feePayer = PAYER.publicKey;

  // 發送交易 (後面的array是帶入要簽名的帳戶，我們建立的這個交易需要from跟feePayer都簽名，如果from跟feePayer都是同一個人，那就只需要帶入feePayer即可)
  let txhash = await CONNECTION.sendTransaction(tx, [ALICE, PAYER]);
  console.log(`txhash: ${txhash}`);
  // confirm to address balance
  const balance = await CONNECTION.getBalance(to.publicKey);
  console.log(`to address balance: ${balance}`);
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);