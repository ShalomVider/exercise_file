import React, { useState } from 'react';

function TransactionForm({ setTransactions, transactions, setIncome, income, setExpense, expense }) {
    // ניהול כל הנתונים עם useState
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [transactionType, setTransactionType] = useState("income");
    const [transactionDate, setTransactionDate] = useState(new Date().toISOString().split('T')[0]); // ברירת מחדל להיום

    function AddDeal(e) {
        e.preventDefault(); // מונע רענון הדף

        const numericAmount = Number(amount); // המרה למספר

        if (numericAmount <= 0) {
            alert("סכום העסקה חייב להיות מספר חיובי!"); // הוספת אימות
            return;
        }

        // יצירת אובייקט חדש עבור העסקה
        const newTransaction = {
            amount: numericAmount,
            description,
            transactionType,
            transactionDate
        };

        // הוספת העסקה לרשימה (נשלחת ל-App.js)
        setTransactions([...transactions, newTransaction]);

        if (transactionType === "income") {
            setIncome(income + numericAmount);
        } else {
            setExpense(expense + numericAmount);
        }

        // איפוס השדות אחרי ההוספה
        setAmount("");
        setDescription("");
        setTransactionType("income");
        setTransactionDate(new Date().toISOString().split('T')[0]); // איפוס התאריך להיום
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4 rounded-4" style={{ width: "40%", background: "#f8f9fa" }}>
                <h3 className="text-center mb-4 text-primary">➕ הוספת עסקה חדשה</h3>

                <form onSubmit={AddDeal}>
                    {/* סכום העסקה */}
                    <div className="text-center mb-3">
                        <label htmlFor="amount" className="form-label fw-bold text-success">💰 סכום העסקה</label>
                        <input
                            type="number"
                            className="form-control w-75 mx-auto"
                            id="amount"
                            placeholder="₪0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>

                    {/* תיאור העסקה */}
                    <div className="text-center mb-3">
                        <label htmlFor="description" className="form-label fw-bold text-secondary">📝 תיאור העסקה</label>
                        <input
                            type="text"
                            className="form-control w-75 mx-auto"
                            id="description"
                            placeholder="לדוגמה: משכורת / קניות בסופר"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    {/* סוג העסקה */}
                    <div className="text-center mb-3">
                        <label className="form-label fw-bold text-warning">🔄 סוג העסקה</label>
                        <select
                            className="form-select w-75 mx-auto"
                            id="transactionType"
                            value={transactionType}
                            onChange={(e) => setTransactionType(e.target.value)}
                        >
                            <option value="income">💰 הכנסה</option>
                            <option value="expense">💸 הוצאה</option>
                        </select>
                    </div>

                    {/* תאריך העסקה */}
                    <div className="text-center mb-3">
                        <label htmlFor="transactionDate" className="form-label fw-bold text-info">📅 תאריך העסקה</label>
                        <input
                            type="date"
                            className="form-control w-75 mx-auto"
                            id="transactionDate"
                            value={transactionDate}
                            onChange={(e) => setTransactionDate(e.target.value)}
                        />
                    </div>

                    {/* כפתור הוספה */}
                    <div className="text-center">
                        <button className="btn btn-success w-50 fw-bold rounded-pill shadow">
                            ➕ הוסף עסקה
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TransactionForm;
