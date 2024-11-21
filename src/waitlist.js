import { Client, Databases, Functions, ID } from "appwrite";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;
const FUNCTION_ID = import.meta.env.VITE_FUNCTION_ID; // Add this to your .env file

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);
const databases = new Databases(client);
const functions = new Functions(client);

document.getElementById("waitlist-form").addEventListener("submit", async e => {
  e.preventDefault();

  try {
    const email = document.getElementById("user-email").value;

    // First save to database
    const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
      email
    });

    // Then trigger the email function
    const execution = await functions.createExecution(
      FUNCTION_ID,
      JSON.stringify({
        email: email
      })
    );

    console.log(response);
    alert("You have been added to the waitlist! Check your email.");
  } catch (error) {
    console.error(error);
    alert("An error occurred. Please try again.");
  }
});
