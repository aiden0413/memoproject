import React, { useState } from "react";
import Toolbar from "./Toolbar";
import Side from "./Side";
import Memos from "./Memos";
import EditorForm from "./EditorForm";
import { Route, Switch } from 'react-router-dom';

function Content({ 
    data,
    onRemove,
    onSave,
 }) {
    const [memodata, setMemodata] = useState({id: "", title: "", content: {}, date: ""});

    const setMemoContent = (memoContent) =>{
        setMemodata(memoContent);
    }

    return (
        <div className="flex flex-row flex-grow overflow-auto">
            <Side/>
            <div className="flex flex-row flex-grow overlow-auto">
                <div className="flex flex-col flex-grow oerflow-auto">
                    <Switch>
                        <Route exact path="/"
                            render={(props) => (
                            <div className="flex flex-col flex-grow overflow-auto">
                                <Toolbar
                                    sign={false}
                                    {...props}
                                />
                                <Memos 
                                    data={data}
                                    {...props}
                                />
                            </div>
                            )}
                        />
                        <Route path="/memo/:memoid" 
                            render={(props) => (
                                <div className="flex flex-col flex-grow">
                                    <Toolbar
                                        sign={true}
                                        onRemove={onRemove}
                                        onSave={onSave}
                                        memodata={memodata}
                                        {...props}
                                    />
                                    <EditorForm
                                        setMemoContent={setMemoContent}
                                        data={data}
                                        {...props}
                                    />
                                </div>
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Content;