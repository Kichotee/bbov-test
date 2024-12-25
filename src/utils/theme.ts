export function setTheme(themeName:string, setClassName:React.Dispatch<React.SetStateAction<string>>) {
    localStorage.setItem('theme', themeName);
    setClassName(themeName);
}

export function keepTheme(setClassName:React.Dispatch<React.SetStateAction<string>>) {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme, setClassName);
    return;
  }

  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
  if (prefersLightTheme.matches) {
    setTheme('theme-light', setClassName);
    return;
  }

  setTheme('theme-dark', setClassName);
}

