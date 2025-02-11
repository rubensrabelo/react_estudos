const CarDetails = ({ car }) => {
    return (
        <>
            <div>
                <h2>Detalhes do carro: </h2>

                <ul>
                    <li>Marca: {car.brand}</li>
                    <li>Kilometragem: {car.km}</li>
                    <li>Cor: {car.cor}</li>
                </ul>
            </div>
        </>
    );
};

export default CarDetails;