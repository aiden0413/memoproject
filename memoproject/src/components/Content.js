import React from "react";

import Toolbar from "./Toolbar";
import Side from "./Side";
import Memos from "./Memos";

function Content({ 
    data,
    onCreate,
    onRemove,
    onEdit,
    onSave,
    onCancel,
 }) {
    return (
        <div className="flex flex-row flex-grow overflow-auto">
            <Side 
                onCreate={onCreate}
            />
            <div className="flex flex-col flex-grow">
                <Toolbar
                    /*onRemove={onRemove}
                    onEdit={onEdit}
                    onCancel={onCancel}
                    onSave={onSave}*/
                />
                <Memos 
                    data={data}
                    onRemove={onRemove}
                    onEdit={onEdit}
                    onSave={onSave}
                    onCancel={onCancel}
                />
            </div>
        </div>
    )
}

export default Content;