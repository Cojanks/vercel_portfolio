import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


/* Colors adapted from https://tailwindcss.com/docs/customizing-colors */

:root {
  /* Category */
  --color-background: #1a171e;

  --color-text: #d1d5db;
  --color-text-secondary: #6b7280;

  --color-primary: #e92d77;
  --color-primary-background: rgba(233, 45, 119, 0.05);
  --color-secondary: #6f2232;
  --color-tertiary: #8030e4;


  --color-link: #2563eb;
  --color-link-visited: #a855f7;
  --color-link-hover: #1e40af;

  --color-warning:#b59f24;
  --color-warning-background: #2a2a1d;




  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;


  --border-radius-tiny: 5px;
  --border-radius-sm: 8px;
  --border-radius-md: 11px;
  --border-radius-lg: 14px;
  --border-radius-xlg: 18px;

  --font-family-main: 'Lato';
  --font-family-secondary: 'Helvetica';
  --font-family-accent: 'Gabarito';

  --nav-height: 120;
  --nav-height-mobile: 80;

}

html {
  height: 100%;
}
body {
  font-family: var(--font-family-main), Arial, Helvetica, sans-serif ;
  background-color: var(--color-background);
  color: var(--color-text);
  font-weight: 400;
  height: 100%;


  transition: color 0.3s, background-color 0.3s;
}

.primary {
  color: var(--color-primary);
}

.whisper {
    color: var(--color-text-secondary);
}

.bold {
  font-weight: 400;
}

a { 
  color: var(--color-link);

  &:visited {
    color: var(--color-link-visited);
  }

  &:hover{
    color: var(--color-link-hover);
  }
}




`;
