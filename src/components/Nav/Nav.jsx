import './Nav.css'

function Nav() {
    return (
        <nav className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>
            <div className="social-icons">
                <a href="http://"><i className="fa-brands fa-facebook"></i></a>
                <a href="http://"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="http://"><i className="fa-brands fa-google"></i></a>
            </div>
        </nav>
    )
}

export default Nav