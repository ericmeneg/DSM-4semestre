import axios from 'axios'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button, Text, TextInput } from 'react-native-paper'
import ControllerInput from '../ControllerInput'

interface FormUsuarioProps {
    updateLista: () => void
}

interface IUsuario {
    name: string,
    email: string,
    password: string
}

export default function FormUsuario({ updateLista }: FormUsuarioProps) {
    const { handleSubmit, setValue, reset, control } = useForm<IUsuario>()
    const onSubmit = (dados: IUsuario) => {
        axios.post("http://localhost:3000/api/users", dados)
            .then(() => {
                updateLista()
                reset()
            })
    }
    return (
        <>
            <Text>Cadastro de receita</Text>
            <ControllerInput
                control = {control}
                name = "name"
                label = "Nome"
            />

            <ControllerInput
                control = {control}
                name = "email"
                label = "E-mail"
            />

            <ControllerInput
                control = {control}
                name = "password"
                label = "Senha"
                secure = {true}
            />

            <Button onPress={handleSubmit(onSubmit)}>Cadastrar</Button>
        </>
    )
}