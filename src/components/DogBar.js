import React from 'react'
import DogCard from './DogCard'

const DogBar = ({ dogs, showDetails }) => {
  return (
    <div id="dog-bar">
        { dogs.map(dog => <DogCard key={dog.name} dog={dog} showDetails={showDetails}/>)}
    </div>
  )
}

export default DogBar