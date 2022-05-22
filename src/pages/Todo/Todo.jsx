import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from './Todo.module.css'

const Todo = () => {

    const [value, setValue] = useState('');
    const [data, setData] = useState([]);

    const addTask = (value) => {
        if(value) {
            const todo = {
                id: data.length + 1,
                todo: value,
                complete: false,
            };
            setData([...data, todo])
        }
        setValue("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(value);
    }

    const removeTask = (id) => {
        setData([...data.filter((todo) => todo.id !== id)])
    }

    const handleTask = (id) => {
        setData([
            ...data.map((todo) =>
            todo.id === id ? { ...todo, complete: !todo.complete } : {...todo}
            )
        ])
    }

    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <div className="wrapper">
                <Navbar />
                <main>                    
                    <h1>Todo page</h1>
                    <h2>Quantity of tasks: {data.length}</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            onChange={handleChange} 
                            value={value}
                        />
                        <button>Add task</button>
                    </form>
                    <div className="todo">
                        {data.map((item, key) => (
                            <div className={style.todo_body}>
                                <div className={style.todo_item} key={key}>
                                    <div className={style.todo_id}>
                                        {item.id}.
                                    </div>
                                    <div className={item.complete ? "todo_text complete" : "todo_text"}>
                                        {item.todo}
                                    </div>                                    
                                </div>
                                <div className={style.todo_complete} onClick={() => handleTask(item.id)}>
                                    &#9745;
                                </div>
                                <div className={style.todo_close} onClick={() => removeTask(item.id)}>
                                    X
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Todo;