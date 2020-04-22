import * as modules from '.';

it('should export all named modules', () => {
    expect(modules).toHaveProperty('LocaleProvider');
    expect(modules).toHaveProperty('LocaleConsumer');
    expect(modules).toHaveProperty('useLocale');
    expect(modules).toHaveProperty('withLocale');
});
