import React from "react";
import {Control, FieldValues, RegisterOptions} from "react-hook-form";
import {TextFieldVariants} from "@mui/material";

export interface TextInputProps {
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    placeholder: string;
    type?: string;
    maxLength?: number;
    name: string;
    control:  Control<FieldValues>
    rules:
        | Omit<
        RegisterOptions<FieldValues, string>,
        'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'
    >
        | undefined;
    label?:string,
    variant?: TextFieldVariants | undefined;
}
