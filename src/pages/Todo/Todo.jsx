import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from './Todo.module.scss'

const Todo = () => {

    const [value, setValue] = useState('');
    const [data, setData] = useState(() => {
        const todos = localStorage.getItem('todos');
        
        if (todos) {
            return JSON.parse(todos);
        } else {
            return [];
        }
    });

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

    const addTaskKey = (e) => {
        if (e.keyCode === 13) {
            addTask(value);
        }
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

    useEffect(() => {
        const todos = JSON.stringify(data);
        localStorage.setItem('todos', todos);
    }, [data])

    return (
        <>
            <div className="wrapper">
                <Navbar />
                <main className={style.main}>                    
                    <h1>Todo page</h1>
                    <h2 className={style.todo__quantity}>Quantity of tasks: {data.length}</h2>
                    <form onSubmit={handleSubmit} className={style.todo__form} >
                        <input 
                            type="text" 
                            onChange={handleChange} 
                            value={value}
                            className={style.todo__input}
                            onKeyDown={(e) => addTaskKey(e)}                    
                        />
                        <button className={style.todo__add}>Add task</button>
                    </form>
                    <div className={style.todo}>
                        {data.map((item, key) => (
                            <div className={style.todo_body} key={key}>
                                <div className={item.complete ? style.todo_item_complete : style.todo_item}>
                                    <div className={style.todo_id}>
                                        {item.id}.
                                    </div>
                                    <div className={item.complete ? style.todo_text_complete : style.todo_text}>
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