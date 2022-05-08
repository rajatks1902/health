import React from "react";
import Table from "./Table";

export default function Cal(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
            'X-RapidAPI-Key': '455da2f6acmsha87e08e5453a2c4p1f2d35jsn15ebcb364c78'
        }
    };
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
    //         'X-RapidAPI-Key': '027e1e5d94msh9b1e994c8b00873p1cdb77jsn0da61ecdabf7'
    //     }
    // };
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
    //         'X-RapidAPI-Key': '7b6d618b49mshb22f228a08f17afp1cd5c4jsn3cbacae5d0a6'
    //     }
    // };
    const[on,seton]=React.useState([])
    const[getit,setit]=React.useState("")
    const[val,setval]=React.useState({
        food:""
    })
    function handleChange(event) {
        const {name, value} = event.target
        setval(prev=> ({
            ...prev,
            [name]: value
        }))
    }
    const [eng,seteng]=React.useState(0)
    const [fat,setfat]=React.useState(0)
    const [pro,setpro]=React.useState(0)
    const [sug,setsug]=React.useState(0)
    const [carbs,setcarbs]=React.useState(0)
    function calculate(){
    let energy=on.totalNutrients.ENERC_KCAL.quantity *1;
    let fat1=on.totalNutrients.FAT.quantity *1;
    let protien1=on.totalNutrients.PROCNT.quantity*1;
    let sugar1=on.totalNutrients.SUGAR.quantity*1;
    let carbs1=on.totalNutrients.CHOCDF.quantity *1;
        seteng(eng+ energy)
        setcarbs(carbs+ carbs1)
        setsug(sug+ sugar1)
        setpro(pro+ protien1)
        setfat(fat+ fat1)
    // console.log(energy);
    // console.log(fat1);
    }
    // console.log(getit);
    function printit(){
        setit(val.food)
    let energy=Math.round(on.totalNutrients.ENERC_KCAL.quantity *100)/100;
    let fat1=Math.round(on.totalNutrients.FAT.quantity *100)/100;
    let protien1=Math.round(on.totalNutrients.PROCNT.quantity*100)/100;
    let sugar1=Math.round(on.totalNutrients.SUGAR.quantity*100)/100;
    let carbs1=Math.round(on.totalNutrients.CHOCDF.quantity *100)/100;
    }
    // console.log(val.food)
    console.log(on)
    React.useEffect(() => {
        async function getnutri(){
    const res =await fetch(`https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=${val.food}`, options)
	const data =await res.json()
	seton(data)
     }
     getnutri()
}, [getit])


    return(
        <main>
            <div className="value">
            <input
            className="input"
            type="text"
            placeholder="Enter the Ingredient"
            name="food"
            value={val.food}
             onChange={handleChange}
            />
            </div>
            <div className="value">
            <br />
            <table>
            <tr >
            <th><button onClick={printit} className="final">fetch</button></th>
            <th><button onClick={calculate}  className="add">ADD </button></th>
            </tr>
            </table>
            </div>
            <br />
             <Table 
             eng={eng}
             fat={fat}
             pro={pro}
             carbs={carbs}
             />
            </main>
    )
}