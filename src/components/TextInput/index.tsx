import {InputAdornment, TextField} from "@mui/material";
import {Controller} from "react-hook-form";
import React from "react";
import {TextInputProps} from "./types.ts";
import {InputError} from "../../pages/Auth/components/email/style.ts";

const TextInput: React.FC<TextInputProps> = ({
                                  Icon,
                                  placeholder,
                                  maxLength = 50,
                                  name,
                                  control,
                                  rules,
                                  label,
                                  variant,
                              }) => (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue=''
                rules={rules}
                render={({ field: { onChange, value }, fieldState: {invalid, error} }) => (
           <>
               <TextField
                   error={invalid}
                   fullWidth
                   autoComplete='off'
                   value={value}
                   inputProps={{ maxLength }}
                   placeholder={placeholder}
                   onChange={onChange}
                   variant={variant}
                   label={label}
                   InputProps={{
                       startAdornment: Icon && (
                           <InputAdornment position='start'>
                               Icon
                           </InputAdornment>
                       ),
                   }}
               />
               {error  && <InputError>{error?.message}</InputError>}
           </>
                )}
            />

        </>
    );

export default TextInput;