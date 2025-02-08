const TemplateExpressions = () => {
    const nome = 'Fulano';
    const data = {
        job: 'Desenvolvedor'
    };

    return (
        <div>
            <h1>Olá {nome}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{ 4 + 4 }</p>
        </div>
    );
};

export default TemplateExpressions;