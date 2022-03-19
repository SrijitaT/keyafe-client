import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function useApiCall(action,cb){
    let dispatch = useDispatch();
    useEffect(()=>{
      dispatch(action())
      .then(res=>cb(res.data))
    },[])
}

export default useApiCall;