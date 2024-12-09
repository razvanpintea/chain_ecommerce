import { createClient } from "@supabase/supabase-js"

// TODO: Replace these with environment variables in production
const supabaseUrl = "https://vlkxhabmmxiwvlymbfgy.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsa3hoYWJtbXhpd3ZseW1iZmd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1ODgzNDEsImV4cCI6MjA0OTE2NDM0MX0.ZtYq6DqOciCttITF98Y_veRG2pxUDS5G42hqmiNrLzk"

// Uncomment these lines when youre ready to use environment variables
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error(Missing Supabase environment variables)
// }

export const supabase = createClient(supabaseUrl, supabaseKey)

