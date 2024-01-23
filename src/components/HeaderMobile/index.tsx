import { Button, Drawer } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { Menu } from "./styles";

interface HeaderMobileProps {
  children: React.ReactNode;
  toggleMenu: () => void;
  open: boolean;
}

const HeaderMobile = ({ children, toggleMenu, open }: HeaderMobileProps) => {
  return (
    <Menu>
      <Button onClick={toggleMenu}>
        <MenuIcon sx={{ color: "#fff" }} fontSize="large" />
      </Button>
      <Drawer anchor={"right"} open={open}>
        {children}
      </Drawer>
    </Menu>
  );
};

export default HeaderMobile;
