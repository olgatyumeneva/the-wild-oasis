import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://wmifkakwcauzoioiizku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtaWZrYWt3Y2F1em9pb2lpemt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0NTYxMjEsImV4cCI6MjAzMzAzMjEyMX0.TuBb6Byob5eJITehHkbQkN42Z1AwXKw7XSSguCR3k7M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
