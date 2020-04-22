import { useContext } from 'react';
import ReactNativeLocaleContext from './context';

const useReactNativeLocale = () => useContext(ReactNativeLocaleContext);

export default useReactNativeLocale;
