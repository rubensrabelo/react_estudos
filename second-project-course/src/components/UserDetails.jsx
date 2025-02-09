const UserDetails = ({ user }) => {
  return (
    <>
        <h2>Detalhes do usuário: {user.name}</h2>
        <ul>
            <li>Profissão: {user.job}</li>
            <li>Idade: {user.age}</li>
        </ul>
    </>
  );
};

export default UserDetails;