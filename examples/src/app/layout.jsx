import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {blue500} from 'material-ui/styles/colors';
import {Link} from 'react-router'
import {links} from '../conf/links'

const styles = {
  nav: {
    zIndex: 1,
    position: 'absolute',
    top: 10,
    right: 50
  },
  icon: {
    color: blue500
  }
}

class AppLayout extends React.Component {
  state = {
    drawerOpen: false
  }

  handleToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

  handleClose = () => this.setState({drawerOpen: false});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div style={styles.nav}>
            <IconButton iconClassName="fa fa-bars"
                        iconStyle={styles.icon}
                        onClick={this.handleToggle}/>
          </div>
          <Drawer docked={false} width={200}
                  openSecondary={true}
                  open={this.state.drawerOpen}
                  onRequestChange={(drawerOpen) => this.setState({drawerOpen})}>
            <MenuItem key="index" onClick={this.handleClose}>
              <Link to="/">Home</Link>
            </MenuItem>
            {
              links.map(link => {
                return (
                  <MenuItem key={link.id} onClick={this.handleClose}>
                    <Link to={link.id}>{link.label}</Link>
                  </MenuItem>
                )
              })
            }
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }

}

export default AppLayout;
