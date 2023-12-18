import './Header.css'

function Header() {
    return (
        <header className="cabecalho">
            <h1 className="logo">
                <a href="index.html" title="Loja de Informática">Loja de Informática</a>
            </h1>
            <form action="" method="post">
                <input type="search" name="busca" id="busca" placeholder="Faça sua busca aqui!" />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </header>
    )
}

export default Header