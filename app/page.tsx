'use client';

import Navbar from './navbar';
import NewClassModal from './NewClassModal';
import NewPunchCardModal from './NewPunchCardModal';

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <div className='flex justify-center p-2 flex-col items-center'>
        <button
          className='btn btn-wide mt-3'
          onClick={() =>
            document.getElementById('new_class_modal')?.showModal()
          }
        >
          שיעור בודד
        </button>
        <button
          className='btn btn-wide btn-primary mt-3'
          onClick={() =>
            document.getElementById('new_punch_card_modal')?.showModal()
          }
        >
          כרטיסיה
        </button>
      </div>
      <NewClassModal />
      <NewPunchCardModal />
    </div>
  );
}
