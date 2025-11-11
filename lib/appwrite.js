import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6905d50400198d112cc5')
    .setPlatform('dev.bookie.ngam');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
