import React from 'react';
import { mount } from 'enzyme';
import ProfileScreen1 from './ProfileScreen1';
import { AppTree } from '../../../shared/test-utils/modules';

it('should render screen title', () => {
    const tree = mount(
        <AppTree>
            <ProfileScreen1 />
        </AppTree>,
    );

    const title = tree.find("[accessibilityLabel='title']").first().text();

    expect(title).toBe('profile1.title');
});
