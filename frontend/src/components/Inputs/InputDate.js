import React, { useState, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';

const InputDate = ({ label, handleDateChange }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    handleDateChange(date);
  }, [date, handleDateChange]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        ampm={false}
        label={label}
        onChange={setDate}
        disablePast
        format="dd/MM/yyyy HH:mm"
        value={date}
      />
    </MuiPickersUtilsProvider>
  );
};

export default InputDate;
