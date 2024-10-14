import React, {useEffect} from 'react';
import { useExpensesValue } from '../../contexts/ExpensesContext';
import ExpenseItem from '../expense-item/ExpenseItem';
import styles from './ExpenseList.module.css';

export const ExpenseList = () => {
  const expenses = useExpensesValue();

  const sum = expenses.reduce((acc,v)=>acc+Number(v.amount),0);

  // // expenses 바뀌는 거 확인
  // useEffect(() => {
  //   console.log('expenses changed',expenses);
  // },[expenses]);

  return(
    <ul className={styles.listContainer}>
      <h2>지출 리스트</h2>
      <hr/>
      {expenses?.map(expense=>(
        <ExpenseItem 
          key={expense.id}
          expense={expense}
        />
      ))}
      <div className={styles.sum}>필요 금액: {sum}원</div> 
    </ul>
  );
}