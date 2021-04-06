import React, { useState } from "react";

import ReactContext from "./context";

const Provider = props => {
    const [mission, setMission] = useState({
        mname : "Go to India",
        agent : "008",
        accept : "Not Accepted"
    })   

    return(
        <ReactContext.Provider
        value = {{
            data : mission,
            isMissionAccepted : () => {
                setMission({...mission, accept: "ACCEPTED"})
            }
        }}>
            {props.children}    
        </ReactContext.Provider>
    )
}

export default Provider;