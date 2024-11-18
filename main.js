import { Client, Database } from "node-appwrite";

const PROJECT_ID = process.env.PROJECT_ID;
const COLLECTION_ID_PROFILES = proccess.env.COLLECTION_ID_PROFILES;
const DB_ID = proccess.env.DB_ID;

export default async ({ req, res, log, error }) => {
  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

  const database = new Database(client);
  if (req.method == "GET") {
    //this is a GET request (when someone ask for a data ) to the server from the client
    const response = await database.listDocuments(DB_ID, COLLECTION_ID_PROFILES); // the server response this request
    return res.json(response);
  }
  return res.send("Hello World");
};
