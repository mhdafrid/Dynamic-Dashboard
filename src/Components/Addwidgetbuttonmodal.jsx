import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button as BootstrapButton } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Button as MUIButton, TextField, Box } from '@mui/material';

const Addwidgetbuttonmodal = ({ show, onClose, onConfirm }) => {
    const [clickedTabs, setClickedTabs] = useState({
    tab1: false,
    tab2: false,
    tab3: false
  });

  const [formValues, setFormValues] = useState({
    tab1: { widgetName: '', widgetText: '' },
    tab2: { widgetName: '', widgetText: '' },
    tab3: { widgetName: '', widgetText: '' }
  });

  const handleButtonClick = (tabKey) => {
    setClickedTabs((prev) => ({ ...prev, [tabKey]: true }));
  };

  const handleInputChange = (tabKey, field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [tabKey]: {
        ...prev[tabKey],
        [field]: value
      }
    }));
  };

  const renderWidgetInputs = (tabKey) => {
    if (!clickedTabs[tabKey]) return null;
    return (
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Widget Name"
          variant="outlined"
          value={formValues[tabKey].widgetName}
          onChange={(e) => handleInputChange(tabKey, 'widgetName', e.target.value)}
        />
        <TextField
          label="Widget Text"
          variant="outlined"
          value={formValues[tabKey].widgetText}
          onChange={(e) => handleInputChange(tabKey, 'widgetText', e.target.value)}
        />
      </Box>
    );
  };

  return (
    <Modal show={show} onHide={onClose} animation={false} size="xl">
    <Modal.Header closeButton>
      <Modal.Title>Add Widget</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Tabs defaultActiveKey="tab1" id="widget-tabs" className="mb-3">
        {['tab1', 'tab2', 'tab3'].map((tabKey, index) => (
          <Tab key={tabKey} eventKey={tabKey} title={["CSPM Executive Dashboard", "CWPP Dashboard", "Registry Scan"][index]}>
            <div>
              <CustomButton onClick={() => handleButtonClick(tabKey)} />
              {renderWidgetInputs(tabKey)}
            </div>
          </Tab>
        ))}
      </Tabs>
    </Modal.Body>
    <Modal.Footer>
      <BootstrapButton variant="secondary" onClick={onClose}>
        Close
      </BootstrapButton>
      <BootstrapButton
        variant="primary"
        onClick={() => {
          onConfirm(formValues); // ✅ send data back
        }}
      >
        Confirm
      </BootstrapButton>
    </Modal.Footer>
  </Modal>
);
};

const CustomButton = ({ onClick }) => {
  return (
    <MUIButton
      variant="contained"
      color="primary"
      onClick={onClick}
      size="medium"
      sx={{ padding: '10px 10px', marginTop: '10px' }}
    >
      Add
    </MUIButton>
  );
};

export default Addwidgetbuttonmodal;