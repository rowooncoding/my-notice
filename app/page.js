import { MongoClient } from "mongodb";

export default function Home() {
  MongoClient.connect();
  return <div></div>;
}
