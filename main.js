import { Client, Database } from "node-appwrite";

const PROJECT_ID = "673acc91002a76dc03fe";
const COLLECTION_ID_PROFILES = "673b0f5e003cf1030a46";
const DB_ID = "673ae34800205229d252";

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
