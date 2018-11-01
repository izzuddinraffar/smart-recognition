import React from 'react';
import './FaceRecognition.css'


const FaceRecognition = (props) => {
    const items = props.box;
    
    return (
        <div className='center ma' style={{display:'flex', justifyContent:'center'}}>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={props.imageURL} width='500px' heigh='auto' />
                {
                     items.map((box, i) => {
                        return (
                          <div key={i} style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} className='bounding-box'></div>
                        );
                     })
                }
            </div>
        </div>
    );
}

export default FaceRecognition;