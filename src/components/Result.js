const Result = ({ bill, tip, people, setTipAmount, setTotal}) => {
  return (
    <section className="result">

      <div className="res-div">
        
        <div className="res-text">
          <h2>Tip Amount<span>/ person</span></h2>
          <p id="tip-amt"></p>
        </div>

        <div className="res-text">
          <h2>Total<span>/ person</span></h2>
        <p id="total-amt"></p>
        </div>
        
      </div>

      <button className="reset">RESET</button>

    </section>
  )
}

export default Result