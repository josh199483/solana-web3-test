const { Keypair, Transaction, SystemProgram } = require("@solana/web3.js");

const { CONNECTION, PAYER } = require("../const");

const SPLToken = require("@solana/spl-token");

// creqte Mint (create my own token)

// Mint is something like ERC20 token
// such as USDT, SRM

async function main() {
  // create mint keypair
  let mint = Keypair.generate();
  console.log(`mint: ${mint.publicKey}`);

  let tx = new Transaction();
  tx.add(
    // 創建一個帳戶
    SystemProgram.createAccount({
      fromPubkey: PAYER.publicKey, // 要送sol的帳號
      newAccountPubkey: mint.publicKey, // account的publicKey
      space: SPLToken.MintLayout.span,
      lamports: await SPLToken.Token.getMinBalanceRentForExemptMint(CONNECTION),
      programId: SPLToken.TOKEN_PROGRAM_ID,
    }),
    // 對帳戶做mint的初始化
    SPLToken.Token.createInitMintInstruction(
      SPLToken.TOKEN_PROGRAM_ID, // program id, 通常固定是token program id
      mint.publicKey, // mint account public key
      0, // decimals
      PAYER.publicKey, // mint authority (增發幣的權限)
      null // freeze authority (冷凍帳戶的權限，這邊我們先留null即可)
    )
  );
  tx.feePayer = PAYER.publicKey;

  let txhash = await CONNECTION.sendTransaction(tx, [mint, PAYER]);
  console.log(`txhash: ${txhash}`);
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);