import React from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { dateSelector } from '../../selectors/forecast';
import { setDate } from '../../stores/forecast';
import { getFiveDaysFromNow } from '../../utils/date';
import './DatePicker.css';

export default function DatePickerInput() {
  const dispatch = useDispatch();
  const selectedDate = useSelector(dateSelector);

  const handleUpdate = (date) => {
    dispatch(setDate(date));
  };

  return (
    <div className="px-8 py-4">
      <DatePicker
        value={selectedDate}
        onChange={handleUpdate}
        maxDate={getFiveDaysFromNow()}
        minDate={new Date()}
      />
    </div>
  );
}
