import localeConfig from '.';

it('should export locale config', () => {
    expect(localeConfig).toMatchSnapshot();
});
