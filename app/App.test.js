import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { rootNavigation } from './navigation';

describe('app tests', () => {
    it('should render correctly', () => {
        const tree = shallow(<App />);

        expect(tree).toMatchSnapshot();
    });

    it('should have navigation ref', () => {
        mount(<App />);

        rootNavigation.navigate('Home');

        expect(rootNavigation).toEqual(expect.objectContaining({
            navigate: expect.any(Function),
        }));
    });
});
