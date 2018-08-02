import React from 'react';
import '../asset/css/style.css';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

var api = require('../ctrl/useApi');

class cpmBoxInfo extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.getProp = this.getProp.bind(this);
        this.getProp();
    }


    logout() {
        api.logout(response => {
            sessionStorage.clear();
        });
    }

    getProp() {
        console.log("thangse 2", this.props.infor);
    }

    render() {
        return (
            <Grid container spacing={0} className="cpmBoxInfo">
                <Grid item xs={12}>
                    <Grid container>
                        <div className="elemtfloat">
                            <Avatar className="imgBoxInfo"> T </Avatar>
                            <label className="textUser">
                                {this.props.infor.name}
                            </label>
                        </div>
                        <Button variant="extendedFab" aria-label="Delete" onClick={this.logout}>
                            Đăng Xuất
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <IconButton aria-label="Delete">
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="Delete" disabled color="primary">
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton color="secondary" aria-label="Add an alarm">
                        <Icon> alarm </Icon>
                    </IconButton>
                    <IconButton color="primary" aria-label="Add to shopping cart">
                        <AddShoppingCartIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        );
    }
}

export default cpmBoxInfo;