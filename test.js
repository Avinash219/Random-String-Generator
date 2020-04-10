const chai = require('chai');
const index = require('./index');
const should = chai.should()
const expect = chai.expect

describe('Test Random String Function', () => {
    it('Should return a string of length 16 without parameter', function () {
        const withoutParam = index()
        withoutParam.length.should.equal(16)
    })
    it('Should return a string of length 21 without parameter', function () {
        const withoutParam = index(21)
        withoutParam.length.should.equal(21)
    })
    it('Should throw error if string is passed as argument', function () {
        try {
            const withoutParam = index('abc')
        } catch (error) {
            should.exist(error)
        }
    })
})