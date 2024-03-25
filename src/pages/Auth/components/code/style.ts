import styled from "styled-components";
import { COLORS } from "@/styles/colors";
import { ButtonElement } from "@/commons/components/Button/style";

export const Form = styled.form`
${ButtonElement} {
    margin-top: 24px;
   }
   & :not(:last-child){
     margin-right:10px
   }

   & input{
     width:50px !important;
     height:50px;
     border-bottom:1px solid black;
   }
`;

export const SmsInfo = styled.p`
     max-width:370px;
     font-size:14px;
     margin-bottom:24px;
`;

export const EmailInfo = styled.p`
     max-width:370px;
     color:${COLORS.ACCENT_GRAY};
     font-size:12px;
     margin-top:24px;
`;
