import * as components from '.';

it('should export all named components', () => {
    expect(components).toHaveProperty('ThemeContext');
    expect(components).toHaveProperty('ThemeProvider');
    expect(components).toHaveProperty('useTheme');
});
