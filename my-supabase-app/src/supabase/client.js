// src/supabase/client.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vdotxpunwjvdbkrutzby.supabase.co';
const supabaseAnonKey = 'cdeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkb3R4cHVud2p2ZGJrcnV0emJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2Nzk3MzksImV4cCI6MjA2MTI1NTczOX0.EM1GQOwuLTGOQZH6Tcj945DmyXRts0F2BPLl8cW6_ds';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
