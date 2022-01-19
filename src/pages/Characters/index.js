/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.css';
import { getCharacters } from '../../services/characters/operations';
import { selectorInfo } from '../../services/characters/selectors';
import { selectorIsLoading } from '../../services/overlay/selectors';
import { Loader } from '../../components/Loader';
import { CardCharacter, Filters } from './components';
import { url } from '../../services/baseUrl';
import { selectorVisibleCharacters } from '../../services/filters/selectors';
import Modal from 'react-modal';
import { ContentModal } from './components/ContentModal';

export const Characters = () => {
  const dispatch = useDispatch();
  const charactersUrl = url.getCharacters;

  useEffect(() => {
    dispatch(getCharacters(charactersUrl));
  }, [dispatch]);

  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const listCharacters = useSelector(selectorVisibleCharacters);
  const isLoading = useSelector(selectorIsLoading);
  const info = useSelector(selectorInfo);

  const handleModal = () => setIsModal(!isModal);
  const handleModalData = (item) => () => {
    setModalData(item);
    console.log(modalData);
    handleModal();
  };

  const handlePrev = () => {
    dispatch(getCharacters(info.prev));
  };
  const handleNext = () => {
    dispatch(getCharacters(info.next));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className={styles.title}>List of characters</h2>
          <div className={styles.container}>
            {isLoading && <Loader />}
            <Filters />
            <div className={styles.list}>
              {!!listCharacters &&
                listCharacters.map((item) => (
                  <CardCharacter className={styles.card} key={item.id} item={item} handleModalData={handleModalData} />
                ))}
            </div>
          </div>
          <div className={styles.box}>
            {!!info && (
              <button hidden={!info.prev} className={styles.button} onClick={handlePrev}>
                Prev
              </button>
            )}
            {!!info && (
              <button hidden={!info.next} className={styles.button} onClick={handleNext}>
                Next
              </button>
            )}
          </div>
          {isModal && (
            <Modal
              ariaHideApp={false}
              isOpen={isModal}
              onRequestClose={handleModal}
              className={styles.mymodal}
              overlayClassName={styles.myoverlay}
            >
              <ContentModal item={modalData} handleClose={handleModal} />
            </Modal>
          )}
        </>
      )}
    </>
  );
};
