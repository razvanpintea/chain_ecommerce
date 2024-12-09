import { supabase } from "../../utils/supabase"

export async function getProducts() {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(`
        *,
        categories (
          id,
          name
        )
      `)

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

export async function getProductsByCategory(categoryName: string) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(`
        *,
        categories!inner (
          id,
          name
        )
      `)
      .eq("categories.name", categoryName)

    if (error) {
      console.error("Error fetching products by category:", error)
      return []
    }

    return data
  } catch (error) {
    console.error("Unexpected error:", error)
    return []
  }
}

export async function getCategories() {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("*")

    if (error) {
      console.error("Error fetching categories:", error)
      return []
    }

    return data
  } catch (error) {
    console.error("Unexpected error:", error)
    return []
  }
}

export async function getProductByName(productName: string) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(`
        *,
        categories (
          id,
          name
        )
      `)
      .eq("name", productName)
      .single();

    if (error) {
      console.error("Error fetching product:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Unexpected error:", error);
    return null;
  }
}

