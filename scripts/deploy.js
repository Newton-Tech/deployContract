async function main() {
  const Faucet = await ethers.getContractFactory("Faucet");
  console.log("Deploying contract...");
  const faucet = await Faucet.deploy();
  await faucet.deployed();
  console.log(`Deployed contract to: ${faucet.address}`);
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
