import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setProject('6905d50400198d112cc5')
    .setPlatform('dev.bookie.ngam');

export const account = new Account(client);
export const avatars = new Avatars(client);
