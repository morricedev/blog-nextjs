import { useContext, useState, useEffect } from 'react';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';
import * as Styled from './styles';

export const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;

    const currentTheme = JSON.parse(localTheme);

    if (currentTheme.name === 'dark') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(checked ? 'dark' : 'light');
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked(!checked);
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <Styled.Wrapper>
      <Styled.Label>
        Toggle light and dark mode
        <Styled.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={checked}
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Wrapper>
  );
};
