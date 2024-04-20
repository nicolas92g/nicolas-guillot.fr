"use client"
import {Container, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";

export function Header({children}){
    const goHome = ()=> {location.href='/';}

    return (
        <header className={"container-fluid bg-primary"}>
            <Navbar className="bg-primary" expand="lg">
                <Container className="justify-content-start">
                    <NavbarBrand className={"d-flex"} onClick={goHome}>
                        <img src={"terminal.svg"} height={"50"}/>
                        <h3 className="mb-0 mt-2 ms-2">Nicolas-Guillot.fr</h3>
                    </NavbarBrand>
                    <Nav>
                        <NavLink href="/">Accueil</NavLink>
                        <NavLink href="/resume">Mon CV</NavLink>
                        <NavLink href="/projects">Mes Projets</NavLink>
                        <NavLink href="/contact">Me Contacter</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export function MainContainer({children, minHeight = null}){
    let style = {};
    if (minHeight) style.minHeight = `${minHeight}%`;
    return (
        <Container style={style}>
            <main className={"container-fluid py-5"}>
                {children}
            </main>
        </Container>
    );
}

export function Footer() {
    return (
        <footer className="container-fluid bg-primary"  >
            <Container className="d-flex justify-content-center" style={{height:'76px'}}>
                <div className="m-0 d-flex flex-column justify-content-center">&copy; 2024 Nicolas Guillot. Développé avec React Bootstrap.</div>
            </Container>
        </footer>
    );
}

export function Title({children, size}) {

    switch (size) {
        case 1:
            return (<h1 className="customTitle mb-4">{children}</h1>);
        case 2:
            return (<h2 className="customTitle">{children}</h2>);
        case 3:
            return (<h3 className="customTitle">{children}</h3>);
        case 4:
            return (<h4 className="customTitle">{children}</h4>);
        case 5:
            return (<h5 className="customTitle">{children}</h5>);
        default:
            return (<h6 className="customTitle">{children}</h6>);
    }
}

export function ProjectListContainer({children, image = null, height = 100, darkness = 0.6, bgcolor = 'white'}){

    let style = {
        minHeight: `calc(${height}vh - ${height / 100. * 76}px)`,
        backgroundSize: 'cover'
    };

    if (image){
        style.backgroundImage = `linear-gradient(rgba(0,0,0,${darkness}), rgba(0,0,0,${darkness})), url(${image})`;
        style.color = 'white';
    }
    else{
        style.backgroundColor = bgcolor;
        if (bgcolor === 'black'){
            style.color = 'white';
        }
    }

    return (
        <div className='container-fluid py-3 d-flex flex-column justify-content-center' style={style}>
            <div className='container d-flex flex-column align-items-center'>
                {children}
            </div>
        </div>
    );
}
