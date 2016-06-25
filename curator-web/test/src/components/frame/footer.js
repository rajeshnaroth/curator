import React from 'react'
import ReactDom from 'react-dom'
import testUtils from 'react/lib/ReactTestUtils'
import Footer from '../../../../src/js/components/frame/footer'
var expect = require('expect');
var findDOMNode = ReactDom.findDOMNode;

describe('Footer functional component', function () {
    it('has child elements', function () {
        // for stateless components, ReactDOM.render and TestUtils.renderIntoDocument will return null.
        var wrappedComp = testUtils.renderIntoDocument(<div><Footer/></div>);
        var comp = findDOMNode(wrappedComp).children[0];
        expect(comp).toExist();
        expect(comp.childNodes.length).toEqual(4);
    });
});