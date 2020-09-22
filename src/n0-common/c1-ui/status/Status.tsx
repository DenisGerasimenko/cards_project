import React from "react";
import {RequestStatusType} from "../../../n1-main/m2-bll/b1-main/mainInitialState";

type StatusBlockPropsType = {
    title: string;
    status: RequestStatusType;
    error: null | string;
}

export const Status: React.FC<StatusBlockPropsType> = (props) => {
    const {title, status, error} = props;

    return (
        <div>
            <h2>{title}</h2>
            {status === 'failed' ? <div style={{color:'red'}}>{error}</div> : null}
        </div>
    );
}