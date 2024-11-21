import { Client, Users } from "node-appwrite";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;
// This Appwrite function will be executed every time your function is triggered
export default async ({ req, res, log, error }) => {
  // You can use the Appwrite SDK to interact with other services
  // For this example, we're using the Users service
  try {
    const client = new Client()
      .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(req.headers["x-appwrite-key"] ?? "");

    // Initialize messaging
    const messaging = new Messaging(client);
    const payload = JSON.parse(req.payload);
    const email = payload.email;

    // Create and send email
    const message = await messaging.createEmail(
      `welcome-${Date.now()}`, // Unique message ID
      "Welcome to AuraHub!", // Subject
      "Thank you for joining our waitlist.", // Content
      [], // topics
      [], // users
      [email], // targets
      [], // cc
      [], // bcc
      false, // draft
      true, // html
      "" // scheduledAt
    );

    res.json({ success: true, message });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.message });
  }
};
