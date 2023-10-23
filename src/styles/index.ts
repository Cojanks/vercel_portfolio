import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


/* Colors adapted from https://tailwindcss.com/docs/customizing-colors */

:root {
  /* Category */
  --color-background: #1a171e;

  --color-text: #d1d5db;
  --color-text-secondary: #6b7280;

  --color-primary: #c3073f;
  --color-secondary: #6f2232;




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
  --font-family-accent: 'Alfa Slab One';
  

}

body {
  font-family: var(--font-family-main), Arial, Helvetica, sans-serif ;
  background-color: var(--color-background);
  color: var(--color-text);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
}

.primary {
  color: var(--color-primary);
}

`;
