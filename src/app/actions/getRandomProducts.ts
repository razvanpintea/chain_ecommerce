import { supabase } from "@/utils/supabase"

export async function getRandomProducts() {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .limit(4)

    if (error) {
      console.error("Error fetching products:", error)
      return []
    }

    return data
  } catch (error) {
    console.error("Unexpected error:", error)
    return []
  }
}

