import { useState, useEffect } from 'react' 

const Result = ({ 
  bill, setBill, 
  tip, setTip, 
  people, setPeople 
}) => {

  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (bill && people) {
      setTipAmount(() => {
        let res = Number(bill) * Number(tip) / Number(people)
        return res.toFixed(2)
      })
    }
  }, [bill, tip, people])

  useEffect(() => {
    if (tipAmount) {
      setTotal(() => {
          let res = (Number(bill) / Number(people)) + Number(tipAmount)
          return res.toFixed(2)
      })
    }
  }, [tipAmount])

  const handleReset = () => {
    setBill(null)
    setTip(null)
    setPeople(null)
    setTipAmount(0)
    setTotal(0)
  }
  
  return (
    <section className="result">

      <div className="res-div">
        
        <div className="res-text">
          <h2>Tip Amount<span>/ person</span></h2>
          <p>${tipAmount}</p>
        </div>

        <div className="res-text">
          <h2>Total<span>/ person</span></h2>
          <p>${total}</p>
        </div>
        
      </div>

      <button 
        className="reset"
        onClick={handleReset}
      >RESET</button>

    </section>
  )
}

export default Result