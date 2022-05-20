import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Todo = () => {

    const [value, setValue] = useState('');

    const data = [
        {
            "id": 1,
            "todo": "Make breakfast"
        },
        {
            "id": 2,
            "todo": "Make dinner"
        },
        {
            "id": 3,
            "todo": "Make lunch"
        },
        {
            "id": 4,
            "todo": "Make homework"
        },
    ]

    const getValue = () => {
        let count = data.length
        count += 1
        data.push({
            "id": count,
            "todo": value,
        });
        setValue("")
        console.log(data);
    }

    return (
        <>
            <div className="wrapper">
                <Navbar />
                <main>                    
                    <h1>Todo page</h1>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={() => getValue()}>Add todo</button>
                    <div className="todo">
                        <ul>
                            {data.map((item, key) => (
                                <li key={key}>
                                    {item.todo}
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Todo;