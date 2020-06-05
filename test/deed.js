const Deed = artifacts.require('Deed');

contract('Deed', (accounts) => {
    let deed = null;
    before(async () => {
        deed = await Deed.deployed();
    });

    it('Should withdraw', async () => {
        const initialBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[1]));
        await new Promise((resolve, reject) => setTimeout(resolve, 5000))
        await deed.withdraw({ from: accounts[0] })
        const finalBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[1]));
        assert(finalBalance.sub(initialBalance).toNumber() === 100);
    });
    it('Should NOT withdraw if too early', async () => {
        // I previously deployed the smart contract int the 
        // 'should withdraw' test method I need to...
        // deploy a new instance of smart the contract because 
        // the test contract has a timer that will finish and therefore I won't be 
        // to check if it's 'took early'. ;)  
        const deed = await Deed.new(accounts[0], accounts[1], 5, { value: 100 });
        try {
            await deed.withdraw({ from: accounts[0] })
        } catch (e) {
            assert(e.message.includes('too early'))
            return;
        }
        assert(false)
    });
    it('Should NOT withdraw is caller is not lawyer', async () => {
        const deed = await Deed.new(accounts[0], accounts[1], 5, { value: 100 });
        try {
            await new Promise((resolve, reject) => setTimeout(resolve, 5000))
            // withdrawing from an account that isn't a lawyer
            await deed.withdraw({ from: accounts[5] })
        } catch (e) {
            assert(e.message.includes('lawyer only'))
            return;
        }
        assert(false)
    })
});