import './App.css'
export function App(){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de xxx" src = "https://guillemrecolons.com/wp-content/uploads/2020/01/Ventajas-y-desventajas-de-los-perfiles-privados-en-las-redes-sociales.webp" />
                <div className='tw-followCard-info'>
                    <strong>Nombre aqui</strong>
                    <span className='tw-followCard-infoUserName'>@nick</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}
