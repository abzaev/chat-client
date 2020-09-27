import React, { useState } from 'react';
import { ListItem, ListItemText, Grid, IconButton, Link } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Message } from '../../types';
import { DialogForm } from '../DialogForm';
import { EditForm } from '../EditForm';
import { UserData } from '../../types';

interface Props {
  userData: UserData | null;
  msg: Message;
  deleteMessage: (id: Message['_id']) => void;
  changeMessage: (message: Message) => void;
}

export const MessageListItem = (props: Props) => {

  const { msg, deleteMessage, changeMessage, userData } = props;
  const [open, setOpen] = useState(false);

  return (
    <Grid container item justify={
      msg.userId === userData?.id?
      "flex-end"
      : "flex-start"
    }>
      <ListItem style={{ maxWidth: '50%' }}>
        <ListItemText
          primary={
            <Grid container item justify="space-between">
              <Grid item>
                {msg.userLogin}
              </Grid>
              <Grid item>
                {
                  msg.userId === userData?.id &&
                  <>
                    <IconButton size="small" onClick={() => setOpen(true)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteMessage(msg._id)} size="small">
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              </Grid>
            </Grid>
          }
          secondary={
            <>
              <div>
                {msg.messageText}
              </div>
              {
                msg.file_link && (
                  <div>
                    <Link component="button" onClick={() => (window as any).location = msg.file_link}>
                      Download file: {msg.name}
                    </Link>
                  </div>
                )
              }
            </>
          }
        />
        <DialogForm
          open={open}
          close={() => setOpen(false)}
          title="Редактировать сообщение"
          content={
            <EditForm
              closeForm={() => setOpen(false)}
              initialValues={msg}
              onClick={(message: Message) => changeMessage(message)}
            />
          }
        />
      </ListItem>
    </Grid>
  )
}
