import React, { Component } from 'react';


const ExternalForm = (props) => {
  const propState = props.state;

  return (<form>
    <h2>This is External Form</h2>
    {
             props.columns.map((item, idx) => (
               <div key={idx} >
                 {item.property}             {
       item.property === 'color' ? (<div><input
         onChange={props.handleAllChange}
         name="color"
         type="radio"
         value="Red"
       />
         <label >Red</label>
         <input
           onChange={props.handleAllChange}
           name="color"
           type="radio"
           value="Blue"
         />
         <label >Blue</label> </div>
                )
          : (item.property === 'gender' ? (<select
            name="gender"
            value={propState[item.property]}
            onChange={props.handleAllChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>) : (<input
            type="text"
            name={item.property}
            value={propState[item.property]}
            onChange={props.handleAllChange}
          />)) }
                 <br/>
               </div>
  ))}
    <button
      onClick={props.closeForm}
    >Cancel </button>
    <button
      type="submit"
      onClick={props.submitData}
    >Submit</button>
  </form>);
};

export default ExternalForm;
