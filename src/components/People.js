import { useState } from 'react'

const People = ({ people, setPeople }) => {

  const [peopleError, setPeopleError] = useState(false)

  const handlePeopleChange = (e) => {
    e.target.value == 0 ?
      setPeopleError(true) :
      setPeopleError(false)
      setPeople(e.target.value)
  }

  const noPeopleError = (
    <section className="people-section">

      <div className="people-input-title">
        <h2 className="section-header">Number of People</h2>
        <span className="people-error-text">Can't be zero</span>
      </div>

      <label>
        <img src="./images/icon-person.svg" />
        <input 
          className="people-input" 
          type="text" 
          onChange={e => handlePeopleChange(e)}
        />
      </label>

    </section>
  );

  const yesPeopleError = (
    <section className="people-section-error">

      <div className="people-input-title">
        <h2 className="section-header">Number of People</h2>
        <span className="people-error-text">Can't be zero</span>
      </div>

      <label>
        <img src="./images/icon-person.svg" />
        <input 
          className="people-input" 
          type="text" 
          value={people}
          onChange={e => handlePeopleChange(e)}
        />
      </label>

    </section>
  )

  return (
    <>
      {peopleError ? yesPeopleError : noPeopleError}
    </>
  )
}

export default People