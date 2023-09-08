import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pbdysfbkdisqzshncyui.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiZHlzZmJrZGlzcXpzaG5jeXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5NjI2NDYsImV4cCI6MjAwOTUzODY0Nn0.YtPZ8thDxIhkAoEPdy7CS3MY4ctcZj4jY6xpigzenpk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
