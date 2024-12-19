function NewClassModal() {
  return (
    <dialog id='new_class_modal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>שיעור חדש</h3>
        <div className='flex flex-col py-3'>
          <input
            type='text'
            placeholder='שם המתאמנ/ת'
            className='input input-bordered w-full max-w-xs'
          />
          <input
            type='date'
            placeholder='תאריך ושעה'
            className='input input-bordered w-full max-w-xs mt-2'
          />
        </div>
        <div className='modal-action'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn'>סגור</button>
            <button className='btn btn-primary ms-2'>שמור</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default NewClassModal;