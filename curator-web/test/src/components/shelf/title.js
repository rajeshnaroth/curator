import React from 'react'
import ReactDom from 'react-dom'
import testUtils from 'react/lib/ReactTestUtils'
import Title from '../../../../src/js/components/shelf/title'
var expect = require('expect');
var findDOMNode = ReactDom.findDOMNode;

describe('title tests', function () {

    it('testing stateless functional comp ', function () {
        // for stateless components, ReactDOM.render and TestUtils.renderIntoDocument will return null.
        var wrappedComp = testUtils.renderIntoDocument(<div><Title text="Sample Title" /></div>);
        var comp = findDOMNode(wrappedComp).children[0];
        console.log(comp);
        expect(comp).toExist();
        expect(comp.tagName).toEqual("H4");
        expect(comp.innerHTML).toEqual("Sample Title");
    });
});