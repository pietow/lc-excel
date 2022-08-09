/** @format */

import logo from './logo.svg'
import './App.css'
import iniData from './data.js'
import { useState } from 'react'

function App() {
    // Note the array destructuring syntax: [state, setState]
    // it is shorter and cleaner
    /* const stateArray = useState(iniData) */
    /* const data = stateArray[0] */
    /* const setData = stateArray[1] */
    const [data, setData] = useState(iniData)
    //you can decide to keep pieces of state in different variables
    //data is containing in the list one peace of information
    //you could also use state for auxilliary information
    const [edit, setEdit] = useState(null)

    function showEditor(e) {
        setEdit({ row: parseInt(e.target.dataset.row) })
    }

    function save(e) {
        e.preventDefault()
        const input = e.target.firstChild
        const dataCopy = [...data]
        dataCopy[edit.row] = input.value
        setEdit(null)
        setData(dataCopy)
    }

    return (
        <ul onDoubleClick={showEditor}>
            {iniData.map((item, index) => {
                if (edit && edit.row === index) {
                    item = (
                        <form onSubmit={save}>
                            <input type="text" defaultValue={item} />
                        </form>
                    )
                }
                return (
                    <li key={index} data-row={index}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

export default App
