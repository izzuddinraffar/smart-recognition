import React from 'react';

const InputForm = (props) =>{
    return (
        <div>
      <p className='f3'>
        {'Face Recognition App.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input onChange={props.change} placeholder="insert url image" className='f4 pa2 w-70 center' type='text'/>
          <button onClick={props.click}
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
          >Detect</button>
        </div>
      </div>
    </div>

    );
}

export default InputForm;