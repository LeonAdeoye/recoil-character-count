import React from 'react';
import CharacterCountState from "./CharacterCountState";
import {useRecoilValue} from "recoil";

function CharacterCount()
{
    return (
        <div>
           Character count:  {useRecoilValue(CharacterCountState)}
        </div>
    );
}

export default CharacterCount;
