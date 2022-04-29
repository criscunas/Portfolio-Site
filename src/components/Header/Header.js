import {
  AppBar,
  Container,
  Box
} from "@material-ui/core";
import headerStyles from "./Header.module.scss";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useRouter} from 'next/router';


export default function Header() {

  const Router = useRouter()

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={headerStyles.header}>
        <Box className={headerStyles.header__nav}>
          <h1
            onClick = {() => Router.push('/')}
            className={headerStyles.header__title}> <ArrowBackIosIcon/> <p className = {headerStyles.header__name} >/ C</p> <ArrowForwardIosIcon/>  </h1>
        </Box>
      </Container>
    </AppBar>
  );
}



{          
  
    
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

  
  // <IconButton
          //   id="icon-button"
          //   aria-controls={open ? "basic-menu" : undefined}
          //   aria-haspopup="true"
          //   aria-expanded={open ? "true" : undefined}
          //   onClick={handleClick}
          // >
          //   <MenuIcon
          //     sx={{ color: "#fff" }}
          //     className={headerStyles.header__icon}
          //   />
          // </IconButton>
          // <Menu
          //   id="basic-menu"
          //   anchorEl={anchorEl}
          //   open={open}
          //   onClose={handleClose}
          //   MenuListProps={{
          //     "aria-labelledby": "icon-button",
          //   }}
          // >
          //   <MenuItem onClick={handleClose}>
          //     <Link href="./Blog">Blog</Link>
          //   </MenuItem>
          //   <MenuItem onClick={handleClose}>
          //     <Link href="./About">About</Link>
          //   </MenuItem>
          //   <MenuItem onClick={handleClose}>
          //     <Link href="/Contact">Contact</Link>
          //   </MenuItem>
          // </Menu>
}