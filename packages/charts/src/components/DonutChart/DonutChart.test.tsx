import { action } from '@storybook/addon-actions';
import { mount } from 'enzyme';
import * as React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';
import { DonutChart } from './DonutChart';

describe('DonutChart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <DonutChart
          onLegendClick={action('onLegendClick')}
          onDataPointClick={action('onDataPointClick')}
          style={{ width: '50%' }}
          dataset={simpleDataSet}
          dimension={{
            accessor: 'name'
          }}
          measure={{
            accessor: 'users',
            label: 'Number of Users'
          }}
        />
      ).render()
    ).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<DonutChart style={{ width: '30%' }} dimensions={[]} measures={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
