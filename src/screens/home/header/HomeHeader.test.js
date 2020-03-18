import React from 'react';
import { mount } from 'enzyme';
import HomeHeader from '.';

it('should render correctly', () => {
    expect(mount(<HomeHeader />)).toMatchSnapshot();
});
