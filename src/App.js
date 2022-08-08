/** @format */
import data from './data.js'
import './style.css'

function App() {
    /* console.log(data) */
    return (
        <table>
            <tbody>
                {data.map((row, idx) => (
                    <tr>
                        <td key={idx}>{row[0]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default App
