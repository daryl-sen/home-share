import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


export default function VirusPopup() {
  const [open, setOpen] = React.useState(false);
  const [virus, setVirus] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  function showVirusDetected() {
    if (virus) {
      return "We have found a 1,337 viruses on your computer!! Contact us now so your precious files won't be deleted."
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setVirus(true)
    }, 5000)
  })

  return (
    <div>
      <Button onClick={handleOpen}>Live Chat</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 6 }}>
            Virus <s>Scam</s> Scan 😈
          </Typography>
          <LinearProgress />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please wait while we scan your computer for viruses
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: "red" }}>
            { showVirusDetected() }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}