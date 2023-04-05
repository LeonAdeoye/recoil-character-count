import React from 'react';
import TextState from "./TextState";
import {useRecoilState} from "recoil";

function TextInput()
{
    const [text, setText] = useRecoilState(TextState);
    const onChange = (event) =>
    {
        setText(event.target.value);
    };
    return (
        <div>
            <input type='text' value={text} onChange={onChange}/>
        </div>
    );
}

export default TextInput;
