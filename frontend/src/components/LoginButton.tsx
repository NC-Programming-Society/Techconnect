import React from 'react';
import { Button } from '@mui/material';

/**
 * LoginButton
 * 
 * MUI button for login
 */

type LoginButtonProps = {
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};

const LoginButton: React.FC<LoginButtonProps> = ({ color = "secondary" }) => {
  return (
    <Button variant="contained" href="#contained-buttons" color={color}>
      Login
    </Button>
  );
};

export default LoginButton;
