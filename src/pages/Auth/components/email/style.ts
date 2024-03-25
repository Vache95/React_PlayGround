import styled from "styled-components";
import { ButtonElement } from "@/commons/components/Button/style";


export const Form = styled.form`
   width:370px;
  ${ButtonElement} {
    margin-top: 24px;
   }
`;
export const InputError = styled.p`
    color: red;
    margin-top:3px;
    font-size: 12px;
`;

export const Container = styled.div`
   display:flex;
   justify-content:flex-end;
`