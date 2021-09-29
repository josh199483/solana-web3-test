const { PublicKey } = require("@solana/web3.js");
const { METADATA_PROGRAM_ID, METAPLEX_ID } = require("../programIds");

/**
 * seeds: (Buffer | Uint8Array)[],
 * programId: PublicKey,
 */

async function main() {
  const programs = await PublicKey.findProgramAddress(
    [
      // Buffer.from('metadata'),
      Buffer.from('metaplex'),
      // METADATA_PROGRAM_ID.toBuffer(),
      METAPLEX_ID.toBuffer(),
      new PublicKey('7rKa7ZKTwvHHgzW9rSLSjg6aeNsdjKvzM9q4jhDq8rZe').toBuffer(),
    ],
    // METADATA_PROGRAM_ID,
    METAPLEX_ID
  );
  console.log({ programs: programs[0].toBase58() })
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);


