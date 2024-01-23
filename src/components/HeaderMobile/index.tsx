import { useState } from 'react';
import { Button, Drawer } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import { Menu } from './styles';

interface HeaderMobileProps {
  children: React.ReactNode;
}

const HeaderMobile = ({ children }: HeaderMobileProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Menu>
      <Button onClick={() => setOpen((state) => !state)}>
        <MenuIcon sx={{ color: '#fff' }} fontSize="large" />
      </Button>
      <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
        {children}
      </Drawer>
    </Menu>
  );
};

export default HeaderMobile;
