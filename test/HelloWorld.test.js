const HelloWorld = artifacts.require('HelloWorld');

contract('Hello World', () => {

    let helloWorld;

    before(async ()=>{
        helloWorld = await HelloWorld.new();
    });

    describe("Given a contract is deployed", () => {
      it("Should return a valid address of the contract 😎", async () => {  
        assert.ok(await helloWorld.address);
      });
    });

    describe("Given that no value is set...", () => {
         it("Should return an empty string 🥰", async()=>{
            assert.equal(await helloWorld.getHolder(), '');
         });
    });

    describe("Given that a value is set...", () => {
      it("Should return the set string 🤩", async () => {
        let value = 'hello world';
        await helloWorld.setHolder(value);
        assert.equal(await helloWorld.getHolder(), value);
      });
    });
});