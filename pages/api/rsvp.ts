import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

export default async function handler(req, res) {
  const { email } = req.body;

  const { data, error } = await supabase.from("emails").insert([{ email }]);

  if (data) {
    res.status(200).json({ data });
  } else {
    res.status(500).json({ error });
  }
}
