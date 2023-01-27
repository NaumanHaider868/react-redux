
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from './actions/index'
function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement</h1>
        <h4>lorem data is usefull for us</h4>

        <div className='quantity'>
          <a className='quantity__minus' title='Decrement' onClick={()=>{dispatch(decNumber())}}><span>-</span></a>
          <input name='quantity' type='text' className='quantity__input' value={myState} />
          <a className='quantity__plus' title='Increment' onClick={()=>{dispatch(incNumber())}}><span>+</span></a>
        </div>
      </div>
    </>
  );
}

export default App;
