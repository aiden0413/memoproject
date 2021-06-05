import React from "react";

import Toolbar from "./Toolbar";
import Side from "./Side";
import Memos from "./Memos";

function Content({ data, onCreate }) {
    return (
        <div className="flex flex-row flex-grow overflow-auto">
            <Side 
                onCreate={onCreate}
            />
            <div className="flex flex-col flex-grow">
                <Toolbar />
                <Memos 
                    data={data}
                />
            </div>
        </div>
    )
}

export default Content;