import { DefaultTheme } from 'styled-components';

const primaryBackgroundColor = '#ff3232';
const additionalTextColor = '#3e3e3e';
const primaryBorder = '#ccc';
const negativeColor = 'rgb(255, 255, 255)';
const naturalBackgroundColor = '#F9F9FB';

const theme: DefaultTheme = {
  borderRadius: '5px',
  boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.16)',
  transitionRate: '0.4s',

  colors: {
    primaryWhite: '#fff',
    primaryBackgroundColor,
    secondaryBackgroundColor: '#ce1026',
    lighterBackgroundColor: 'rgb(248, 249, 253)',
    tertiaryBackgroundColor: '#dceaff',
    lightBackgroundColor: '#fffcfc',
    updatedValue: '#00bf0a',
    backdropBackgroundColor: 'rgba(187, 204, 221, 0.6)',
    primaryTextColor: '#333333',
    secondaryTextColor: '#888888',
    additionalTextColor,
    additionalTextColor2: '#444444',
    additionalTextColor3: '#3a3a3a',
    additionalTextColor4: '#4a4a4a',
    additionalTextColor5: '#535767',
    additionalTextColor6: '#4b4b4b',
    errorColor: '#f66577',
    successColor: '#20db7e',
    activeColor: '#f7a35c',
    naturalBackgroundColor,
    negativeColor,
    tertiaryTextColor: '#001446',
    svgColor: '#a7b2cf',
    additionalSvgColor: '#666666',
    additionalSvgColor2: 'rgba(0, 0, 0, 0.54)',
    additionalSvgColor3: '#797979',
    primaryIconColor: '#999999',
    secondaryIconColor: '#b7b7b7',
    primaryDark: '#40414b',
    markerBoxShadow: '#d7d8db',
    primaryBorder,
    secondaryBorderColor: '#c6cad5',
    tertiaryBorderColor: '#dfe1e9',
    selectedMarkerBoxShadow: '#5c9df5',
    outlineColor: '#d4d4d4',
    light: '#f2f2f2',
    additionalLight: 'rgba(255, 255, 255, 0.9)',
    dark: '#142c68',
    gray: '#949aaa',
    splitSquaresColor: '#a6a6a6',
    tableLegendMainColor: '#898989',
    legendBorder: '#d8d8d8',
    primarySelectedBackgroundColor: '#e8f5ff',
    secondaryTreeTextColor: '#9b9b9b',
    navigationBorder: '#e3e3e3',
    triangleColor: '#5577dd',
    commentBackgroundColor: '#f8f8f8'
  },

  spacing: {
    framePadding: '32px',
    smallPadding: '8px',
    mediumPadding: '16px'
  },

  sizes: {
    fontSizeRegular: '12px',
    fontSizeSmall: '13px',
    fontSizeMedium: '14px',
    fontSizeExtraMedium: '16px',
    fontSizeLarge: '18px',
    iconSize: '28px',
    fullHeight: '100%',
    fullWidth: '100%',
    textBoxHeight: '38px'
  },

  mixins: {
    positive: `
      &&:hover, && {
        color: #fff !important;
        background-color: ${primaryBackgroundColor};
      }
    `,
    negative: `
      && {
        color: ${additionalTextColor};
        text-transform: capitalize;
        border: 1px solid ${primaryBorder};
        background-color:  ${negativeColor}
      }
    `,
    natural: `
      && {
        color: ${additionalTextColor};
        border: 1px solid ${primaryBorder};
        background-color: ${naturalBackgroundColor}
        font-weight: bold;
      }
    `
  }
};

export default theme;