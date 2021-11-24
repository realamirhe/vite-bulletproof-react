import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: "iranyekan, Roboto, Helvetica, Arial, sans-serif",
  },
});

interface IProps {
  children: JSX.Element;
}
export default function ThemeProvider({ children }: IProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

// declare module "@mui/material/styles" {
//   interface Theme {}
//   // allow configuration using `createTheme`
//   interface ThemeOptions {}
// }
