import './Section.css'

function Section() {
    return (
        <section className="newsletter">
            <h3>Newsletter</h3>
            <p>Receba nossas informações por email.</p>
            <form action="" className="post">
                <input type="text" placeholder="Digite o seu nome" />
                <input type="email" placeholder="Digite o seu e-mail" />
                <button>Cadastrar</button>
            </form>
        </section>
    )
}

export default Section