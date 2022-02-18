import { useState } from 'react';

const Tip = ({ setTip }) => {
  const [isCustom, setIsCustom] = useState(false)

  const handleTipChange = (e) => {
    setTip(e.target.value)
    setIsCustom(false)
  }

  const handleClickCustom = () => {
    setIsCustom(true)
  }

  const handleCustomTip = (e) => {
    setTip(e.target.value)
  }

  return (
    <section className="tip-section">
      
      <h2 className="section-header tip-h2">Select Tip %</h2>

      <div className="tip-buttons">
        <label>
          <input type="radio" name="tip" value="0.05" onChange={e => handleTipChange(e)} />
          <span className="tip-btn">5%</span>
        </label>

        <label>
          <input type="radio" name="tip" value="0.10" onChange={e => handleTipChange(e)} />
          <span className="tip-btn">10%</span>
        </label>

        <label>
          <input type="radio" name="tip" value="0.15" onChange={e => handleTipChange(e)} />
          <span className="tip-btn">15%</span>
        </label>

        <label>
          <input type="radio" name="tip" value="0.25" onChange={e => handleTipChange(e)} />
          <span className="tip-btn">25%</span>
        </label>

        <label>
          <input type="radio" name="tip"  value="0.50" onChange={e => handleTipChange(e)} />
          <span className="tip-btn">50%</span>
        </label>

        {!isCustom ? 
          (<button className="tip-custom" value="" onClick={handleClickCustom}>Custom</button>) :
          (<input type="text" className="tip-custom-input" onChange={e => handleCustomTip(e)} autoFocus/>)
        }
      </div>

      </section>
  )
}

export default Tip