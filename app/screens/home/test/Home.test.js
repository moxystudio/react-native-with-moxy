import React from 'react';
import { mount } from 'enzyme';
import HomeScreen from '../HomeScreen';

describe('Home tests', () => {
    it('should render correctly', () => {
        const tree = mount(<HomeScreen />);

        expect(tree).toMatchSnapshot();
    });
});
