// src/components/SignOut.js
import React from 'react';
import { supabase } from '../supabase/client';

const SignOut = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
