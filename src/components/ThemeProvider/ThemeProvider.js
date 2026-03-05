import SatoshiVariable from 'assets/fonts/Satoshi-Variable.woff2';
import SatoshiVariableItalic from 'assets/fonts/Satoshi-VariableItalic.woff2';
import SatoshiLight from 'assets/fonts/Satoshi-Light.woff2';
import SatoshiLightItalic from 'assets/fonts/Satoshi-LightItalic.woff2';
import SatoshiRegular from 'assets/fonts/Satoshi-Regular.woff2';
import SatoshiItalic from 'assets/fonts/Satoshi-Italic.woff2';
import SatoshiMedium from 'assets/fonts/Satoshi-Medium.woff2';
import SatoshiMediumItalic from 'assets/fonts/Satoshi-MediumItalic.woff2';
import SatoshiBold from 'assets/fonts/Satoshi-Bold.woff2';
import SatoshiBoldItalic from 'assets/fonts/Satoshi-BoldItalic.woff2';
import SatoshiBlack from 'assets/fonts/Satoshi-Black.woff2';
import SatoshiBlackItalic from 'assets/fonts/Satoshi-BlackItalic.woff2';
import { useHasMounted } from 'hooks';
import Head from 'next/head';
import { createContext, useEffect } from 'react';
import { classes, media } from 'utils/style';
import { theme, tokens } from './theme';
import { useTheme } from './useTheme';

export const ThemeContext = createContext({});

export const ThemeProvider = ({
  themeId = 'dark',
  theme: themeOverrides,
  children,
  className,
  as: Component = 'div',
  ...rest
}) => {
  const currentTheme = { ...theme[themeId], ...themeOverrides };
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.themeId;
  const hasMounted = useHasMounted();

  // Save root theme id to localstorage and apply class to body
  useEffect(() => {
    if (isRootProvider && hasMounted) {
      window.localStorage.setItem('theme', JSON.stringify(themeId));
      document.body.dataset.theme = themeId;
    }
  }, [themeId, isRootProvider, hasMounted]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {isRootProvider && (
        <>
          <Head>
            <meta name="theme-color" content={`rgb(${currentTheme.rgbBackground})`} />
          </Head>
          {children}
        </>
      )}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
        <Component
          className={classes('theme-provider', className)}
          data-theme={themeId}
          {...rest}
        >
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

/**
 * Squeeze out spaces and newlines
 */
export function squish(styles) {
  return styles.replace(/\s\s+/g, ' ');
}

/**
 * Transform theme token objects into CSS custom property strings
 */
export function createThemeProperties(theme) {
  return squish(
    Object.keys(theme)
      .filter(key => key !== 'themeId')
      .map(key => `--${key}: ${theme[key]};`)
      .join('\n\n')
  );
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
export function createThemeStyleObject(theme) {
  let style = {};

  for (const key of Object.keys(theme)) {
    if (key !== 'themeId') {
      style[`--${key}`] = theme[key];
    }
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
export function createMediaTokenProperties() {
  return squish(
    Object.keys(media)
      .map(key => {
        return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
      })
      .join('\n')
  );
}

export const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(theme.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(theme.light)}
  }
`);

export const fontStyles = squish(`
  /* Variable font with static fallbacks */
  @font-face {
    font-family: Satoshi;
    font-weight: 300 900;
    src: 
      url(${SatoshiVariable}) format('woff2-variations'),
      url(${SatoshiRegular}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Satoshi;
    font-weight: 300 900;
    src: 
      url(${SatoshiVariableItalic}) format('woff2-variations'),
      url(${SatoshiItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  /* Static font fallbacks for legacy browsers */
  @supports not (font-weight: 450) {
    @font-face {
      font-family: Satoshi;
      font-weight: 300;
      src: url(${SatoshiLight}) format('woff2');
      font-display: block;
      font-style: normal;
    }

    @font-face {
      font-family: Satoshi;
      font-weight: 300;
      src: url(${SatoshiLightItalic}) format('woff2');
      font-display: block;
      font-style: italic;
    }

    @font-face {
      font-family: Satoshi;
      font-weight: 400;
      src: url(${SatoshiRegular}) format('woff2');
      font-display: block;
      font-style: normal;
    }

    @font-face {
      font-family: Satoshi;
      font-weight: 400;
      src: url(${SatoshiItalic}) format('woff2');
      font-display: block;
      font-style: italic;
    }

    @font-face {
      font-family: Satoshi;
      font-weight: 500;
      src: url(${SatoshiMedium}) format('woff2');
      font-display: block;
      font-style: normal;
    }

    @font-face {
      font-family: Satoshi;
      font-weight: 500;
      src: url(${SatoshiMediumItalic}) format('woff2');
      font-display: block;
      font-style: italic;
    }

    @font-face {
      font-family: Satoshi;
      font-weight: 700;
      src: url(${SatoshiBold}) format('woff2');
      font-display: block;
      font-style: normal;
    }

    @font-face {
      font-family: Satoshi;
      font-weight: 700;
      src: url(${SatoshiBoldItalic}) format('woff2');
      font-display: block;
      font-style: italic;
    }

    @font-face {
      font-family: Satoshi;
      font-weight: 900;
      src: url(${SatoshiBlack}) format('woff2');
      font-display: block;
      font-style: normal;
    }

    @font-face {
      font-family: Satoshi;
      font-weight: 900;
      src: url(${SatoshiBlackItalic}) format('woff2');
      font-display: block;
      font-style: italic;
    }
  }

`);
