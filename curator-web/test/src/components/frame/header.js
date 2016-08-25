import React from 'react'
import ReactDom from 'react-dom'
import testUtils from 'react/lib/ReactTestUtils'
import Header from '../../../../src/js/components/frame/header'
import Logo from '../../../../src/js/components/frame/logo'
var expect = require('expect');
var findDOMNode = ReactDom.findDOMNode;

describe('header is ok', function () {
    it(' loads', function () {
        var comp = testUtils.renderIntoDocument(<Header/>);
        expect(comp).toExist();

        var domNode = findDOMNode(comp);
        expect(domNode.childNodes.length).toEqual(2);
        // Now verify that first one is an image and the net one is an h3
        expect(domNode.childNodes[1].tagName).toEqual('H4');
    });
});