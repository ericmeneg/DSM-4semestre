import { Text } from 'react-native-paper'

interface FormUsuarioProps {
    updateLista: () => void
}

export default function FormUsuario({updateLista}: FormUsuarioProps){
    return(
        <Text>Form de cadastro</Text>
    )
}