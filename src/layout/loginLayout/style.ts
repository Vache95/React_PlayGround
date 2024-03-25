import styled from "styled-components";
import { COLORS } from "@/styles/colors.ts";

export const Layout = styled.div`
	max-width: 100%;
    height: 100%;
	overflow: hidden;
	display: flex;
    flex: 1 1 100%;
	position: relative;
`;
export const PlayGround = styled.div`
	max-width: 800px;
    width: 800px;
	overflow: hidden;
	display: flex;
    flex-direction: column;
    padding: 196px 80px 170px 122px;
    background-color: ${COLORS.ACCENT_LIGHT};
`;
export const Title = styled.h1`
    color:${COLORS.ACCENT_BLUE_10};
    font-size: 32px;
    margin:0 auto 47px
`;
export const Img = styled.img`
    max-width: 598px;
    width: 100%;
    max-height: 455px;
`;