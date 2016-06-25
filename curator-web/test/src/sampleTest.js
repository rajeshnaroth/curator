import React from 'react'
import ReactDom from 'react-dom'
import testUtils from 'react/lib/ReactTestUtils'
var expect = require('expect');
var findDOMNode = ReactDom.findDOMNode;

describe('test suite works', function () {
    it('tautology', function () {
        expect(1).toEqual(1);
    });
});
