describe("problem12", function () {

    it("test1",
        function () {
            var res = problem12(1);
            assert.equal(2, res);
        });
});


describe("problem13", function () {

    it("test1",
        function () {
            var res = problem13(3.0198773448773446);
            assert.equal(4, res);
        });
});

describe("problem14", function () {

    it("test1",
        function () {            
            assert.equal(problem14(2), 4);
            assert.equal(problem14(3), 8);
            assert.equal(problem14(10), 1024);
        });
});

describe("problem15", function () {

    it("test1",
        function () {
            var res = problem15(2);
            assert.equal(2.5, res);
        });
});