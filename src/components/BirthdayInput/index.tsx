import React, { useEffect, useRef, useState } from 'react';

interface BirthdayInputProps {
    onBirthdateChange: (birthdate: string) => void;
  }

const BirthdayInput:React.FC<BirthdayInputProps> = ({onBirthdateChange}) => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const monthInput = useRef<HTMLInputElement>(null);
    const dayInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (year.length === 4 && monthInput.current !== null){
            monthInput.current.focus();
        }
    },[year]);

    useEffect(() => {
        if (month.length === 2 && dayInput.current !== null){
            dayInput.current.focus();
        }
    },[month]);

    useEffect(() => {
        if (day.length === 2) {
          onBirthdateChange(`${year}-${month}-${day}`);
        }
      }, [day, month, year, onBirthdateChange]);

  return (
    <div>
        <input 
            type='text'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            maxLength={4}
        />
        <input 
            ref={monthInput}
            type='text'
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            maxLength={2}
        />
        <input 
            ref={dayInput}
            type='text'
            value={day}
            onChange={(e) => setDay(e.target.value)}
            maxLength={2}
        />
    </div>
  );
};

export default BirthdayInput;