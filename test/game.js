let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe('POST /postGameData/', () => {
    it("It should post a new Data", (done) => {
        const data = {
            player1 : "ABC",
            player1score: 5,
            player2: "XYZ",
            player2score: 7,
            winner: "XYZ",
            difference: 2
        }
        Chai.request(server)
            .post("/api/postGameData")
            .send(data)
            .end((err, res) => {
                res.body.should.be.a('Object');
            done();
        })
    })
})

