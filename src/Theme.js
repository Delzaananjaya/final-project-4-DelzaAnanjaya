import { createTheme } from '@mui/material/styles';

const customBlue = "#49be25";

const theme = createTheme({
    palette: {
        common: {
            blue: customBlue,
        },
        primary: {
            main: customBlue
        }
    },
    typography: {
        fontFamily: "Nunito, sans-serif"
    }
});

export default theme;
