import * as modules from '.';

it('should export all named modules', () => {
    expect(modules).toHaveProperty('ThemeProvider');
    expect(modules).toHaveProperty('useTheme');
});
