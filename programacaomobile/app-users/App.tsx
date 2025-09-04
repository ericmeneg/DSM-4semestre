import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, PaperProvider } from 'react-native-paper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IUser } from './interfaces/user.interface';
import ListaUsuarios from './components/ListaUsuarios';
import FormUsuario from './components/FormUsuario';

export default function App() {

  const [lista, setLista] = useState<IUser[]>([])
  
  function updateLista(){
    axios.get("http://localhost:3000/api/users")
    .then((resposta) => {
      console.log(resposta.data)
      setLista(resposta.data)
      }).catch(
        (error)=>{
          console.error("falha ao chamar a API")
          console.log(error)
        }
      )
  }

  useEffect(()=>{
    updateLista()
  },[])

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Lista de usuários</Text>
        <ListaUsuarios lista={lista} />
        <Divider />
        <FormUsuario updateLista={updateLista} />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
