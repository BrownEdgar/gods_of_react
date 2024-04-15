
import { useLocation } from 'react-router-dom'
import moment from 'moment';
import './SpecialNews.scss'

export default function SpecialNews() {
    const {state} = useLocation()
  return (
    <div className='SpecialNews'>
        <div>
            <img src={state.poster}/>
            <h2>{state.title}</h2>
            <p>{moment(state.date).format('Do MMM')}</p>
        </div>
    </div>
  )
}
