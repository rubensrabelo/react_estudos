const Container = ({ children }) => {
  return (
    <div>
      <h1>Conteúdo do componente pai:</h1>
      {children}
      <p>Outro Conteudo</p>
    </div>
  );
};

export default Container;