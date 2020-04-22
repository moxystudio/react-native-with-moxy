import React from 'react';
import { mount } from 'enzyme';
import { Logo } from '../../../shared/media/icons';
import HomeHeader from '.';

beforeEach(() => {
    jest.clearAllMocks();
});

it('should render the logo', () => {
    mount(<HomeHeader />);

    const context = expect.any(Object);

    expect(Logo).toHaveBeenNthCalledWith(1, { width: '120', height: '50' }, context);
});
