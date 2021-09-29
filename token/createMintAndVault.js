const { Keypair, Transaction, SystemProgram } = require("@solana/web3.js");

const { CONNECTION, PAYER } = require("../const");

const SPLToken = require("@solana/spl-token");

const BN = require('bn.js')

const createMintAndVault = async () => {
  const mint = Keypair.generate();
  const vault = Keypair.generate();
  const txn = new Transaction();
  console.log(SPLToken.MintLayout.span, SPLToken.AccountLayout.span)
  const lam = await CONNECTION.getMinimumBalanceForRentExemption(SPLToken.MintLayout.span)
  console.log({ lam })
  txn.add(
    SystemProgram.createAccount({
      fromPubkey: PAYER.publicKey,
      newAccountPubkey: mint.publicKey,
      space: SPLToken.MintLayout.span,
      lamports: await CONNECTION.getMinimumBalanceForRentExemption(SPLToken.MintLayout.span),
      programId: SPLToken.TOKEN_PROGRAM_ID,
    }),
    SPLToken.Token.createInitMintInstruction(
      SPLToken.TOKEN_PROGRAM_ID,
      mint.publicKey,
      0,
      PAYER.publicKey,
      null // freeze authority
    ),
    SystemProgram.createAccount({
      fromPubkey: PAYER.publicKey,
      newAccountPubkey: vault.publicKey,
      space: SPLToken.AccountLayout.span,
      lamports: await CONNECTION.getMinimumBalanceForRentExemption(SPLToken.AccountLayout.span),
      programId: SPLToken.TOKEN_PROGRAM_ID,
    }),
    SPLToken.Token.createInitAccountInstruction(
      SPLToken.TOKEN_PROGRAM_ID,
      mint.publicKey,
      vault.publicKey,
      PAYER.publicKey,
    ),
    SPLToken.Token.createMintToInstruction(
      SPLToken.TOKEN_PROGRAM_ID,
      mint.publicKey,
      vault.publicKey,
      PAYER.publicKey,
      [],
      1e6,
    ),
  );
  await CONNECTION.sendTransaction(txn, [PAYER, mint, vault])
  // await sendAndConfirmTransaction(CONNECTION, txn, [PAYER, mint, vault]);
  return [mint.publicKey, vault.publicKey];
}

(async function() {
  const [mint, vault] = await createMintAndVault()
  console.log({ mint: mint.toBase58(), vault: vault.toBase58() })
}())

module.exports = createMintAndVault
