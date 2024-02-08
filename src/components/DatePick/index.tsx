import { DateRange } from 'react-date-range';
import { useTheme } from 'styled-components';

type DateRangeType = {
  startDate: Date;
  endDate: Date;
  key: string;
};

interface DatePickProps {
  dateRange: DateRangeType[];
  handleRangeChange: (ranges: any) => void;
}

function DatePick({ dateRange, handleRangeChange }: DatePickProps) {
  const theme = useTheme();

  return (
    <DateRange
      editableDateInputs={true}
      onChange={handleRangeChange}
      moveRangeOnFirstSelection={false}
      ranges={dateRange}
      rangeColors={[theme.colors.primary]}
      months={1}
      direction='horizontal'
      showDateDisplay={false}
    />
  );
}

export default DatePick;
