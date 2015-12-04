/**
 * Created by rondyck on 2015-12-04.
 */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {List} from 'immutable';
import MainMenu from '../../app/components/MainMenu';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = TestUtils;

describe('MainMenu', () => {

  it('renders a menu', () => {
    const component = renderIntoDocument(
      <MainMenu />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'Menu');
    console.log('items', items);
  });

});