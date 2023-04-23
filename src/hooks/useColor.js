import { useLocation } from "react-router-dom";
import { THEME_COLORS } from "../lib/colors";

function useColor() {
  const location = useLocation();
  switch (location?.pathname) {
    case "/property-search":
      return {
        textBtnColor: THEME_COLORS.WHITE,
        actionBtnBg: THEME_COLORS.WHITE,
        actionBtColor: THEME_COLORS.BLUE,
      };

    case "/property-detail":
      return {
        textBtnColor: THEME_COLORS.WHITE,
        actionBtnBg: THEME_COLORS.WHITE,
        actionBtColor: THEME_COLORS.PRIMARY,
      };
    case "/address-autocomplete":
      return {
        textBtnColor: THEME_COLORS.WHITE,
        actionBtnBg: THEME_COLORS.WHITE,
        actionBtColor: THEME_COLORS.RED,
      };

    default:
      return {
        textBtnColor: THEME_COLORS.BLACK,
        actionBtnBg: THEME_COLORS.PRIMARY,
        actionBtColor: THEME_COLORS.WHITE,
      };
  }
}

export default useColor;
