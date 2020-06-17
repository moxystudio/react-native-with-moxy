import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { fireEvent, render } from '../../shared/test-utils';
import { useLocale } from '../../shared/modules';
import { createNavigationProp } from '../../shared/test-utils/react-navigation';
import HomeHeader from './header';
import HomeScreen from './HomeScreen';

const navigation = createNavigationProp();

beforeEach(jest.clearAllMocks);

it('should render a safe area view', () => {
    render(<HomeScreen navigation={ navigation } />);

    expect(SafeAreaView).toHaveBeenCalledTimes(1);
});

it('should render title', () => {
    const { queryByLabelText, queryByText } = render(<HomeScreen navigation={ navigation } />);

    expect(queryByLabelText('title')).not.toBeNull();
    expect(queryByText('home.title')).not.toBeNull();
});

it('should call specify the header via navigation options', () => {
    render(<HomeScreen navigation={ navigation } />);

    expect(navigation.setOptions).toHaveBeenNthCalledWith(1, expect.objectContaining({ header: HomeHeader }));
});

it('should navigate to profile screen on button press', () => {
    const { getByLabelText } = render(<HomeScreen navigation={ navigation } />);

    const button = getByLabelText('navigate to profile button');

    fireEvent.press(button);

    expect(navigation.navigate).toHaveBeenNthCalledWith(1, 'Profile', { screen: 'Profile2' });
});

it('should switch language to pt-PT on button press', () => {
    expect.assertions(3);

    const LocaleChangeAsserter = () => {
        const { id: localeId } = useLocale();

        if (localeId !== 'pt-PT') {
            return null;
        }

        expect(localeId).toBe('pt-PT');

        return null;
    };

    const { queryByLabelText, queryByText } = render(
        <>
            <HomeScreen navigation={ navigation } />
            <LocaleChangeAsserter />
        </>,
    );

    const button = queryByLabelText('switch language button');

    expect(button).not.toBeNull();
    expect(queryByText('home.buttons.switch-language')).not.toBeNull();

    fireEvent.press(button);
});

