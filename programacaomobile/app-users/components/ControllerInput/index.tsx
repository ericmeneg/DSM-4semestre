import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";

interface ControllerInputProps {
    control: Control<any>
    name: string,
    label: string,
    secure?: boolean
}

export default function ControllerInput({ control, name, label, secure }: ControllerInputProps) {
    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: true }}
            render={({ field }) => (
                <TextInput 
                secureTextEntry = {secure}
                label={label} {...field} />
            )}
        />
    )
}