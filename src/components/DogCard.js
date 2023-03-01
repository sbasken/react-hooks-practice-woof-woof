import React from 'react'

const DogCard = ({dog, showDetails}) => {
  return (
    <span id="dog-bar" onClick={()=>showDetails(dog)}>{dog.name}</span>
  )
}

export default DogCard