import React from "react";
import { graphql } from "react-apollo";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  progress: {
    color: "white",
    marginRight: theme.spacing(1)
  }
});

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onLogout = () => {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  };

  render() {
    const { classes, history } = this.props;
    const { loading, user } = this.props.data;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Todo
            </Typography>
            {loading ? (
              <CircularProgress size="30" className={classes.progress} />
            ) : (
              <div>
                {user ? (
                  <Button color="inherit" onClick={() => this.onLogout()}>
                    Logout
                  </Button>
                ) : (
                  <div>
                    <Button color="inherit" onClick={e => this.handleClose(e)}>
                      Signup
                    </Button>
                    <Button
                      color="inherit"
                      onClick={() => history.push("/login")}
                    >
                      Login
                    </Button>
                  </div>
                )}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default graphql(mutation)(
  graphql(query)(withStyles(styles)(MenuAppBar))
);
