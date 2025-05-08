import React, { useState } from 'react';
import Cardwidget from './Cardwidget';
import Addwidgetbutton from './Addwidgetbutton';
import DonutChart from './Donutchart';

const Sectionone = ({ searchTerm }) => {
  const [widgets, setWidgets] = useState([
    {
      title: 'Cloud Accounts',
      data: [
        { name: 'connected', value: 1689 },
        { name: 'not connected', value: 681 },
      ],
    },
    {
      title: 'Cloud Account Risk Management',
      data: [
        { name: 'Failed', value: 1699 },
        { name: 'Warning', value: 681 },
        { name: 'Not available', value: 36 },
        { name: 'Passed', value: 7253 },
      ],
    },
  ]);

  const filteredWidgets = widgets.filter(widget => 
    widget.title.toLowerCase().includes(searchTerm) ||
    widget.data.some(item => item.name.toLowerCase().includes(searchTerm))
  );

  const handleAddWidget = (newWidget) => {
    setWidgets((prev) => [...prev, newWidget]);
  };

  const handleRemoveWidget = (indexToRemove) => {
    setWidgets((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="layout-sectionone">
      <div className="layout-sectionone-title">
        <h3>CSPM Executive Dashboard</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
        {filteredWidgets.map((widget, index) => (
          <Cardwidget
            key={index}
            title={widget.title}
            component={<DonutChart data={widget.data} style={{ marginLeft: '35px' }} />}
            onRemove={() => handleRemoveWidget(index)}
          />
        ))}
        <Cardwidget
          component={<Addwidgetbutton onAddWidget={handleAddWidget} />}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60%',
          }}
        />
      </div>
    </div>
  );
};

export default Sectionone;