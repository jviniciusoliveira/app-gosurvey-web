import React, { useMemo, forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
  MoreVert as MoreVertIcon,
  ViewList as ViewListIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    color: 'inherit',
    underline: 'always',
  },
}));

const MenuItemLink = props => {
  const { icon, primary, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <MenuItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </MenuItem>
    </li>
  );
};

const ButtonItemLink = props => {
  const { icon: Icon, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <IconButton component={renderLink} className="MuiIconButton-colorInherit">
      <Icon />
    </IconButton>
  );
};

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg" className={classes.container}>
            <Typography variant="h6">GoSurvey</Typography>
            <div>
              <ButtonItemLink
                edge="start"
                aria-label="view list"
                to="/"
                icon={ViewListIcon}
              />
              <IconButton
                aria-label="display more actions"
                edge="start"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItemLink
                  onClick={handleClose}
                  to="/add"
                  primary="Add Survey"
                />
                <MenuItemLink
                  to="/trash"
                  primary="Users"
                  onClick={handleClose}
                />
              </Menu>
              <ButtonItemLink
                aria-label="account of current user"
                color="inherit"
                to="/"
                icon={AccountCircleIcon}
              />
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
