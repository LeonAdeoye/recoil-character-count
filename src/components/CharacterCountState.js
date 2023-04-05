import {selector} from "recoil";
import TextState from "./TextState";

const CharacterCountState = selector({
    key: "characterCountState",
    get: ({get}) =>
    {
        const textValue = get(TextState);
        return textValue.length;
    }
});

export default CharacterCountState;
