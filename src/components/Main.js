import Bill from "./Bill"
import People from "./People"
import Result from "./Result"
import Tip from "./Tip"
import { useState } from 'react'

const Main = () => {
  const [bill, setBill] = useState(null)
  const [tip, setTip] = useState(null)
  const [people, setPeople] = useState(null)
  const [tipAmount, setTipAmount] = useState(null)
  const [total, setTotal] =useState(null)

  console.log(tip)

  return (
    <main className="main">
      <Bill setBill={setBill} />
      <Tip setTip={setTip} />
      <People setPeople={setPeople} />
      
      <Result 
        bill={bill}
        tip={tip}
        people={people}
        setTipAmount={setTipAmount} 
        setTotal={setTotal} 
      />
  </main>
  
  )
}

export default Main