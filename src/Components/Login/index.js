import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField'
import { grey } from '@mui/material/colors';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '10px solid black' ,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    color:"black"
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[900],
    },
  }));
  
  function ChildModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <ColorButton onClick={handleOpen}> Log In</ColorButton>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Thank You for Signing up</h2>
            <p id="child-modal-description">
              
            </p>
            <Button onClick={handleClose}> Close Sign Up </Button>
          </Box>
        </Modal>
      </>
    );
  }
  
  export default function Signin() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <p onClick={handleOpen}>Log In</p>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title"> </h2>
            <p id="parent-modal-description">

            </p>
           <TextField color="grey"  id="standard-basic" label="Email" variant="standard" />
           <TextField type="password" color="grey"  id="standard-basic" label="Password" variant="standard" />
            <ChildModal />
          </Box>
        </Modal>
      </div>
    );
  }
  