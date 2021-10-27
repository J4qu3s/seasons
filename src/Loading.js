import React from "react";

const Loading = (props) => {
    return (
        
            <div class="ui active inverted dimmer">
                <div class="ui big text loader">{props.message}</div>
            </div>
            
        
    );
}

export default Loading;