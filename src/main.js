
export default async ({ req, res, log, error }) => {
  if (req.method === 'GET') {
    res.send('Hello World!');
  }
};
