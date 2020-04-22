import React from 'react';
import { mount } from 'enzyme';
import HomeHeader from './header';
import HomeScreen from './HomeScreen';
import { AppTree } from '../../shared/test-utils/modules';
import { useLocale } from '../../shared/modules';
import { createNavigationProp } from '../../shared/test-utils/react-navigation';

const navigation = createNavigationProp();

beforeEach(jest.clearAllMocks);

it('should render title', () => {
    const tree = mount(
        <AppTree>
            <HomeScreen navigation={ navigation } />
        </AppTree>,
    );

    const title = tree.find("[accessibilityLabel='title']").first().text();

    expect(title).toBe('home.title');
});

it('should call specify the header via navigation options', () => {
    mount(
        <AppTree>
            <HomeScreen navigation={ navigation } />
        </AppTree>,
    );

    expect(navigation.setOptions).toHaveBeenNthCalledWith(1, expect.objectContaining({ header: HomeHeader }));
});

it('should navigate to profile screen on button press', () => {
    const tree = mount(
        <AppTree>
            <HomeScreen navigation={ navigation } />
        </AppTree>,
    );

    const button = tree.find("[accessibilityLabel='navigate to profile button']").first();

    button.props().onPress();

    expect(navigation.navigate).toHaveBeenNthCalledWith(1, 'Profile', { screen: 'Profile2' });
});

it('should switch language on button press', (done) => {
    const LocaleChangeAsserter = () => {
        const { id: localeId } = useLocale();

        if (localeId !== 'pt-PT') {
            return null;
        }

        expect(localeId).toBe('pt-PT');
        done();

        return null;
    };

    const tree = mount(
        <AppTree>
            <>
                <HomeScreen navigation={ navigation } />
                <LocaleChangeAsserter />
            </>
        </AppTree>,
    );

    const button = tree.find("[accessibilityLabel='switch language button']").first();

    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('home.buttons.switch-language');

    button.props().onPress();
});

