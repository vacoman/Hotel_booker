import React from 'react';

function Form(props) {
  const { nombre } = props;

  return (
    <div>
      <form className='form'>
        <input 
          type='text' 
          id='username' 
          maxLength='30' 
          className='inputForm' 
          name='username' 
          placeholder={nombre} 
          required 
        />
      </form>
    </div>
  );
}

export default Form;
