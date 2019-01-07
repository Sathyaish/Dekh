describe("Player", function() {

    beforeEach(function() {

    });

    it("should do that", function() {
        // do this

        // do that

        // and then

        expect(someExpression).not.toBe(anotherExpression);
    });
});

function TestFixture() {
}

function Test() {
}

TestFixture.prototype.describe = fuction(fixtureName, fixtureDescriptorFunction) {
    this.fixtureName = fixtureName;
    this.fixtureDescriptorFunction = fixtureDescriptorFunction;
}

TestFixture.prototype.beforeEach = function(testSetupFunction) {

}

Test.prototype.it = function(testName, testFunction) {
    // call testsSetupFunction
    // call the testFunction, handle errors
}

// expect type functions
// expect
// toBe
// not [.toBe, etc.] (read-only property getter)
// toThrow
// support of async execution of tests