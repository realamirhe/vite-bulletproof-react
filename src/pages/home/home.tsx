import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Trans, useTranslation } from "react-i18next";

import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { increment, reset, counterView } from "~slices/home-slice";

import { MyTypography } from "./home-components";

type Lang = "fa" | "en" | null;
const switchLanguage = (lang: Lang) => (lang === "en" ? "fa" : "en");

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const counter = useSelector(counterView);
  const dispatch = useDispatch();

  const lang = searchParams.get("lang") as Lang;

  useEffect(() => {
    if (!lang) return;
    i18n.changeLanguage(lang);
    dispatch(reset());
  }, [lang]);

  useEffect(() => {
    if (counter !== 5) return;
    setSearchParams({ lang: switchLanguage(lang) });
  }, [counter !== 5]);

  return (
    <Box sx={{ textAlign: "center", overflow: "hidden" }}>
      <MyTypography
        isEven={Boolean(counter % 2)}
        variant="h2"
        sx={{ margin: 10 }}
      >
        {t("greeting")}
      </MyTypography>

      <Typography color="gray.A700" mb={1}>
        <Trans
          i18nKey="tip"
          count={5 - counter}
          values={{ count: 5 - counter }}
        />
      </Typography>

      <Button variant="contained" onClick={() => dispatch(increment(1))}>
        {t("increment")}
      </Button>
    </Box>
  );
}
