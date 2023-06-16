import { useState } from "react"
function BookCreate ({onCreate}) {
    const [title, setTitle] = useState('')

    // Callback function to get the book title entered in the 'input' element
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    // Callback function to pass the value of the book title back to App.js
    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
        setTitle('')
    }

    return (
        <div className="book-create" >
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button" >Create</button>
            </form>
        </div>
    )
}

export default BookCreate