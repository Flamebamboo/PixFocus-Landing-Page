export default async ({ req, res, log, error }) => {
  const KEY = rew.headers("x-appwrite-key");
  return res.text(KEY);
};
