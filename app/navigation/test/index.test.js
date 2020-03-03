import React from 'react';
import Navigation from '../';
import { shallow } from 'enzyme';

describe('navigation tests', () => {
    it('should create navigation correctly', () => {
        const tree = shallow(<Navigation />);

        expect(tree).toMatchSnapshot();
    });
});
