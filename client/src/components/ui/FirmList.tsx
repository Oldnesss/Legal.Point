import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import FirmCard from './FirmCard';
import FirmModal from './FirmModal'; // Импортируйте компонент FirmModal
import type { FirmType } from '../../types/firms';

function FirmList(): JSX.Element {
  const firms = useAppSelector((store) => store.firmSlice.firms);
  const [selectedFirm, setSelectedFirm] = useState<FirmType | null>(null);

  const handleOpen = (firm: FirmType): void => {
    setSelectedFirm(firm);
  };

  const handleClose = (): void => {
    setSelectedFirm(null);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '10px',
          marginTop: '50px',
        }}
      >
        {firms.map((firm) => (
          <FirmCard key={firm.id} firm={firm} onOpen={handleOpen} />
        ))}
      </div>
      <FirmModal
        firm={selectedFirm}
        isOpen={!!selectedFirm}
        onClose={handleClose}
      />
    </>
  );
}

export default FirmList;
