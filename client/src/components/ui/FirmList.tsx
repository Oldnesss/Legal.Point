import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import FirmCard from './FirmCard';
import { thunkGetFirm } from '../../redux/slices/posts/postThunk';
import Carousel from './Carousel1';

function FirmList(): JSX.Element {
  const dispatch = useAppDispatch();
  const firms = useAppSelector((store) => store.firmSlice.firms);
  useEffect(() => {
    void dispatch(thunkGetFirm());
  }, []);
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
