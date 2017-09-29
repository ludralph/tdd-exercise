import { expect } from 'chai';
import * as app from '../src/app';

describe('app.js', () => {
    describe('getPrime()', () => {
        it("Should return the prime []", () => {
            expect(app.getPrime(1)).to.eql([]);
        });
    });
});

describe('app.js', () => {
    describe('getPrime()', () => {
        it("Should return the prime [2]", () => {
            expect(app.getPrime(2)).to.eql([2]);
        });
    });
});


describe('app.js', () => {
    describe('getPrime()', () => {
        it("Should return the prime [2,3,5]", () => {
            expect(app.getPrime(5)).to.eql([2,3,5]);
        });
    });
});

describe('app.js', () => {
    describe('isPrime()', () => {
        it("Should not be boolean", () => {
            expect(app.getPrime(true)).to.not.be.a("number");
        });
    });
});

describe('app.js', () => {
    describe('isPrime()', () => {
        it("Should not be a string", () => {
            expect(app.getPrime("hello")).to.not.be.a("number");
        });
    });
});

describe('app.js', () => {
    describe('isPrime()', () => {
        it("Should not be boolean", () => {
            expect(app.getPrime(false)).to.not.be.a("number");
        });
    });
});

describe('app.js', () => {
    describe('getPrime()', () => {
        it("Should return the prime [2,3,5,7]", () => {
            expect(app.getPrime(10)).to.eql([2,3,5,7]);
        });
    });
});
describe('app.js', () => {
    describe('getPrime()', () => {
        it("Should return the prime [2,3,5,7,11]", () => {
            expect(app.getPrime(11)).to.eql([2,3,5,7,11]);
        });
    });
});

describe('app.js', () => {
    describe('getPrime()', () => {
        it("argument should not be negative", () => {
            expect(app.getPrime(-6)).to.not.be.a("negative");
        });
    });
});
describe('app.js', () => {
    describe('getPrime()', () => {
        it("argument should not be a decimal number", () => {
            expect(app.getPrime(-6.5)).to.not.be.a("decimal number");
        });
    });
});
describe('app.js', () => {
    describe('getPrime()', () => {
        it("argument should not be null", () => {
            expect(app.getPrime(null)).to.not.be.a("number");
        });
    });
});
describe('app.js', () => {
    describe('getPrime()', () => {
        it("argument should not be undefined", () => {
            expect(app.getPrime(undefined)).to.not.be.a("number");
        });
    });
});