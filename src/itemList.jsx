import { useEffect, useState } from "react";
function Item({name,isPacked=false}){
    
    return(<li>
        {name}{isPacked &&'✓' }
    </li>);
}

export default function ItemList(){
    const [keyword,setKeyword] =useState("")
    useEffect(()=>{
        console.log("This component is loaded")
    })
    const items=[
        {name:"Sunglass",isPacked:true},
        {name:"Sunblock",isPacked:true},
        {name:"Powebank",isPacked:false},
        {name:"Towel",isPacked:true}
    ];
    
    const filterList=items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()))
    const itemsList=filterList.map(i=><Item key={i.name} 
        name={i.name} isPacked={i.isPacked}/>);
    return(<>
        <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}/>
        <ui>
        {itemsList}
        </ui></>);
}