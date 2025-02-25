import './App.css';
import React, { useState, useEffect } from 'react';
import Child from '../ChildHierarchies/Child/Child';
import Header from '../RevenueManagement/Header/Header';
import TransactionForm from '../RevenueManagement/TransactionForms/TransactionForm';
import TransactionList from '../RevenueManagement/TransactionList/TransactionList';

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [filterDate, setFilterDate] = useState(""); // שמירת התאריך הנבחר לסינון

  useEffect(() => {
    setBalance(income - expense);
  }, [income, expense]);

  return (
    <div>
      <header>
        {/* <p>count: {count}</p>
        <button type="button" className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
        <Child count={count} setCount={setCount} /> */}
        <Header income={income} expense={expense} balance={balance} />
        <TransactionForm income={income} setIncome={setIncome} expense={expense} setExpense={setExpense}  transactions={transactions} setTransactions={setTransactions}  />
        <TransactionList transactions={transactions} filterDate={filterDate} setFilterDate={setFilterDate} />

      </header>
    </div>
  );
}

export default App;
