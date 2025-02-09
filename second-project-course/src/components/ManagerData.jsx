import { useState } from "react";

const ManagerData = () => {
    const [number, setNumber] = useState(0);
  
    return (
    <>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(2)}>Mudar</button>
        </div>
    </>
  );
};

export default ManagerData;