import { supabase } from "./supabase"

async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("categories").select("*").limit(1)
    if (error) throw error
    console.log("Supabase connection successful. Sample data:", data)
  } catch (error) {
    console.error("Error connecting to Supabase:", error)
  }
}

testSupabaseConnection()

