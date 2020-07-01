import { createNavigationProp } from '../../shared/test-utils/react-navigation';
import { navigationRef, navigate } from './';

beforeEach(() => {
    navigationRef.current = createNavigationProp();
});

it('should call navigate with the correct arguments', () => {
    navigate('Foo', { foo: 'foo', bar: 'bar' });

    expect(navigationRef.current.navigate).toHaveBeenNthCalledWith(1, 'Foo', { foo: 'foo', bar: 'bar' });
});
