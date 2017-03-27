'use strict';
process.env.NODE_ENV = "test";
let chai = require('chai');
let dedupe = require('../src');
let should = chai.should();

describe('dedupe should remove equal values despite the number of parameters passed', () => {
	it('dedupe(["1", "2", "3"], ["2", "3", "4"]) should return ["1","2","3","4"]', () => {
		let res = dedupe(["1", "2", "3"], ["2", "3", "4"]);			
		res.should.be.a('array');
		res.should.have.length(4);
		res.should.eql(["1","2","3","4"]);
	});
	it('dedupe(["1", "2"], ["3"], ["2", "4"]) should return ["1","2","3","4"]', () => {
		let res = dedupe("1", ["2", "3"], "2", "4");			
		res.should.be.a('array');
		res.should.have.length(4);
		res.should.eql(["1","2","3","4"]);
	});
});

describe('dedupe should treat strings as an unary array', () => {
	it('dedupe("1", ["2", "3"], "2", "4") should return ["1","2","3","4"]', () => {
		let res = dedupe("1", ["2", "3"], "2", "4");			
		res.should.be.a('array');
		res.should.have.length(4);
		res.should.eql(["1","2","3","4"]);
	});
	it('dedupe(["1"], ["2", "3"], "3", ["2", "4"]) should return ["1","2","3","4"]', () => {
		let res = dedupe("1", ["2", "3"], "2", "4");			
		res.should.be.a('array');
		res.should.have.length(4);
		res.should.eql(["1","2","3","4"]);
	});
});
