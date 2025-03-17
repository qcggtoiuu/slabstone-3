import { createClient as supabaseCreateClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return supabaseCreateClient<Database>(supabaseUrl, supabaseAnonKey);
};
