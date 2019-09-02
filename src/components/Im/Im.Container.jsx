import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/im-reducer";
import Im from "./Im";

const ImContainer = props => {

    const state = props.store.getState();

    const OnAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    const onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Im dialogs={state.imPage.dialogs} messages={state.imPage.messages} updateNewMessageText={onMessageChange} addMessage={OnAddMessage}/>
    );
};

export default ImContainer;
