/** @format */
import React, { useState } from 'react'
import iniData from './data.js'
import './style.css'

function App() {
    const [data, setData] = useState(iniData)
    const [edit, setEdit] = useState(null)

    //if cell is double clicked, set edit to the cell's index
    function showEditor(e) {
        console.log(e.target.dataset.id)
        setEdit({
            row: parseInt(e.target.dataset.id),
        })
    }

    //save cell input to data
    function save(e) {
        e.preventDefault()
        const input = e.target.firstChild
        const dataCopy = [...data]
        dataCopy[edit.row] = input.value
        setEdit(null) //reset edit to null, therefore no input field is generated
        setData(dataCopy)
    }

    return (
        <ul onDoubleClick={showEditor}>
            {data.map((item, index) => {
                if (edit && edit.row === index) {
                    item = (
                        <form onSubmit={save}>
                            <input type="text" defaultValue={item} />
                        </form>
                    )
                }
                return (
                    <li data-id={index} key={index}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

export default App
