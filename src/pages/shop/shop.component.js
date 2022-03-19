import React,{useState,useEffect} from 'react';
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import { useDispatch } from 'react-redux';
import {getProductOfCategory} from "../../redux/products/products.action";

let idToTitleMap = {"breads":"Pizza And Breads",
"drycakes":"Dry Cake",
"snacks":"Savoury items(snacks)",
"cakes":"Celebration cakes",
"cookies": "Cookies"
}

export default function ShopPage(props) {
  const { id } = props.match.params;
  const [collections, setCollections] = useState(null);
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductOfCategory(idToTitleMap[id]))
    .then(res=>setCollections(res.data))
    .catch(err=>console.log("error in getting products!"))
  },[])
  return (
    <div>
      {
      collections?
          <CollectionPreview title={id} items={collections}/>
          :"Loading..."  
      }
    </div>
  )
}
