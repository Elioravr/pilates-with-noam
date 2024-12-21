'use client';

import ClassesList from './ClassesList';
import Navbar from './navbar';
import NewClassModal from './NewClassModal';
import NewPunchCardModal from './NewPunchCardModal';
import PunchCardsList from './PunchCardList';

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <div className='flex justify-center p-2 flex-col items-center'>
        <button
          className='btn btn-wide mt-3'
          onClick={() =>
            (
              document.getElementById('new_class_modal') as HTMLDialogElement
            )?.showModal()
          }
        >
          הוסף שיעור בודד
        </button>
        <button
          className='btn btn-wide btn-secondary mt-3'
          onClick={() =>
            (
              document.getElementById(
                'new_punch_card_modal'
              ) as HTMLDialogElement
            )?.showModal()
          }
        >
          הוסף כרטיסיה
        </button>
      </div>
      <NewClassModal />
      <NewPunchCardModal />

      <ClassesList />
      <PunchCardsList />
    </div>
  );
}
