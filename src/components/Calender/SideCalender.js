import React, { useState } from 'react';
// import Calendar from 'react-calendar';
import { Calendar } from 'react-big-calendar'
// import 'react-calendar/dist/Calendar.css';

const SideCalender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
    );
};

export default SideCalender;