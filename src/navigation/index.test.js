import React from 'react';
import Navigation from './';
import { shallow } from 'enzyme';

it('should create navigation correctly', () => {
    const tree = shallow(<Navigation />);
    const ProfileScreen = tree.find('StackNavigator').children().find('[name="Profile"]');

    expect(ProfileScreen.props().options.header()).toEqual(null);

    expect(tree).toMatchSnapshot();
});
