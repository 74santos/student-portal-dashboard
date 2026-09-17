import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FiLock } from "react-icons/fi";

export default function Toggle() {
  const ctx = useContext(AppContext)
  
  if(!ctx) return null;


  const { secure, setSecure } = ctx ;

  return (
    <button
      className={`secure-toggle ${secure ? "active" : ""}`} 
      onClick= {() => setSecure(!secure)}
      >
        <span className="lock-icon">
          {secure ? <FiLock/> : <FiLock/> }
        </span>
      {secure ? "Secure View" : "Public View"}     
    </button>
  );
}