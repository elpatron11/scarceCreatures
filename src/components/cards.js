import React from "react"

export default function Card(props){
    return(
        <div className="cards">
             <img className="creatureImg" src={props.obj.Atack} alt="pic" />
        <span className="card">
            
            <h1>{props.obj.name}</h1>
            <h2>Type : {props.name} <span>({props.obj.type})</span> </h2>
                    
            <p>Atack={props.obj.Atack}<br/>
                Life={props.obj.Life} <br/> 
                Speed={props.obj.Speed}<br/>
              </p>
            <p id="passive">Passive: {props.obj.passive}</p>
            <p id="special">Active:{props.obj.Special}</p>
        </span>
       
        </div>
    )
}