import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://riyczslmjsvgkkjariju.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpeWN6c2xtanN2Z2tramFyaWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MzAwNTYsImV4cCI6MjA3MzAwNjA1Nn0.C7VSMkA7jfMoCWKzGwLTU3PDml0RYErfWeaTPICDbIY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
