import * as modules from '.';

it('should export all named modules', () => {
    expect(modules).toHaveProperty('Button');
    expect(modules).toHaveProperty('ThemeProvider');
    expect(modules).toHaveProperty('useTheme');
    expect(modules).toHaveProperty('LocaleProvider');
    expect(modules).toHaveProperty('LocaleConsumer');
    expect(modules).toHaveProperty('useLocale');
    expect(modules).toHaveProperty('withLocale');
    expect(modules).toHaveProperty('AppConfigProvider');
    expect(modules).toHaveProperty('AppConfigConsumer');
    expect(modules).toHaveProperty('useAppConfig');
    expect(modules).toHaveProperty('withAppConfig');
    expect(modules).toHaveProperty('SplashScreen');
    expect(modules).toHaveProperty('SafeAreaHeader');
});
