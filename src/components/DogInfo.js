import React, { useState } from 'react'

const DogInfo = ({ detail, updateDogs }) => {
    const { id, name, isGoodDog, image } = detail
    const [ isGood, setIsGood ] = useState(isGoodDog)

    const updateGoodness = (isGood, id) => {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isGoodDog: !isGood})
        })
            .then(res => res.json())
            .then(updatedDog => {
                setIsGood(isGood => !isGood)
                updateDogs(updatedDog, setIsGood)
            })
    }

  return (
    <div>
       <img src={image} alt={name} />
       <h2>{name}</h2>
       <button value={isGoodDog} onClick={() => updateGoodness(isGood, id)}>{ isGood ? "Good Dog!" : "Bad Dog!" }</button>
    </div>
  )
}

export default DogInfo