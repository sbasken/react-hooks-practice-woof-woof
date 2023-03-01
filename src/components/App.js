import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [ dogs, setDogs ] = useState([])
  const [ detail, setDetail ] = useState([])
  const [ isOn, setIsOn ] = useState(false)

  const handleFilter = () => {
    setIsOn(isOn => !isOn)
  }

  const filteredDogs = dogs.filter(dog => isOn ? dog.isGoodDog === true : dogs)

  const updateDogs = (updatedDog) => {
    const updatedDogs = dogs.map(dog => {
      if (dog.id === updatedDog.id) {
        return updatedDog
      } else {
        return dog
      }
    })
    setDogs(updatedDogs)
  }

  const showDetails = (dog) => {
    setDetail(dog)
  }

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(res=>res.json())
      .then(data => setDogs(data))
  }, [])

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilter}>Filter good dogs: { isOn? "ON" : "OFF" }</button>
      </div>
      <div id="dog-bar">
        <DogBar dogs={filteredDogs} showDetails={showDetails}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          { (detail.length === 0) ? null : <DogInfo detail={detail} updateDogs={updateDogs} />}
        </div>
      </div>
    </div>
  );
}

export default App;
