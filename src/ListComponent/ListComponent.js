import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ListComponent.module.css';
import CardComponent from './CardComponent/CardComponent';
import { addCard, removeList, removeCard } from './ListSlice';

const ListComponent = ({ listTitle, id }) => {
  const [title, changeTitle] = useState('');
  const [textForCard, changeTextForCard] = useState('');
  const dispatch = useDispatch();
  const rand = Math.random().toString(19).slice(3);
  const deleteList = () => {
    dispatch(removeList({ id }));
  };
  const add = () => {
    const cardDetails = {
      title,
      textForCard,
      cardId: rand,
    };
    changeTitle('');
    changeTextForCard('');
    dispatch(addCard({ id, cardDetails }));
  };
  const remove = (cardId) => {
    dispatch(removeCard({ cardId, listId: id }));
  };
  const lists = useSelector((state) => state?.lists?.lists);
  console.log(lists);
  return (
    <div className={styles.listContainer}>
      <div className={styles.innerListContainer}>
        <div className={styles.list__Header}>
          <div>{listTitle}</div>
          <div onClick={deleteList}>close</div>
        </div>
        <div>
          {lists[id].cards.map((card) => (
            <CardComponent
              title={card?.title}
              textForCard={card?.textForCard}
              id={card?.cardId}
              key={card?.cardId}
              remove={remove}
            />
          ))}
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputBox}
            placeholder={'Enter Title'}
            onChange={(e) => {
              changeTitle(e.target.value);
            }}
            value={title}
          />
          <input
            className={styles.inputBox}
            placeholder={'Enter the text'}
            onChange={(e) => {
              changeTextForCard(e.target.value);
            }}
            value={textForCard}
          />
        </div>
        <button onClick={() => add()} className={styles.addButton}>
          Add Card
        </button>
      </div>
    </div>
  );
};

export default ListComponent;
