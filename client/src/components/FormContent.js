function FormContent({ setState }) {
  const toAnswer = () => setState(3);

  return (
    <div className='boxContent'>
      <p>To find the perfect new career for you, we would need you to provide us with some information about yourself.</p> 
      <p>Please fill in the following form as thoroughly as possible, as it is vital that all factors are considered when calculating your perfect profession.</p>
      <form>
        <label htmlFor="fname">First name:</label>
        <input type="text" name="fname" />
        <label htmlFor="lname">Last name:</label>
        <input type="text" name="lname" />
        <br />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" />
        <br />
        <label htmlFor="education">Education:</label>
        <select name="education">
          <option value="highschool">High School or equivalent</option>
          <option value="bachelor">Bachelor's degree</option>
          <option value="master">Master's degree</option>
          <option value="doctorate">Doctorate</option>
          <option value="life">Life</option>
        </select>
        <br />
        <label htmlFor="zodiac">Zodiac sign:</label>
        <select name="zodiac">
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Saggitarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
        <label htmlFor="country">Country of residensy</label>
        <input type="text" name="country" />
        <button onClick={toAnswer} className="submit">Submit!</button>
      </form>
    </div>
  )
}

export default FormContent;