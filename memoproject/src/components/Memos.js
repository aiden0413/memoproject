import React from "react";

import Memo from './Memo';

function Memos({
    data,
    onRemove,
    onEdit,
    onSave,
    onCancel,
}) {
    const memolist = data.memolist.map(
        memo => (<Memo
            id={memo.id}
            title={memo.title}
            content={memo.content}
            date={memo.date}
            editing={memo.editing}
            onEdit={onEdit}
            onRemove={onRemove}
            onSave={onSave}
            onCancel={onCancel}
        />)
    );

    return (
        <div className="overflow-y-auto auto-rows-min grid grid-cols-4 gap-6 flex-grow justify-start py-6 px-6 border border-gray-300 relative">
            {memolist}
        </div>
    )
}

export default Memos;