import {
  AppBar,
  Container,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import headerStyles from "./Header.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={headerStyles.header}>
        <Box className={headerStyles.header__nav}>
          <h1 className={headerStyles.header__title}> cc </h1>
          <IconButton
            id="icon-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon
              sx={{ color: "#fff" }}
              className={headerStyles.header__icon}
            />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "icon-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="./Blog">Blog</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="./About">About</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/Contact">Contact</Link>
            </MenuItem>
          </Menu>

          <div className={headerStyles.header__tabnav}>
            <ul className= {headerStyles.header__tabnav__list} >
              <li> <Link className = {headerStyles.header__tabnav__items} href="./Blog">Blog</Link> </li>
              <li> <Link className = {headerStyles.header__tabnav__items} href="./About">About</Link> </li>
              <li> <Link className = {headerStyles.header__tabnav__items} href="./Contact">Contact</Link> </li>
            </ul>
          </div>
        </Box>
      </Container>
    </AppBar>
  );
}
