import { useState } from 'react';
import person from '../images/icon-person.svg';

const People = ({ people, setPeople }) => {

  const [peopleError, setPeopleError] = useState(false)

  const handlePeopleChange = (e) => {
    e.target.value == 0 ? setPeopleError(true) : setPeopleError(false)
    setPeople(e.target.value)
  }

  return (
    <>
     <section className={peopleError ? "people-section-error" : "people-section"}>

      <div className="people-input-title">
        <h2 className="section-header">Number of People</h2>
        <span className="people-error-text">Can't be zero</span>
      </div>

      <div className='people-input-group'>
        <img src={person} alt="person" />
        <label for="people">People</label>
        <input 
          id="people"
          className="people-input" 
          type="number" 
          onChange={e => handlePeopleChange(e)}
          value={people}
        />
      </div>

    </section>
    </>
  )
}

export default People