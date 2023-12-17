import './Nav.css'

function Nav() {
    return (
        <nav class="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>
            <div class="social-icons">
                <a href="http://"><i class="fa-brands fa-facebook"></i></a>
                <a href="http://"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="http://"><i class="fa-brands fa-google"></i></a>
            </div>
        </nav>
    )
}

export default Nav