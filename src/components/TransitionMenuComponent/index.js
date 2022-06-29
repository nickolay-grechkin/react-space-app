import React from "react";
import styles from './styles.module.css';
import {ReactComponent as CloseICon} from "../../assets/shared/icon-close.svg";

const TransitionMenuComponent = ({props}) => {
    return (
        <div
            className={`${styles.transitionMenuWrapper} 
            ${props.isTransitionMenuShown 
                ? styles.transitionMenuShown
                : ''}
            `}
        >
            <div onClick={props.handleOnMenuIconClick}>
                <CloseICon />
            </div>
        </div>
    );
}

export default TransitionMenuComponent;