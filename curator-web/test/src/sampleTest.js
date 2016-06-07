import React from 'react'
import testUtils from 'react/lib/ReactTestUtils'
import Header from '../../src/js/components/frame/header'
var expect = require('expect');

describe('test suite works', function () {
    it('tautology', function () {
        expect(1).toEqual(1);
    });
});

describe('build is ok', function () {
    it('testing 4 ', function () {
        var header = testUtils.renderIntoDocument(<Header/>);
        expect(header).toExist();
    });
});