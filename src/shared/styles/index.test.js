import * as styles from '.';

it('should export all named styles', () => {
    expect(styles).toMatchSnapshot();
});
