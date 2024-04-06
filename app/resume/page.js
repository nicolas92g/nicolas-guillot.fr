import {Footer, MainContainer, Header, Title, TitleLink, ArticleTitle} from "@/app/components";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-bootstrap";

export default function cvPage(){
    return (
        <>
            <Header />
            <MainContainer >
                <Accordion defaultActiveKey={['1', '2']} alwaysOpen>
                    <AccordionItem eventKey="1" >
                        <AccordionHeader><h2 className='m-0'>Présentation</h2></AccordionHeader>
                        <AccordionBody>
                            <h4 className='my-3'>Mes premier pas</h4>
                            <p>
                                Étudiant à l'<a href='https://www.esgi.fr/' target='_blank'>école supérieure de génie informatique</a>
                                &nbsp; situé à Paris dans le 12<sup>ème</sup>, j'ai d'abord appris le développement en autodidacte grâce à
                                &nbsp;<a href="https://openclassrooms.com/fr/">OpenClassrooms</a>.
                                j'ai débuté au collège en apprenant le python puis j'ai appris le C au lycée.
                                J'ai beaucoup aimé apprendre ce language et j'ai enchainé avec le C++ avec lequel j'ai développé un petit moteur 3D
                                en utilisant la bibliothèque OpenGL.
                                Je me suis également beaucoup amusé avec des raspberry pi et des arduino avec lesquels j'ai fait quelques projets
                                d'électronique. <br/>
                                Grâce à cette pratique, j'ai aquis un bon niveau en programmation et en algorithmie avant même d'accéder aux bancs de l'école.
                                J'ai également appris les bases de linux en manipulant raspbian (l'OS du raspberry pi basé sur debian) et ubuntu que j'ai installé
                                sur des vieux ordinateurs.
                            </p>
                            <h4 className='my-3'>Ma spécialisation</h4>
                            <p>
                                Actuellement en deuxième année, je souhaite me spécialiser dans le domaine de l'intelligence artificielle
                                et du Big data à partir de l'année prochaine jusqu'à l'obtention d'un mastère en 2027. Ce domaine à attiré
                                mon attention car c'est un domaine d'avenir qui offre beaucoup d'opportunités. J'ai également une certaine
                                appétence pour les mathématiques et l'algorithmie avancé donc cette filière me plaît particulièrement.
                            </p>


                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="2" >
                        <AccordionHeader><h2 className='m-0'>Formation</h2></AccordionHeader>
                        <AccordionBody>
                            <h4 className='my-4'>Bachelor informatique, 2022 - 2025</h4>
                            <ul>
                                <li>École Supérieure de Génie Informatique (ESGI Paris 12<sup>ème</sup>)</li>
                                <li>Un diplôme de Bachelor est délivré à la troisième année (2025) mais la formation
                                    continue jusqu'a l'obtention d'un <strong>mastère</strong> en 2027
                                </li>
                                <li>Intervenants venant du monde professionnel ce qui donne un bon aperçu du milieu du
                                    travail
                                </li>
                                <li>Alternance à partir de la troisième année en rythme 3 semaines d'entreprise pour 1
                                    semaine d'école
                                </li>
                                <li>Apprentissage de compétences techniques (développement, réseau, gestion de bases de
                                    données, gestion de projets, et cetera)
                                </li>
                                <li>De nombreux <a href="/projects" title='Voir mes projets'>projets</a> afin de mettre
                                    en pratique ces compétences
                                </li>
                            </ul>
                            <h4 className='my-4'>École préparatoire intégrée, 2020 - 2022</h4>
                            <ul>
                                <li>École d'ingénieur, CY Tech Cergy</li>
                                <li>Algèbre, Analyse, Physique, Algorithmie, Programmation</li>
                            </ul>
                            <h4 className='my-4'>Baccalauréat Scientifique Option SVT, 2020</h4>
                            <ul>
                                <li>Lycée Montalembert, Courbevoie</li>
                                <li>Spécialité Physique-Chimie</li>
                            </ul>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </MainContainer>
            <Footer />
        </>
    );
}