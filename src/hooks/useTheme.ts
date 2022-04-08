import { darkTheme, lightTheme } from 'theme/theme';
import useClientStore from './useClientStore';

const useTheme = () => {
  const { theme } = useClientStore();

  if (theme === 'darkTheme') {
    return darkTheme;
  }
  return lightTheme;
};
export default useTheme;
