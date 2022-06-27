import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './states'

export default function App() {

  const amount=useSelector(state=>state.amount)
  const data = useSelector(state=>state.data)
  const dispatch = useDispatch()
  const {depositMoney,getData} = bindActionCreators(actionCreators,dispatch)

  return (
    <div>
      <h3>
        value:{amount}
        </h3>
      <button className='btn btn-primary' onClick={()=>{
        depositMoney(100)
      }}>+</button>

      <button className='btn btn-secondary' onClick={()=>{
        getData('https://fakestoreapi.com/products/1')
        console.log(data)}}>get data</button>
    </div>
  )
}

