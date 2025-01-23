import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "../../utils/supabase/component";
import { middleware } from "../../utils/middleware";

const supabase = createClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const { data: plants, error } = await supabase.from("plants").select("*");
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      return res.status(200).json(plants);

    case "POST":
      const { name } = req.body;
      const { data, error: insertError } = await supabase
        .from("plants")
        .insert([{ name }]);
      if (insertError) {
        return res.status(500).json({ error: insertError.message });
      }
      return res.status(201).json(data);

    // Add other CRUD operations (PUT, DELETE) here

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default middleware(handler);
