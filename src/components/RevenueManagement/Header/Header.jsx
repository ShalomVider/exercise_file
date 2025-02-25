import React from 'react'

function Header({income, expense, balance}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
                <span className="navbar-brand">ניהול כספים</span>
                <div className="d-flex">
                    <h5 className="text-success me-3">הכנסות: {income}</h5>
                    <h5 className="text-danger me-3">הוצאות: {expense}</h5>
                    <h5 className="text-primary">יתרה: {balance}</h5>
                </div>
            </div>
        </nav>



    )
}

export default Header