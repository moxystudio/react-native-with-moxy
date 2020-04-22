import { Platform } from 'react-native';

export const mockPlatform = (os) => {
    Platform.select.mockImplementation((platforms) => platforms[os]);
    Platform.OS = os;
};
