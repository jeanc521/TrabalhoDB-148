import style from './menu.module.css'

export const Menu = (props) => {
    return(
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${style.navBar}`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active"  href={'/'}>{props.option01}</a>
            <a class="nav-link" href="s1">{props.option02}</a>
            <a class="nav-link" href="s2">{props.option03}</a>
          </div>
        </div>
      </div>
    </nav>
    )
    
}