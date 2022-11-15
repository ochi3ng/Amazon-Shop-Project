import { useEffect } from 'react';
import './Body.css';
import { useDispatch,useSelector} from 'react-redux';
import  {getPosts} from './CounterSlice';

import Products from './Product';
import SideBar from './SideBar';
import Bar from './Bar';

function Body (){
    const {posts,loading}=useSelector((state)=>state.counter)

    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getPosts());
    //   console.log(Products)
    }, [])
    return (
      <div className='body-header'>
       <div>
       <SideBar/>
        <Bar/>
       </div>
       <div className='body-containerp'>
       {posts.map((item)=><Products title={item.title} image={item.image} price={item.price}/>)}
       </div>
      </div>
      );
}

export default Body;