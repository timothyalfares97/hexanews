import * as React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  }
};

interface IProps {
  styles: any;
}

class Header extends React.Component<IProps> {
  public render() {
    const componentStyles = this.props.styles;

    return (
      <div className={componentStyles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={componentStyles.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={componentStyles.flex}
            >
              News
              <ul>
                <li>
                  <Link to="/">Hexanews</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header as any);
