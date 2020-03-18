import { navigationRef, navigate } from './';
import createNavigation from '../../shared/test-utils/react-navigation-prop';

beforeEach(() => {
    navigationRef.current = createNavigation();
});

it('should call navigate with the correct arguments', () => {
    navigate('Foo', { foo: 'foo', bar: 'bar' });

    expect(navigationRef.current.navigate).toHaveBeenNthCalledWith(1, 'Foo', { foo: 'foo', bar: 'bar' });
});
