import React, {Component} from "react";
import s from "./profile-status.module.css"

export default class ProfileStatus extends Component {

    state = {
        isActive: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status})
        }
    }

    activateChangingMode = () => {
        this.setState({isActive: true})
    }

    deactivateChangingMode = () => {
        this.setState({isActive: false})
        this.props.updateStatus(this.state.status)
    }

    render() {
        return <div>
            {
                this.state.isActive ?
                    <div><input className={s.inputV} value={this.state.status}
                                onChange={(e) => this.setState({status: e.target.value})}
                                onBlur={this.deactivateChangingMode}/></div> :
                    <div><span onDoubleClick={this.activateChangingMode}>{this.props.status || "No status"}</span></div>


            }
        </div>

    }
}
