import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import NavigationButton from './submodules/NavigationButton';

interface MainDrawerProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function MainDrawer({ isOpen, setIsOpen }: MainDrawerProps) {
  const navigate = useNavigate();

  return (
    <Drawer open={isOpen} onClose={setIsOpen}>
      <Stack p={2} sx={{ height: "100%" }} justifyContent={"center"}>
        <Typography
          sx={{
            textAlign: "right",
            mb: 2,
            fontSize: "1.2em",
          }}
        >
          APPLICATIONS
        </Typography>
        <Divider />
        <NavigationButton
          handleClick={() => {
            navigate("/");
            setIsOpen();
          }}
          icon={<HomeIcon />}
        >
          Dashboard
        </NavigationButton>
        <NavigationButton
          handleClick={() => {
            navigate("/accounts");
            setIsOpen();
          }}
          icon={<MonetizationOnIcon />}
        >
          My Accounts
        </NavigationButton>
        <NavigationButton
          handleClick={() => {
            navigate("/transfers");
            setIsOpen();
          }}
          icon={<CurrencyExchangeIcon />}
        >
          Transfers
        </NavigationButton>
        <NavigationButton
          handleClick={() => {
            navigate("/contact");
            setIsOpen();
          }}
          icon={<HelpIcon />}
        >
          Contact Us
        </NavigationButton>
      </Stack>
    </Drawer>
  );
}
