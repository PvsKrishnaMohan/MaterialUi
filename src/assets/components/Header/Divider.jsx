import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import HeroText from "./HeroText";
import GitHubIcon from '@mui/icons-material/GitHub';



export default function IntroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 760,height:700,borderRadius:'15px' }}>
      <Box sx={{ p: 1 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Hello!, I'm
          </Typography>
          <Typography gutterBottom variant="h1" component="div">
            <GitHubIcon/>
          </Typography>
        </Stack>
                <HeroText />
        
      </Box>
   
    </Card>
  );
}
