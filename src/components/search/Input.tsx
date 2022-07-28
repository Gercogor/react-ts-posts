import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/postsReducer';
import { AppDispatch } from '../../typesAndInterfaces';
import styles from './Input.module.css'

export default function Input() {

  const dispatch: AppDispatch = useDispatch();

  const [text, setText] = useState('');

  useEffect(()=>{
    dispatch(setSearch(text.toLowerCase()))
  }, [dispatch, text])

  return (
    <div className={styles.searchInputWrapper}>
        <input 
        className={styles.searchInput} 
        type="text"
        placeholder='Поиск'
        value={text}
        onChange={(e)=>setText(e.target.value)}/>
    </div>
  )

}