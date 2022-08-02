import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [canClass, setCanClass] = useState("");

  //Keeping a count of total classes booked for all categories
  const [yogano, setYogano] = useState(0);
  const [gymno, setGymno] = useState(0);
  const [danceno, setDanceno] = useState(0);

  //Keeping a count of waitlist for all the categories
  const [yogawait, setYogawait] = useState(0);
  const [gymwait, setGymwait] = useState(0);
  const [dancewait, setDancewait] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "yoga" && yogano < 30) {
      setYogano(yogano + 1);
    } else if (name === "gym" && gymno < 30) {
      setGymno(gymno + 1);
    } else if (name === "dance" && danceno < 30) {
      setDanceno(danceno + 1);
    } else if (danceno >= 30 || gymno >= 30 || yogano >= 30) {
      alert("Class limit has reached you are being added to waitlist");
      if (name === "yoga" && yogano === 30) {
        setYogawait(yogawait + 1);
      } else if (name === "gym" && gymno === 30) {
        setGymwait(gymwait + 1);
      } else if (name === "dance" && danceno === 30) {
        setDancewait(dancewait + 1);
      }
    } else {
      alert("Invalid Class was entered");
    }
  };

  const cancelClasses = (event) => {
    event.preventDefault();

    var current = new Date();
    var hrs = current.getHours() * 100; //This variable is taking default value of your system time set this as permanent value for testing
    var rem = 1730 - hrs;
    if (name === "yoga" && rem >= 30) {
      setYogawait(yogawait - 1);
      alert(
        "Your class was cancelled and passed on to next waitlist candidate"
      );
    } else if (name === "gym" && rem >= 30) {
      setGymwait(gymwait - 1);
      alert(
        "Your class was cancelled and passed on to next waitlist candidate"
      );
    } else if (name === "dance" && rem >= 30) {
      setDancewait(dancewait - 1);
      alert(
        "Your class was cancelled and passed on to next waitlist candidate"
      );
    } else if (rem < 30 && rem >= 0) {
      alert("You can't cancel your class now");
    } else if (rem < 0) {
      alert("The class you are trying to cancel has already finished");
    }
  };

  return (
    <div className="App">
      <p>No of dance class booked {danceno}</p>
      <p>No of yoga class booked {yogano}</p>
      <p>No of gym class booked {gymno}</p>
      <p>All the classes start at 1730 hrs sharp</p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your class you want to attend:(Please type yoga,gym or dance
          class, Maximum limit for all the classes is 30)
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <br />
      <p>Waitlist for dance class {dancewait}</p>
      <p>Waitlist for yoga class {yogawait}</p>
      <p>Waitlist for gym class {gymwait}</p>
      <form onSubmit={cancelClasses}>
        <label>
          Enter the class which you want to cancel(Classes can only be cancelled
          before 30 mins of class start time )
          <input
            type="text"
            value={canClass}
            onChange={(e) => setCanClass(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
