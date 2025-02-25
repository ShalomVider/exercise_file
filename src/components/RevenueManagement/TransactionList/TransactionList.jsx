import React, { useState } from "react";

function TransactionList({ transactions, filterDate, setFilterDate }) {
  // State עבור חיפוש עסקאות
  const [searchQuery, setSearchQuery] = useState("");

  // סינון העסקאות לפי תאריך וחיפוש
  const filteredTransactions = transactions.filter(transaction => 
    (filterDate === "" || transaction.transactionDate === filterDate) &&
    (searchQuery === "" || transaction.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // מיון העסקאות לפי תאריך (מהחדש לישן)
  const sortedTransactions = [...filteredTransactions].sort(
    (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
  );

  const today = new Date().toISOString().split('T')[0]; // תאריך היום בפורמט YYYY-MM-DD

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4 text-primary">📜 רשימת העסקאות</h3>

      {/* שדה סינון לפי תאריך */}
      <div className="mb-3 d-flex justify-content-center">
        <div className="input-group w-50">
          <span className="input-group-text bg-primary text-white">📅 סינון לפי תאריך</span>
          <input 
            type="date" 
            className="form-control"
            value={filterDate} 
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <button className="btn btn-danger" onClick={() => setFilterDate("")}>❌ נקה</button>
        </div>
      </div>

      {/* שדה חיפוש לפי תיאור העסקה */}
      <div className="mb-3 d-flex justify-content-center">
        <div className="input-group w-50">
          <span className="input-group-text bg-secondary text-white">🔍 חפש עסקה</span>
          <input 
            type="text" 
            className="form-control"
            placeholder="הקלד שם עסקה..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-warning" onClick={() => setSearchQuery("")}>🔄 נקה</button>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="list-group">
            {/* ✅ בדיקה אם יש עסקאות לאחר סינון */}
            {sortedTransactions.length > 0 ? (
              sortedTransactions.map((transaction, index) => (
                <div 
                  key={index} 
                  className="list-group-item list-group-item-action shadow-lg p-3 rounded-4 mb-3 d-flex justify-content-between align-items-center"
                  style={{ background: "#f8f9fa" }}
                >
                  {/* פרטי העסקה */}
                  <div>
                    <h5 className="mb-1 fw-bold">📝 {transaction.description}</h5>
                    <p className="mb-1 text-muted">📅 {transaction.transactionDate}</p>
                    {transaction.transactionDate > today && (
                      <p className="text-muted small">🚀 עסקה עתידית</p>
                    )}
                  </div>

                  {/* סכום העסקה עם צבע דינמי */}
                  <span className={`fw-bold fs-5 ${transaction.transactionType === "income" ? "text-success" : "text-danger"}`}>
                    {transaction.transactionType === "income" ? "+₪" : "-₪"} {transaction.amount}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">🚫 אין עסקאות תואמות...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionList;
