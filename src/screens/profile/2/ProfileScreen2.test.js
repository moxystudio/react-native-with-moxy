import React from 'react';
import { mount } from 'enzyme';
import ProfileScreen2 from './ProfileScreen2';
import { AppTree } from '../../../shared/test-utils/modules';

it('should render screen title', () => {
    const tree = mount(
        <AppTree>
            <ProfileScreen2 />
        </AppTree>,
    );

    const title = tree.find("[accessibilityLabel='title']").first().text();

    expect(title).toBe('profile2.title');
});
