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
    setTip(Number(e.target.value/100))
  }

  return (
    <section className="tip-section">
      
      <h2 className="section-header tip-h2">Select Tip %</h2>

      <div className="tip-buttons">
        <button className="tip-btn" value="0.05" onClick={e => handleTipChange(e)}>5%</button>
        <button className="tip-btn" value="0.10" onClick={e => handleTipChange(e)}>10%</button>
        <button className="tip-btn" value="0.15" onClick={e => handleTipChange(e)}>15%</button>
        <button className="tip-btn" value="0.25" onClick={e => handleTipChange(e)}>25%</button>
        <button className="tip-btn" value="0.50" onClick={e => handleTipChange(e)}>50%</button>
        {!isCustom ? 
          (<button className="tip-custom" value="" onClick={handleClickCustom}>Custom</button>) :
          (<input type="text" className="tip-custom-input" onChange={e => handleCustomTip(e)} autoFocus/>)
        }
      </div>

    </section>
  )
}

export default Tip