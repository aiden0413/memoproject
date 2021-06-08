import React, { useState } from "react";

import Button from './Button';

function Memo({
    id="",
    title="",
    content="",
    date="",
    onSave,
    onRemove,
}) {
    const [state, setState] = useState({editing: false, title: "", content: "", date: ""})
    
    const handleEditing = () => {
        setState({...state, editing: !state.editing});
    }
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    if(state.editing){
        return (
            <div className="flex flex-col gap-3 bg-green-400 flex-grow p-3">
                <input
                        value={state.title}
                        name="title"
                        placeholder="제목"
                        onChange={handleChange}
                />
                <textarea 
                        className="resize-none h-300px"
                        value={state.content}
                        name="content"
                        placeholder="내용"
                        onChange={handleChange}
                />
                <input
                        value={state.date}
                        name="date"
                        placeholder="날짜"
                        onChange={handleChange}
                />
                <div className="flex flex-row justify-around">
                    <Button 
                        text="저장"
                        btnFunc={onSave}
                    />
                    <Button 
                        text="취소"
                        btnFunc={handleEditing}
                    />
                    <Button 
                        text="삭제" 
                        btnFunc={onRemove}
                        id={id}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3 bg-green-400 p-3"
            onClick={handleEditing}
        >
            <div className="bg-green-200">{title}</div>
            <div className="bg-green-200 h-300px">{content}</div>
            <div className="bg-green-200">{date}</div>
            {/*<div className="flex flex-row gap-4 justify-center">
                <Button 
                    className="f"
                    text="저장"
                    btnFunc={onSave}
                />
                <Button 
                    text="취소"
                    btnFunc={onCancel}
                />
                <Button 
                    text="삭제" 
                    btnFunc={onRemove}
                    id={id}
                />
            </div>*/}
        </div>
    )
}

export default Memo;