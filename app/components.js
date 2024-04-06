"use client"
import {Button, Container, Nav, Navbar, NavbarBrand, NavbarToggle, NavItem, NavLink} from "react-bootstrap";

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
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export function MainContainer({children}){
    return (
        <Container className={"h-100"}>
            <main className={"container-fluid py-5 h-100"}>
                {children}
            </main>
        </Container>
    );
}

export function Footer() {
    return (
        <footer className="container-fluid bg-primary p-4">
            <Container className="d-flex justify-content-center">
                <p className="m-0">&copy; 2024 Nicolas Guillot. Développé avec React Bootstrap.</p>
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
