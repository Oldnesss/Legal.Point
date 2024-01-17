import React, { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import FirmCard from './FirmCard';

function FirmList(): JSX.Element {
  const firms = useAppSelector((store) => store.firmSlice.firms);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '15px',
        marginTop: '100px',
      }}
    >
      {firms.map((firm) => (
        <FirmCard key={firm.id} firm={firm} />
      ))}
    </div>
  );
}

export default FirmList;
