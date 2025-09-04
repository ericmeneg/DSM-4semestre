import { Text } from "react-native";
import { IUser } from "../../interfaces/user.interface";

interface ListaUsuariosProps{
    lista: IUser[]
}

export default function ListaUsuarios({lista}: ListaUsuariosProps){
    return(
        <>
        {
            lista.map((user) => (
                <Text>{user.name} - {user.email}</Text>
            ))
        }
        </>
    )
}