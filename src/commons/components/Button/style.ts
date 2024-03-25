import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const ButtonElement = styled.button<{styles?:boolean}>`
   background-color:${styles => styles?.styles ? 'transparent' : COLORS.ACCENT_BLUE_10};
   color:${styles => styles?.styles ? COLORS.ACCENT_BLUE_10 : COLORS.ACCENT_WHITE};
   width:117px;
   height:36px;
   border-radius:4px;
`;