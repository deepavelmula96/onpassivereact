import React from 'react';
import HocAuthentificationChild from './HocAuthentificationChild';

const HocAuthentificationParent = (props) => {
    return (
        <div>HocAuthentificationParent
            <div style={{ color: "green", fontSize: "15px", fontWeight: "bold" }}>
                userName: {props?.name?.userName} <br />
                id:{props?.name?.id}
            </div>
        </div>
    )
}

export default HocAuthentificationChild(HocAuthentificationParent);