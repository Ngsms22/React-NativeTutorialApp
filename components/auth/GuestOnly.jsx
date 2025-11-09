import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import { Text } from "react-native"

const GuestOnly = ({children}) => {
    const { user, authCheck } = useUser()
    const router = useRouter()

    useEffect(()=>{
        if (authCheck && user !== null ){
            router.replace('/profile')
        }
    },[user,authCheck])

    if  (!authCheck || user ) {
        return(
            <Text>Loading...</Text>
        )
    }

return children
}

export default GuestOnly