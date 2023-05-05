import React, { useEffect, useState } from 'react';
import Button from './Button.jsx'
function Pokemon() {

    const [pokemon, setPokemon] = useState(null);
    const [points, setPoints] = useState(0);
    const [inputValue, setInputValue] = useState('');
    let randomNumber = Math.ceil(Math.random() * 151);

    function getPokemon() {


        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
            .catch((error) => console.error(error));

    }
    useEffect(() => {
        getPokemon(randomNumber);
    }, [])


    function Score() {

        if (inputValue.toLocaleLowerCase() === pokemon.name.toLocaleLowerCase()) {
            setPoints(points + 1)
            getPokemon();
        } else if (inputValue.toLocaleLowerCase() !== pokemon.name.toLocaleLowerCase()) {
            alert(`Game Over: ${pokemon.name.toUpperCase()}`)
            setPoints(0)
            getPokemon();
        }
        setInputValue('');
    }

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <div className='mainshow'>
            
            {pokemon !== null ? (
                <div className='show1'>
                    <div className='screen'>

                    {console.log(pokemon.name)}
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>

                </div>
            ) : (
                <p>Loading...</p>
                )}
                <div className='clear'></div>
            <div className='show2'>
                <input className='input' type='text' value={inputValue} placeholder="who's that pokemon?" onChange={handleChange} />

                <div className='bothBottons'>

                <Button onClick={Score} tittle="A" color='green'/>
                <Button onClick={Score} tittle="B" color='blue'/>
                </div>

                

                <h2>SCORE: {points}</h2>
                </div>
        </div>
    );
}

export default Pokemon;