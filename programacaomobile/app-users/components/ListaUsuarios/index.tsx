import { Text } from "react-native";
import { IUser } from "../../interfaces/user.interface";
import { Button } from "react-native-paper";
import axios from "axios";

interface ListaUsuariosProps {
    lista: IUser[]
    updateLista: () => void
}

export default function ListaUsuarios({ lista, updateLista }: ListaUsuariosProps) {
    const onDelete = (id: number) => {
        axios.delete("http://localhost:3000/api/user/"+id)
        .then(() => updateLista)
    }
    
    return (
        <>
            {
                lista.map((user) => {
                    <>
                    <Text key={user.id}>
                        {user.name} - {user.email}
                    </Text>
                    <Button onPress={() => onDelete(user.id)}>Excluir</Button>
                    </>
                })
            }
        </>
    )
}