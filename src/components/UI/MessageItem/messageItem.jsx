import React from 'react';
import classes from './messageItem.module.css';


const MessageItem = (props) => {
    let date = new Date();
    return (
        <div className="App">
            <div className={classes.Message}>
                <div className={classes.MessageTitle}>
                    <div className={classes.UserName}> {props.message.userName} </div>
                    <div className={classes.MessageTime}> {date.getHours()}:{date.getMinutes()}</div>
                </div>
                <div className={classes.MessageContent}>
                    <div className="MessageText"> {props.message.text} </div>
                    {/*не забыть заполнить поле сохранения картиночки*/}
                    <div className="MessageAttachments">  </div>
                </div>

            </div>
        </div>
    );
};

export default MessageItem;