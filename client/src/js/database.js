import { openDB } from "idb";

//creating a new database named 'jate' using version 1.
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      //adds database schema if not already initialised
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      //creates a new object store for the data, and id key name to increment automatically.
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("putDb implemented");

  //create a connection to the database and version want to use
  const jateDb = await openDB("jate", 1);

  //create a new transaction and specifify database and data privileges
  const tx = jateDb.transaction("jate", "readwrite");

  //open up desired Object Store

  const store = tx.objectStore("jate");

  //use .add() method on the store and pass in the content. //store.put?
  const request = store.put({ id: 1, value: content });

  //get confirmation of the request

  const result = await request;
  console.log("data saved to the database", result.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("getDb implemented");
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction("jate", "readonly");

  // Open up the desired object store.
  const store = tx.objectStore("jate");

  // Use the .getAll() method to get all data in the database.
  const request = store.get(1);

  // Get confirmation of the request.
  const result = await request;
  console.log("result.value", result);
  return result.value;
};
initdb();
