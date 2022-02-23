import { useState } from 'react';

const Bill = ({ setBill }) => {

  const [billError, setBillError] = useState(false)

  const handleBillChange = (e) => {
    e.target.value == 0 ? setBillError(true) : setBillError(false)
    setBill(e.target.value)
  }

  return (
    <>
    <section className={billError ? "bill-section-error" : "bill-section" }>
      <div className="bill-input-title">
        <h2 className="section-header">Bill</h2>
        <span className="bill-error-text">Can't be zero</span>
      </div>

      <label>
        <img src="./images/icon-dollar.svg" />
        <input 
          className="bill-input" 
          type="text" 
          onChange={e => handleBillChange(e)}
        />
      </label>
    </section>
    </>
    
  )
}

export default Bill