import { Stack } from "expo-router";
import {StatusBar } from 'expo-status-bar';
import { useUser } from "../../hooks/useUser";

const AuthLayout = () => {

const { user } = useUser()



  return (
    <>
    <StatusBar value="auto"/> 
    <Stack
      screenOptions={{
       headerShown: false, animation:"none"
      }}
    />
    </>
  );
};

export default AuthLayout;


