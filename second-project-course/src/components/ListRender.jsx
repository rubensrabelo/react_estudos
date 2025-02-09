import { useState } from "react";

const ListRender = () => {
    const [names, setNames] = useState(["Matheus", "Pedro", "João", "Maria", "Ana", "José"]);

    return (
        <>
            <div>
                <ul>
                    {names.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ListRender