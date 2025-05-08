import React, { useState } from 'react';
import Cardwidget from './Cardwidget';
import Addwidgetbutton from './Addwidgetbutton';
import Nographavailable from './Nographavailable';

const Sectiontwo = ({ searchTerm }) => {
  const design = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%' };

  const [widgets, setWidgets] = useState([
    { title: 'Top 5 Namespace Specific Alerts', component: <Nographavailable /> },
    { title: 'Workload Alerts', component: <Nographavailable /> },
  ]);

  const filteredWidgets = widgets.filter(widget => 
    widget.title.toLowerCase().includes(searchTerm)
  );

  const addNewWidget = (newWidget) => {
    setWidgets(prev => [
      ...prev,
      {
        title: newWidget.title,
        component: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center', alignItems: 'center' }}>
            <h5>{newWidget.title}</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {newWidget.data.map((item, index) => (
                <li key={index}>{item.name}: {item.value}</li>
              ))}
            </ul>
          </div>
        )
      }
    ]);
  };

  const handleRemoveWidget = (indexToRemove) => {
    setWidgets((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="layout-sectionone">
      <div className="layout-sectionone-title">
        <h3>CWPP Dashboard</h3>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredWidgets.map((widget, index) => (
          <Cardwidget
            key={index}
            title={widget.title}
            component={widget.component}
            style={design}
            onRemove={() => handleRemoveWidget(index)}
          />
        ))}
        <Cardwidget component={<Addwidgetbutton onAddWidget={addNewWidget} />} style={design} />
      </div>
    </div>
  );
};

export default Sectiontwo;