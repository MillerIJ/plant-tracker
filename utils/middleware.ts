import { NextApiRequest, NextApiResponse } from "next";

export function middleware(handler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Example middleware logic: logging
      console.log(`${req.method} ${req.url}`);

      // Call the handler
      await handler(req, res);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
