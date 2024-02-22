import { Client } from "pg";

const client = new Client({
  user: "postgres.etodcwwhhbajjmoerylk",
  host: "aws-0-ap-northeast-2.pooler.supabase.com",
  database: "postgres",
  password: "dmsgy963!!@",
  port: 5432,
});

client.connect();

// client.connect().then(async () => {
//   console.log((await client.query("SELECT * FROM post")).rows);
// });

export default client;
