import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
//Modal apllication to login
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


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

    const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Link to onClick={handleOpen}>Log In</Link>
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
         {/* <TextField color="grey"  id="standard-basic" label="Email" variant="standard" />
         <TextField type="password" color="grey"  id="standard-basic" label="Password" variant="standard" /> */}


          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="email">Email address:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div>
                <p className="error-text">The information provided is incorrect</p>
              </div>
            ) : null}
            <div className="flex-row flex-end">
              <ColorButton type="submit">Log In</ColorButton>
            </div>
          </form> 

          <ChildModal />
        </Box>
      </Modal>
    
     
    </>
  );
}

// export default function Signin() {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
   
//   );
// }

export default Login;