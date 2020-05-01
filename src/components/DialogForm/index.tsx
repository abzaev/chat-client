import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  content?: any;
  title?: string;
  close: () => void;
  open: boolean;
}

export const DialogForm = (props: Props) => {
  const {
    title,
    content,
    close,
    open,
  } = props;

  return (
    <>
      <Dialog fullWidth open={open} onClose={close}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {content && (
          <DialogContent>
            {content}
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
