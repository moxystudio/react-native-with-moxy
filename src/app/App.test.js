import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { rootNavigation } from '../navigation';

it('should render correctly', () => {
    const tree = shallow(<App />);

    expect(tree).toMatchSnapshot();
});

it('should create navigation ref', () => {
    mount(<App />);

    expect(rootNavigation.navigationRef.current).toEqual(expect.objectContaining({
        navigate: expect.any(Function),
    }));
});

