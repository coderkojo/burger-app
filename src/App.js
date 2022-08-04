import './App.css';
import {useState} from 'react';



function App() {                        

  const [showTopBun, setTopBun] = useState(true);
  const [showTomato, setTomato] = useState(true);
  const [showMeat, setMeat] = useState(true);
  const [showLettuce, setLettuce] = useState(true);
  const [showBottomBun, setBottomBun] = useState(true);

function TopBun()
  {
    return <>
          <div>{showTopBun ?         
          <div className = "topBun"> 
            <p>Top Bun</p>
          </div> : <></>
          }
        </div>
    </>
  }

  function Tomato()
  {
    return <>
            <div>{showTomato ?
            <div className = "tomato"> 
            <p>Tomato</p>
            </div> : <></>             
          }
        </div>
    </>
  }

  function Meat()
  {
    return<>
        <div> {showMeat ?         
        <div className = "meat"> 
        <p>Meat</p>
        </div> : <></>
          }
        </div>  
    </>

  }


  function Lettuce()
  {
    return <>
        <div> {showLettuce ?         
        <div className = "Lettuce"> 
        <p>Lettuce</p>
        </div>: <></>
          }
        </div>
    </>

  }

  function BottomBun()
  {
    return <>
        <div> {showBottomBun ?         
        <div className = "bottomBun"> 
        <p>Bottom Bun</p>
        </div> : <></>
          }
        </div>
    </>
  }



  return (
    <div className = "wrapper-div">
    <div className="burger-section">
      <h1> Welcome to ACA Burger </h1>'
        <TopBun />
        <Tomato/>
        <Meat/>
        <Lettuce/>
        <BottomBun/>


    </div>
    <div className ="preferences-section">
          <h1>Your Preferences</h1>
          <p>Top Bun</p> <button className = "removeButton" onClick ={() => {setTopBun(false);}}> Remove </button> <button className = "addButton" onClick ={() => {setTopBun(true);}}> Add </button>
          <p>Tomato</p> <button className = "removeButton" onClick ={() => {setTomato(false);}}> Remove </button> <button className = "addButton" onClick ={() => {setTomato(true);}}> Add </button>
          <p>Meat</p> <button className = "removeButton" onClick ={() => {setMeat(false);}}> Remove </button> <button className = "addButton" onClick ={() => {setMeat(true);}}> Add </button>
          <p>Lettuce</p> <button className = "removeButton" onClick ={() => {setLettuce(false);}}> Remove </button> <button className = "addButton" onClick ={() => {setLettuce(true);}}> Add </button>
          <p>Botton Bun</p> <button className = "removeButton" onClick ={() => {setBottomBun(false);}}> Remove </button> <button className = "addButton" onClick ={() => {setBottomBun(true);}}> Add </button>
          
        </div>
    </div>

  );
}

export default App;
