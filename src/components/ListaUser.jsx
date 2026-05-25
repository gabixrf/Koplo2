function ListaUser({ email }) {
    return (
        <section className="lista">
            <h2>Usuários Cadastrados</h2>

            {/* O map percorre o array e cria um card para cada animal */}
            {email.map((item, index) => (
                <div className="card" key={index}>
                    <h3>{item.nome}</h3>
                    <p>Email: {item.email}</p>
                    <p>Senha: {item.senha}</p>
                </div>
            ))}
        </section>
    );
}

export default ListaUser;
