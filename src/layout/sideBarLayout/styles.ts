import styled from "styled-components";
import { COLORS } from "@/styles/colors";

export const Container = styled.div`
    width:100%;
    hieght:100%;
    display:flex;
    flex:1 1 100%
`;

export const SideBar = styled.div`
    padding-top:20px;
    width:50px;
    background-color:${COLORS.ACCENT_BLUE_10};
    color:${COLORS.ACCENT_WHITE};
    display:flex;
    flex-direction:column !important;
    gap:20px;
    align-items:center;
`;

export const Img = styled.img`
    width:30px;
    hieght:30px;
    cursor:pointer;
`;
