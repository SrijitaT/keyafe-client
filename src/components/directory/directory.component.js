import React,{useState} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {getAllCategories} from "../../redux/directory/directory.action";
import EXTRA_INFO_MAP from './map.data';
import "./directory.styles.scss";
import useApiCall from '../../hooks/useApiCall';
//import Spinner from "../../assets/spinner.gif";


export default function Directory() {
  const [sections, setSections] = useState(null);
  let cb = (data) =>{
    if(Array.isArray(data)){
    let categories = data.map(data=>{
      return(
      {...data,...EXTRA_INFO_MAP[data.name]})
    })
    categories = categories.filter(cat=>cat.size != "large")
                .concat(categories.filter(cat=>cat.size == "large"));
    setSections(categories);
   }
  }
  useApiCall(getAllCategories,cb) //custom hook
  return (
    <div className="directory-menu">
      {
        sections ? sections.map(({id,...otherSectionProps})=>{
            return <MenuItem key={id} {...otherSectionProps} cat_id={id}/>
        }) : "Loading.."
      }
    </div>
  )
}
