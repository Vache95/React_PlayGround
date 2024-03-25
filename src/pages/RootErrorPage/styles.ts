import { justifyCenter } from "@/styles/mixins";
import styled from "styled-components";


export const RootError = styled.div`
    height:100vh;
	${justifyCenter()}
    flex-direction:column;
`;

export const RootErrorTitle = styled.p`
    font-size:30px;
`;

export const RootErrorDetails = styled.div`
    font-size:20px;
`;