import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';

import Logout from '../src/screens/Logout';
import ContainerTesting from '../src/utils/helpers/containerTesting';

describe('Popular Card Snapshot', () => {
  test('should render', () => {
    const component = create(ContainerTesting(<Logout />)).toJSON();
    expect(component).toMatchSnapshot();
  });
});
