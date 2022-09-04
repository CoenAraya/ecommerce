import {RingLoader } from 'react-spinners';
import './spinner.scss'


export const Loading = () => {
    return (
        <div className='spinner'>
            <RingLoader  color="#8a7415" className='itemSpinner'/>
            
        </div>
    )
}