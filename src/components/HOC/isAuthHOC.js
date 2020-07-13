import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
  class isAuth extends React.Component {
        render() {
            return this.props.isAuth ? <Component {...this.props}/> : <Redirect to={"/login"}/>
        }
    }
    let RedirectComponent = connect(mapStateToPropsRedirect)(isAuth);

    return RedirectComponent;

}


