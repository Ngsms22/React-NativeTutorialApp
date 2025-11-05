import { StyleSheet } from 'react-native'

import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'


const Profile = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText style={styles.heading}>
        User Profile
        </ThemedText>
        <Spacer/>
        <ThemedText>
            Start reading some books ...
        </ThemedText>
        <Spacer/>
        
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    heading:{
        fontWeight:"bold",
        fontSize:20,
        textAlign:'center',
    }
})