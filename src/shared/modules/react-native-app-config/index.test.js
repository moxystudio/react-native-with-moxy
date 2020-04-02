import * as modules from '.';

it('should export all named modules', () => {
    expect(modules).toHaveProperty('useAppConfig');
    expect(modules).toHaveProperty('withAppConfig');
});
