const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Cliquei no botão!');
    };
    
    return (
        <>
            <div>
                <div>
                    <button onClick={handleMyEvent}>Clique aqui!</button>
                </div>
            </div>
        </>
    );
};

export default Events;