import React, { Component } from 'react'
import Character from '../components/Character'
// Component => class 
// {dog} => props.dog => dog
const Team = (props) => {

    function renderCharacters() {
        return props.characters.map(el => <Character key={el.name} character={el} team />)
    }
    return (
        <div className="container team">
            <h2>My Team</h2>
            <div>
                {renderCharacters()}
            </div>
        </div>
    )
}

export default Team