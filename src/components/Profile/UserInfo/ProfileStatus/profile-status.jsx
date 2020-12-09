import React, {useEffect, useState} from "react";
import s from "./profile-status.module.css"

const ProfileStatus = (props) => {
    const [isActive, setIsActive] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const deactivateChangingMode = () => {
        setIsActive(false)
        props.updateStatus(status)
    }
    const activateChangingMode = () => {
        setIsActive(true)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {
                isActive && <div><input className={s.inputV} value={status}
                                        onChange={(e) => onStatusChange(e)}
                                        onBlur={deactivateChangingMode}/></div>
            }

            {
                !isActive && <div><span onDoubleClick={activateChangingMode}>{props.status || "No status"}</span></div>
            }
        </div>
    )
}

export default ProfileStatus