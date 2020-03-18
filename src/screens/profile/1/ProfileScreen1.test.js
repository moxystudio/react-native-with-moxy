import React from 'react';
import { mount } from 'enzyme';
import ProfileScreen1 from './ProfileScreen1';
import { AppTree } from '../../../shared/test-utils/components';

it('should render correctly', () => {
    const tree = mount(
        <AppTree>
            <ProfileScreen1 />
        </AppTree>,
    );

    expect(tree).toMatchSnapshot();
});
