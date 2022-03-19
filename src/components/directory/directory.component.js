import React,{useState,useEffect} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { useDispatch } from 'react-redux';
import {getAllCategories} from "../../redux/directory/directory.action";
//import Spinner from "../../assets/spinner.gif";
import EXTRA_INFO_MAP from './map.data';
import "./directory.styles.scss";


export default function Directory() {
  const [sections, setSections] = useState(null);
  let dispatch = useDispatch();
  useEffect(()=>{
    let categories,sizelarge=[];
    dispatch(getAllCategories()).then(res=>{
      categories = res.data.map(data=>{
        return(
        {...data,...EXTRA_INFO_MAP[data.name]})
      })
      sizelarge = categories.filter(cat=>cat.size == "large")
      categories = categories.filter(cat=>cat.size != "large");
      categories = categories.concat(sizelarge);
      setSections(categories);
    })
   
  },[])

  return (
    <div className="directory-menu">
      {
        sections?sections.map(({id,...otherSectionProps})=>{
          console.log("id===",id)
            return <MenuItem key={id} {...otherSectionProps} cat_id={id}/>
        }):"Loading.."
      }
    </div>
  )
}
