import React, { useState } from 'react';
import Cardwidget from './Cardwidget';
import Addwidgetbutton from './Addwidgetbutton';
import Linebar from './Linebar';

const Sectionthree = ({ searchTerm }) => {
  const design = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%' };

  const valueone = { total: 160, critical: 60, high: 100 };
  const valuetwo = { total: 10, critical: 6, high: 4 };

  const [widgets, setWidgets] = useState([
    { title: 'Image Risk Assements', data: valueone },
    { title: 'Image Security Issues', data: valuetwo },
  ]);

  const filteredWidgets = widgets.filter(widget => 
    widget.title.toLowerCase().includes(searchTerm)
  );

  const addNewWidget = ({ title, data }) => {
    setWidgets((prev) => [...prev, { title, data }]);
  };

  const handleRemoveWidget = (indexToRemove) => {
    setWidgets((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="layout-sectionone">
      <div className="layout-sectionone-title">
        <h3>Registry Scan</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        {filteredWidgets.map((widget, index) => (
          <Cardwidget
            key={index}
            title={widget.title}
            component={<Linebar value={widget.data} />}
            style={design}
            onRemove={() => handleRemoveWidget(index)}
          />
        ))}
        <Cardwidget component={<Addwidgetbutton onAddWidget={addNewWidget} />} style={design} />
      </div>
    </div>
  );
};

export default Sectionthree;