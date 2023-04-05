import React, {Component} from 'react';
import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";

class CharacterCounter extends Component
{
    render()
    {
        return (
            <div>
                <TextInput/>
                <CharacterCount/>
            </div>
        );
    }
}

export default CharacterCounter;
