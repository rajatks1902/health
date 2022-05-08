import React from "react";

export default function Table(props){
    return(
        <main  className="value">
           <table className="table1">
               <tr className="black">
               <th>Micronutients</th>
               <th>Value</th>
               <th>Unit</th>
               </tr>
               <tr>
                <td className="hover">Calories</td>
                <td className="hover">{props.eng}</td>
                <td className="hover">Kcal</td>
               </tr>
               <tr>
                <td className="hover" >Protien</td>
                <td  className="hover">{props.pro}</td>
                <td className="hover">Gram</td>
               </tr>
               <tr>
                <td className="hover" >Fat</td>
                <td className="hover">{props.fat}</td>
                <td className="hover">Gram</td>
               </tr>
               <tr>
                <td className="hover">Carbohydrate</td>
                <td className="hover">{props.carbs}</td>
                <td className="hover">Gram</td>
               </tr>
           </table>
        </main>
    )
}