import { SupabaseClient, createClient } from "@supabase/supabase-js";

let cachedClient: SupabaseClient | null = null;

export function getDbClient(): SupabaseClient {
    if (cachedClient) return cachedClient;

    const supabaseUrl = process.env.SUPABASE_URL;
    if (!supabaseUrl) {
        throw new Error("`SUPABASE_URL` undefined.");
    }

    const supabaseKey = process.env.SUPABASE_KEY;
    if (!supabaseKey) {
        throw new Error("`SUPABASE_KEY` undefined.");
    }

    const client = createClient(supabaseUrl, supabaseKey);
    cachedClient = client;

    return client;
}

export default getDbClient;
