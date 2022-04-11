import { createMuiTheme } from '@material-ui/core/styles'
import { neutralColor, primaryColor, secondaryColor } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrast: 'white'
        },
        secondary: {
            main: secondaryColor,
            contrast: 'white'
        },
        text: {
            primary: neutralColor
        }
    }
})

export default theme