/** @format */
import React, { useState } from 'react'
import iniData from './data.js'
import './style.css'

function App() {
    const [data, setData] = useState(iniData)
    return (
        <table>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        <td>{row[0]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default App
