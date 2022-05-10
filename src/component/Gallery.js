import React,{useState,useEffect} from 'react'
import Filters from './Filters'
import MyNFTs from './MyNFTs'
import { getMultipleFiles } from '../data/api'

export default function Gallery() {
const [filter,setFilter]=useState(null);
const [sort,setSort]=useState(null);

const [table,setTable]=useState([]);

//
const [type,SetType]=useState(null);
//



//filter//

function onsearch(event){

const NFTname = event.target.value
if(NFTname && NFTname!=""){

  setFilter({...filter,NFTname});
}
else{
  setFilter(null)
}



}



//ontype

function ontype(event){

  const Amount = event.target.value
  if(Amount && Amount!=""){
 SetType({...type,Amount})
  }
  else{
    SetType(null);
  }
}

//



//sort //
function onsort(sortOrder){

setSort({...sort,Amount:sortOrder});

}


//ontype


useEffect(() => {
  async function fetchData() {
    
    const data = await getMultipleFiles(type);
setTable(data);
    
  }
  fetchData();
}, [type]); 



//

useEffect(() => {
  async function fetchData() {
    
    const data = await getMultipleFiles(filter,sort);
setTable(data);
    
  }
  fetchData();
}, [filter,sort]); 


useEffect(() => {
  async function fetchData() {
    
    const data = await getMultipleFiles(filter,sort);
setTable(data);
    
  }
  fetchData();
}, []); 






  return (
    <>
    <Filters onsearch= {onsearch} onsort={onsort} ontype={ontype} />
    <MyNFTs  table = {table}/>
    </>
  )
}
