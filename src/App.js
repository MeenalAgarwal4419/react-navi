import React from 'react';
import { useSelector } from 'react-redux';
import ListComponent from './ListComponent/ListComponent';
import CreateListComponent from './CreateListComponent/CreateListComponent';
import HeaderComponent from './HeaderComponent/Header';
import './style.css';

export default function App() {
  const lists = useSelector((state) => state?.lists?.lists);
  console.log(lists);
  const keys = Object.keys(lists);
  return (
    <div>
      <HeaderComponent />
      {keys.map((key) => (
        <ListComponent
          key={key}
          id={lists[key].id}
          listTitle={lists[key].heading}
        />
      ))}
      <CreateListComponent />
    </div>
  );
}
