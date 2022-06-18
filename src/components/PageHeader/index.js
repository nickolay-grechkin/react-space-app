import React from "react";
import './styles.css';

const PageHeader = ({props}) => {
    return (
        <div className="pageTitle">
            <span className="pageNumber">{props.pageNumber}</span> {props.pageTitle}
        </div>
    );
}

export default PageHeader;