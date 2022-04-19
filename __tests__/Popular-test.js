import * as React from 'react';
import {create} from 'react-test-renderer';

import Popular from '../src/components/Popular';
import ContainerTesting from '../src/utils/helpers/containerTesting';

describe('Popular Card Snapshot', () => {
  test('should render', () => {
    const component = create(ContainerTesting(<Popular />)).toJSON();
    expect(component).toMatchSnapshot();
  });
});
