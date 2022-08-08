/** @format */
import React, { useState } from 'react'
import iniData from './data.js'
import './style.css'

function App() {
    const [data, setData] = useState(iniData)
    const [edit, setEdit] = useState(null)

    function showEditor(e) {
        console.log(e.target.dataset.id)
        setEdit({
            row: parseInt(e.target.parentNode.dataset.row),
        })
    }

    function save(e) {
        e.preventDefault()
        const input = e.target.firstChild
        const dataCopy = [...data]
        dataCopy[edit.row][0] = input.value
        setEdit(null)
        setData(dataCopy)
    }

    return (
        <ul onDoubleClick={showEditor}>
            {data.map((item, index) => {
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
