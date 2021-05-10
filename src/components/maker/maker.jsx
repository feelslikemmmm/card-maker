import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'feelslike',
      company: 'kakao',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'feelslikemmmm@gmail.com',
      message: 'go for it',
      fileName: 'feelslike',
      fileURL: null,
    },
    '2': {
      id: '2',
      name: 'feelslike2',
      company: 'kakao',
      theme: 'light',
      title: 'Software Engineer',
      email: 'feelslikemmmm@gmail.com',
      message: 'go for it',
      fileName: 'feelslike',
      fileURL: null,
    },
    '3': {
      id: '3',
      name: 'feelslike3',
      company: 'kakao',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'feelslikemmmm@gmail.com',
      message: 'go for it',
      fileName: 'feelslike',
      fileURL: null,
    }
  });


  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });


  const createOrUpdateCard = (card) => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  }

  const deleteCard = (card) => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker;