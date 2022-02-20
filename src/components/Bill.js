import { useState } from 'react';

const Bill = ({ bill, setBill }) => {

  const [billError, setBillError] = useState(false)

  const handleBillChange = (e) => {
    e.target.value == 0 ? 
      setBillError(true) : 
      setBillError(false)
      setBill(e.target.value)
  }

  const noBillError = (
    <section className="bill-section">
      <div className="bill-input-title">
        <h2 className="section-header">Bill</h2>
        <span className="bill-error-text">Can't be zero</span>
      </div>

      <label>
        <img src={process.env.PUBLIC_URL+"images/icon-dollar.svg"} />
        <input 
          className="bill-input" 
          type="text" 
          onChange={e => handleBillChange(e)}
        />
      </label>
    </section>
  );

  const yesBillError = (
    <section className="bill-section-error">
      <div className="bill-input-title">
        <h2 className="section-header">Bill</h2>
        <span className="bill-error-text">Can't be zero</span>
      </div>

      <label>
        <img src={process.env.PUBLIC_URL+"images/icon-dollar.svg"} />
        <input 
          className="bill-input" 
          type="text" 
          value={bill}
          onChange={e => handleBillChange(e)}
        />
      </label>
    </section>
  );

  return (
    <>
      {billError ? yesBillError : noBillError}
    </>
    
  )
}

export default Bill