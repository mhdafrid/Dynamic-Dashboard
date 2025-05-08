import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Addwidgetbuttonmodal from './Addwidgetbuttonmodal';

const AddWidgetButton = ({ onAddWidget }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = (formValues) => {
    // Add widgets from all tabs (if filled)
    Object.values(formValues).forEach((tab) => {
      if (tab.widgetName && tab.widgetText) {
        const data = [
          { name: tab.widgetName, value: Math.floor(Math.random() * 1000) + 100 },
          { name: tab.widgetText, value: Math.floor(Math.random() * 1000) + 100 },
        ];
        onAddWidget({ title: tab.widgetName, data });
      }
    });
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{
          fontFamily: 'monospace',
          fontSize: '18px',
          textTransform: 'none',
          borderRadius: '8px',
          padding: '3px 20px',
          color: 'black',
          borderColor: 'black',
        }}
        onClick={handleOpen}
      >
        Add Widget
      </Button>
      <Addwidgetbuttonmodal show={open} onClose={handleClose} onConfirm={handleConfirm} />
    </>
  );
};

export default AddWidgetButton;
