import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';

import Home from '../src/screens/Home';
import ContainerTesting from '../src/utils/helpers/containerTesting';

describe('Popular Card Snapshot', () => {
  test('should render', () => {
    const component = create(ContainerTesting(<Home />)).toJSON();
    expect(component).toMatchSnapshot();
  });
});
