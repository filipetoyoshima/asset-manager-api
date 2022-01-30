// todo: change it all to env variables
const user = 'root';
const password = 'rootpassword';
const host = 'localhost:27017';
const database = 'asset-management';

export default {
    uri: `mongodb://${user}:${password}@${host}`,
}