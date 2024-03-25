import styled from "styled-components";
import {COLORS} from "../../styles/colors.ts";
import {justifyCenter} from "../../styles/mixins.ts";

export const Footer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
	max-width: 100%;
    width: 100%;
	${justifyCenter};
    padding-bottom: 20px;
    color: ${COLORS.ACCENT_GRAY};
    font-size: 15px;
`;