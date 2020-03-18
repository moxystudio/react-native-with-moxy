import React from 'react';
import ProfileStack from './';
import { shallow } from 'enzyme';
import ProfileHeader from './header';

it('should create navigation correctly', () => {
    const tree = shallow(<ProfileStack />);
    const StackNavigator = tree.find('StackNavigator').first();

    expect(StackNavigator.props().screenOptions.header).toEqual(ProfileHeader);

    expect(tree).toMatchSnapshot();
});
