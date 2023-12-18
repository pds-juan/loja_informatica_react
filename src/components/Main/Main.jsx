import './Main.css'

function Main() {
    return (
        <main className="principal">
            <article className="sobre">
                <h2>Sobre nós</h2>
                <img src="src\assets\loja.png" alt="Um casal caucasiano dentro de uma loja de informatica, homem com camisa social azul clara e mulher loira com camisa social azul claro com as mãos em cima do balcão. Logo a frente há um vendedor de roupa social, camisa branca, mostrando um notebook para venda." />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatum nesciunt debitis qui quia dolorum nobis perspiciatis? Explicabo, ullam. Harum quibusdam id at dolorem quia quis facilis assumenda ipsam suscipit!</p>
                <p>Doloremque voluptates omnis iste, culpa porro a possimus reprehenderit voluptas nam harum quos, natus, quasi accusamus temporibus deserunt rerum reiciendis explicabo doloribus magni enim consequuntur. Illum molestias eius temporibus repellendus.</p>
                <p>Assumenda ad debitis quos laudantium sed. Omnis possimus odio, quasi error animi perspiciatis eum saepe dolorem, sint voluptate dolorum, harum rerum impedit aspernatur. Quam, repudiandae assumenda blanditiis officiis ad et?</p>
                <p>Expedita quis excepturi voluptatem dolorum iusto, deserunt vitae perspiciatis dolor, sunt nostrum eveniet aliquam eius totam sed neque blanditiis, obcaecati tempora numquam suscipit pariatur aperiam. Temporibus voluptate laborum odit autem.</p>
                <p>Ratione commodi corporis atque rem cupiditate consequatur sed ad, nemo velit laborum dolorem, corrupti alias assumenda debitis voluptates, iste sequi doloremque repudiandae! Atque nesciunt provident sint aperiam debitis et quia!</p>
                <p>Eos tenetur sit optio deleniti repellat. Optio voluptatem repudiandae molestiae laborum nam! Consequuntur, quam commodi earum est molestias nesciunt, excepturi eum nulla labore eos quaerat optio soluta, aspernatur ullam esse.</p>
                <p>Neque explicabo earum numquam sit voluptates, laboriosam, quae sed cum recusandae ratione animi molestiae! Doloribus itaque iste architecto, excepturi rem consequatur natus laudantium odio dolorum eligendi ad facere corporis! Fugiat!</p>
            </article>
            <aside className="onde-estamos">
                <h2>Onde Estamos</h2>
                <p>Rua Tito, 54 - Vila Romana, São Paulo - SP, 05051-000.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122705982698!2d-46.69439032532814!3d-23.528088660369374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1692994853374!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2>Contatos</h2>
                <ul>
                    <li><i className="fa-solid fa-phone"></i>(11) 4090-1030</li>
                    <li><a href="https://api.whatsapp.com/send?phone=551140901030" target="_blank"><i className="fa-brands fa-whatsapp"></i>(11) 4090-1030</a></li>
                    <li><a href="mailto:lapatito@sp.senac.br"><i className="fa-solid fa-envelope"></i>lapatito@sp.senac.br</a></li>
                </ul>
            </aside >
        </main >
    )
}

export default Main