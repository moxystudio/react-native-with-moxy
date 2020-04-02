import React from 'react';
import { mount } from 'enzyme';
import ProfileScreen2 from './ProfileScreen2';
import { AppTree } from '../../../shared/test-utils/react';

it('should render correctly', () => {
    const tree = mount(
        <AppTree>
            <ProfileScreen2 />
        </AppTree>,
    );

    expect(tree).toMatchSnapshot();
});
