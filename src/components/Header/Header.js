import {
  Fade,
  Box
} from "@material-ui/core";
import headerStyles from "./Header.module.scss";
import { useState } from "react";
import {useRouter} from 'next/router';
import Link from 'next/link';
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typewriter from "typewriter-effect";
import NotesIcon from "@mui/icons-material/Notes";


export default function Header() {
  const Router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={headerStyles.header}>
      <h2 className={headerStyles.header__text}>
        <Typewriter
          options={{
            strings: [
              "criscunas.dev",
              "Welcome to my page ",
              "Feel free to view my work",
              "Or read my blog",
              "it's ok if u dont ....",
              "Have a great day ! ",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 8,
            pauseFor: "5000ms",
          }}
        />
      </h2>
      <div className={headerStyles.header__hamburger}>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon htmlColor="white" />
        </Button>
        <Menu
          className={headerStyles.header__head}
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <div className={headerStyles.header__nav}>
            <MenuItem onClick={handleClose}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/blogs">
                <a>Blogs</a>
              </Link>
            </MenuItem>
          </div>
        </Menu>
      </div>
      <div className={headerStyles.header__tablet}>
        <ul style={{ listStyleType: "none" }}>
          <li className={headerStyles.header__tablet_list}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={headerStyles.header__tablet_list}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className={headerStyles.header__tablet_list}>
            <Link href="/blogs">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  );
}


