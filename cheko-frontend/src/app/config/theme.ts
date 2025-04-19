// theme/theme.ts
import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      border: string;
      hover: string;
      active: string;
      card: string;
      tag: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      border?: string;
      hover?: string;
      active?: string;
      card?: string;
      tag?: string;
    };
  }
}

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: {
            default: '#f5f6f8', // color-bg
            paper: '#ffffff',   // color-card
          },
          text: {
            primary: '#1f1f1f', // color-text
          },
          primary: {
            main: '#f9c9d4',
          },
          secondary: {
            main: '#d9eafd',
          },
          custom: {
            border: 'rgba(55, 53, 47, 0.09)',
            hover: 'rgba(55, 53, 47, 0.06)',
            active: 'rgba(55, 53, 47, 0.16)',
            card: '#ffffff',
            tag: '#c9f3e1',
          },
        }
      : {
          background: {
            default: '#121315', // color-bg
            paper: '#1a1a1a',   // color-card
          },
          text: {
            primary: '#ffffff', // color-text
          },
          primary: {
            main: '#f9c9d4',
          },
          secondary: {
            main: '#c9efff',
          },
          custom: {
            border: 'rgba(255, 255, 255, 0.094)',
            hover: 'rgba(255, 255, 255, 0.055)',
            active: 'rgba(255, 255, 255, 0.03)',
            card: '#1a1a1a',
            tag: '#c9f3e1',
          },
        }),
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    body1: { fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
        },
      },
    },
  },
});

export default getDesignTokens;
