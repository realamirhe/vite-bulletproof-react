import { Typography as MuiTypography } from "@mui/material";
import { styled } from "@mui/system";

type MyTypographyExtraProps = { isEven?: boolean };

export const MyTypography = styled(MuiTypography, {
  shouldForwardProp: prop => prop !== "isEven",
})<MyTypographyExtraProps>(
  ({ theme, isEven }) => `
   color: ${theme.palette.common.black};

   ::after {
      content: "";
      display: inline-block;
      height: ${theme.spacing(2)};
      width: ${theme.spacing(2)};
      border-radius: ${theme.spacing(2)};
      background-color: ${theme.palette[isEven ? "success" : "error"].main};
   }
  `,
);
