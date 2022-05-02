import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from './../ListComponent/ListSlice';

const CreateListComponent = () => {
  const [title, changeTitle] = useState('');
  const dispatch = useDispatch();
  const rand = Math.random().toString(16).slice(3);
  return (
    <div>
      <input
        placeholder={'Enter the title'}
        value={title}
        onChange={(e) => changeTitle(e?.target?.value)}
      />
      <button
        onClick={() => {
          changeTitle('');
          dispatch(addList({ id: rand, name: title }));
        }}
      >
        Add List
      </button>
    </div>
  );
};
export default CreateListComponent;
