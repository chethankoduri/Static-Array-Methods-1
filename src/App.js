import logo from './logo.svg';
import './App.css';
import TenthStudent from './classes/TenthStudent';

function App() {

  //  let Dhoni = new TenthStudent();
  //  Dhoni.engMarks=90;
  //  Dhoni.hinMarks=99;
  //  Dhoni.telMarks=92;
  //  Dhoni.calculateResult();
  
  // console.log(TenthStudent.passMarks);

  let actorsOfKalki =["Prabhas","Amitabh Bachchan","Kamal Haasan","Deepika Padukone","Disha Patani","Keerthi Suresh",
    "Vijay Devarakonda","Dulkar Salman","Malavika Nair","Rajamouli","Brahmanandam","Rajendra Prasad","Ram Gopal Verma"]

  return (
    <div className="App">

      <h1>Learning Array Methods</h1>

      <button type='button' onClick={()=>{
        for(let i=0;i<= actorsOfKalki.length;i++) {
          console.log(actorsOfKalki[i]) 
         }
        console.log(actorsOfKalki[5])
        console.log(actorsOfKalki.length);

      }}>length</button>

      <button type="button" onClick={()=>{
       console.log(actorsOfKalki[6])
       console.log(actorsOfKalki.at(6))
      }}>at</button>

     <button type="button" onClick={()=>{
      console.log(actorsOfKalki[7])
      console.log(actorsOfKalki.toString(7))
      }}>toString</button>
       
     <button type="button" onClick={()=>{
      console.log(actorsOfKalki[8])
      console.log(actorsOfKalki.join("<--->"))
      }}>join</button>

    <button type="button" onClick={()=>{
     console.log(actorsOfKalki)
     console.log(actorsOfKalki.pop())
    }}>pop</button>

    <button type="button" onClick={()=>{
    console.log(actorsOfKalki)
    console.log(actorsOfKalki.push("Nag Ashwin"))
    }}>push</button>

    <button type="button" onClick={()=>{
     console.log(actorsOfKalki)
     console.log(actorsOfKalki.shift())
    }}>shift</button>

    <button type="button" onClick={()=>{
     console.log(actorsOfKalki)
     console.log(actorsOfKalki.unshift("Ashwini Dutt"))
    }}>unshift</button>

    <button type="button" onClick={()=>{
     console.log(actorsOfKalki)
     console.log(actorsOfKalki.splice(3,0,"Apple","Orange"))
    }}>splice</button>
      
      
    </div>
  );
}

export default App;
