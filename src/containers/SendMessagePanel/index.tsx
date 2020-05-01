import React, { useState } from 'react';
import { AppBar, Grid, Button, Toolbar, TextField, IconButton, FormControl, OutlinedInput } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { sendMessage } from '../../store/index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  emoji: {
    position: 'fixed',
    zIndex: 1101,
    bottom: 0,
    right: 0,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    borderTop: '1px solid blue',
  }
});

export const SendMessagePanel = () => {
  const classes = useStyles();

  const [messageText, setMessageText] = useState("");
  const [userName, setUserName] = useState("Anonymous");
  const [file, setFile] = useState();
  const [emojiPickerState, SetEmojiPicker] = useState(false);

  const triggerPicker = (event: React.MouseEvent) => {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }

  return (
    <>
      <div className={classes.emoji}>
        {emojiPickerState && (
          <Picker
            emoji="point_up"
            // @ts-ignore
            onSelect={emoji => setMessageText(messageText + emoji.native)}
          />
        )}
      </div>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              placeholder="Enter your message"
              value={messageText}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessageText(event.target.value)}
            />
          </FormControl>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <IconButton size="small" onClick={triggerPicker}>
                <InsertEmoticonIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <input
                id="contained-button-file"
                multiple
                type="file"
                onChange={(event: any) => setFile(event.target.files[0])}
                style={{
                  display: 'none',
                }}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  sendMessage({messageText, userName, file});
                  setMessageText("");
                  setFile(undefined);
                }}
                variant="contained">Send</Button>
            </Grid>
            <Grid item>
              <TextField
                label="Name"
                variant="outlined"
                value={userName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  ) 
}