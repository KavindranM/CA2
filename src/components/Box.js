import { React, useState } from 'react';
import Select from 'react-select';
import './Box.css';
function ColorChange ()
{
    const colors = [
        {
            id: 1,
            label: "yellow",
        },
        {
            id: 2,
            label: "crimson",
        },
        {
            id: 3,
            label: "lavender",
        },
        {
            id: 4,
            label: "darkblue",
        },
        {
            id: 5,
            label: "teal",
        },
        {
            id: 6,
            label: "ghostwhite",
        },
        {
            id: 7,
            label: "rebeccapurple",
        },
        {
            id: 8,
            label: "aliceblue",
        },
        {
            id: 9,
            label: "aquamarine",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='dropdownWrapper'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1>Change the color</h1>
            </center>
            
            <div className="dropdown">
                <Select options={colors} onChange={click} className='select' placeholder="Select Color"></Select>
            </div>
            <div className="blowm">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default ColorChange;