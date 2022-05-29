import React, {useState} from "react";

function SearchForm ({onSubmit}) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({keyword})
    }

    // Esta función se ejecutará cada vez que se cambie el input
    const handleChange = e => {
        // Cada vez que escribamos, actualizamos el estado
        setKeyword(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..."></input>
        </form>
    )
}

export default React.memo(SearchForm);