import { MongoClient } from "mongodb";

export default async function Home() {
  const client = await MongoClient.connect(
    "mongodb+srv://zoda05:qhdks367@rowoon.vfl045x.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
  const db = client.db("forum");
  return <div></div>;
}
