import { createMuiTheme } from '@material-ui/core/styles';
import * as fonts from './fonts';

const theme = createMuiTheme({
    palette: {
        type: 'light',

        primary: {
            main: '#EFA29D'
        },

        secondary: {
            main: '#C0251D'
        },

        woodyBrown: {
            main: '#412D2A'
        },

        fuzzyBrown: {
            main: '#C07353'
        },

        transWhite: {
            main: 'rgba(250, 250, 250, 0.8)',
            light: 'rgba(250, 250, 250, 0.4)',
            nslight: 'rgba(250, 250, 250, 0.6)',
            dark: 'rgba(250, 250, 250, 0.849567)'
        },

        transBlack: {
            main: 'rgba(0, 0, 0, 0.7)',
            light: 'rgba(0, 0, 0, 0.4)',
            dark: 'rgba(0, 0, 0, 0.849567)'
        },

        white: {
            main: 'rgb(250, 250, 250)'
        },
        creamy: {
            main: '#FFEFE5'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    fonts.SpartanBold,
                    fonts.SpartanExtraBold,
                    fonts.SpartanSemiBold,
                    fonts.SpartanLight,
                    fonts.SpartanRegular,
                    fonts.SpartanThin,
                    fonts.SpartanExtraLight,
                    fonts.SpartanMedium,
                    fonts.SpartanBlack
                ],
            },
        },
    },
    typography: {
        fontFamily: 'Spartan_Regular, Arial',
        bold: {
            fontFamily: 'Spartan_Bold'
        },
        extraBold: {
            fontFamily: 'Spartan_Extra_Bold'
        },
        black: {
            fontFamily: 'Spartan_Black'
        },
        semiBold: {
            fontFamily: 'Spartan_Semi_Bold'
        },
        body2: {
            fontFamily: 'Spartan_Regular, Arial'
        }
    }
})

export default theme;