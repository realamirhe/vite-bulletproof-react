import { Typography as MuiTypography } from "@mui/material";
import { styled } from "@mui/system";

type MyTypographyExtraProps = { isEven?: boolean };

export const MyTypography = styled(MuiTypography, {
  // https://github.com/mui/material-ui/issues/31019
  shouldForwardProp: prop => !["isEven", "sx"].includes(prop as string),
  skipSx: true,
})<MyTypographyExtraProps>(({ theme, isEven }) => ({
  color: theme.palette.common.black,
  "::after": {
    content: "''",
    display: "inline-block",
    height: theme.spacing(2),
    width: theme.spacing(2),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette[isEven ? "success" : "error"].main,
  },
}));
