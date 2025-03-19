import {Button, Carousel, CarouselCaption, CarouselItem} from 'react-bootstrap';
import {Footer, Header} from "@/app/components";

export default function Home() {
    return (
        <>
            <Header></Header>

            <main className="container-fluid mainContainer">
                <Carousel defaultActiveIndex={0} interval={4000}>
                    <CarouselItem>
                        <div className="carousel-img" id="carousel-img-1"></div>
                        <CarouselCaption>
                            <h1 className='my-4'>Découvrez mon CV numérique</h1>
                            <Button href="/resume" variant='outline-primary'>Accéder au CV</Button>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="carrousel-img" id="carousel-img-2">
                            <video autoPlay muted loop id="project-video">
                                <source src="projetCpp.mp4" type="video/mp4"/>
                                Votre Navigateur n'est pas compatible
                            </video>
                        </div>
                        <CarouselCaption>
                            <h1 className='my-4'>Découvrez mes projets</h1>
                            <Button href='/projects' variant='outline-primary'>Voir les projets</Button>
                        </CarouselCaption>
                    </CarouselItem>
                </Carousel>
            </main>
            <Footer/>
        </>
    );
}
