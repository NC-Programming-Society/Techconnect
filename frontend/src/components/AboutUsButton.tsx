import React from 'react'
import { Button } from '@mui/material';

/**
 * AboutUsButton
 * 
 * MUI button to navigate to "aboutus" page
 */

type AboutUsButtonProps = {
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};

const AboutUsButton: React.FC<AboutUsButtonProps> = ({ color = "secondary" }) => {
  return (
    <Button variant="outlined" href="#contained-buttons">
      About us
    </Button>
  );
}

export default AboutUsButton