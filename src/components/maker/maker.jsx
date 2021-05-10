import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
      id: '3',
      name: 'feelslike3',
      company: 'kakao',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'feelslikemmmm@gmail.com',
      message: 'go for it',
      fileName: 'feelslike',
      fileURL: null,
    },
  ]);
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
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker;