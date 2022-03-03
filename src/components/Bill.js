import { useState } from 'react';
import dollar from '../images/icon-dollar.svg';

const Bill = ({ bill, setBill }) => {

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

      <div className='bill-input-group'>
        <img src={dollar} alt="dollars" />
        <label for="bill">Bill</label>
        <input 
          id="bill"
          className="bill-input" 
          type="number" 
          onChange={e => handleBillChange(e)}
          value={bill}
        />
        
      </div>
    </section>
    </>
    
  )
}

export default Bill