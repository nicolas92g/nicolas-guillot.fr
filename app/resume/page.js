import {Footer, Header, MainContainer} from "@/app/components";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-bootstrap";

export default function cvPage(){
    return (
        <>
            <Header />
            <MainContainer>
                <Accordion defaultActiveKey={['1', '2']} alwaysOpen>
                    <AccordionItem eventKey="1" >
                        <AccordionHeader><h2 className='m-0'>Présentation</h2></AccordionHeader>
                        <AccordionBody>
                            <p className='text-body-emphasis '>
                                Je recherche actuellement un contrat d'apprentissage pour septembre 2025.
                                Mon rythme d'alternance est de 3 semaines en entreprise pour 1 semaine d'école.
                            </p>
                            <h4 className='my-3'>Mes premiers pas dans l'informatique</h4>
                            <p>
                                Étudiant en Bachelor à l'<a href='https://www.esgi.fr/' target='_blank'>ESGI</a>
                                &nbsp; située à Paris dans le 12<sup>ème</sup>, j'ai d'abord appris le développement en autodidacte grâce à
                                &nbsp;<a href="https://openclassrooms.com/fr/">OpenClassrooms</a>.
                                J'ai débuté au collège en apprenant le Python puis j'ai appris le C au lycée.
                                J'ai beaucoup aimé apprendre ce language et j'ai enchainé avec le C++ avec lequel j'ai développé un petit moteur 3D
                                en utilisant la bibliothèque OpenGL.
                                Je me suis également beaucoup amusé avec des Raspberry Pi et des Arduino avec lesquels j'ai fait quelques projets
                                d'électronique. <br/>
                                Grâce à cette pratique, j'ai acquis un bon niveau en programmation et en algorithmie avant d'accéder à l'enseignement supérieur.
                                J'ai également appris les bases de Linux en manipulant Raspbian (l'OS du Raspberry Pi basé sur Debian) et Ubuntu que j'ai installé
                                sur des vieux ordinateurs.
                            </p>
                            <h4 className='my-3'>Ma spécialisation</h4>
                            <p>
                                Actuellement en troisième année, je me spécialise actuellement dans le domaine de l'intelligence artificielle
                                et du Big data jusqu'à l'obtention du mastère en 2027. Ce domaine a attiré
                                mon attention car c'est un sujet d'avenir qui offre beaucoup d'opportunités. J'ai également une certaine
                                appétence pour les mathématiques, l'algorithmie avancée et les langages de bas niveau.
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey='2'>
                        <AccordionHeader><h2 className='m-0'>Expérience professionnelle</h2></AccordionHeader>
                        <AccordionBody>
                            <h4 className='my-3'>Alternant développeur Java</h4>
                            <ul>
                                <li>CNP Assurances, Issy-les-Moulineaux (09/2024 – 09/2025)</li>
                                <li>Développement Logiciel Java, Spring</li>
                                <li>rédaction de requête SQL pour OracleDB, scripts Liquibase</li>
                                <li>rédaction et utilisation de tickets Jira</li>
                                <li>Méthodologie agile, organisation de réunion agile</li>
                                <li>Utilisation de Git, GitLab</li>
                                <li>Communication régulière avec le métier</li>
                            </ul>
                            <h4 className='my-3'>Stagiaire développeur d'application Power Apps</h4>
                            <ul>
                                <li>RTE France, La Défense (06/2023 – 07/2023)</li>
                                <li>Création d’une interface graphique améliorant l’accès aux données Excel
                                destinées au management</li>
                                <li>Développement d’une application de réservation de rendez-vous à l’IT et
                                    d'une application d’inscription pour des webinaires</li>
                                <li>Présentation en réunion d'équipe de mes applications</li>
                                <li>Support technique à distance d’utilisateurs internes de Power Automate</li>
                            </ul>
                            <h4 className='my-3'>Développeur web</h4>
                            <ul>
                                <li>Bifitness (10/2022 – 05/2023)</li>
                                <li>Développement et maintenance PHP, Javascript, Paypal Checkout</li>
                            </ul>
                            <h4 className='my-3'>Chef scout</h4>
                            <ul>
                                <li>Scouts et Guides De France (2020 - 2022)</li>
                                <li>Organisation de séjours et de week-ends</li>
                                <li>Encadrement d'enfants de 11 à 14 ans</li>
                            </ul>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey='3'>
                        <AccordionHeader><h2 className='m-0'>Compétences</h2></AccordionHeader>
                        <AccordionBody>
                            <h4>Langages</h4>
                            <ul>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>Java</li>
                                <li>PHP, HTML, CSS</li>
                                <li>C/C++</li>
                                <li>Go</li>
                                <li>SQL</li>
                            </ul>
                            <h4>Technologies</h4>
                            <ul>
                                <li>Git, GitHub</li>
                                <li>Node.js, NPM</li>
                                <li>React, Next.js</li>
                                <li>Docker, Linux</li>
                                <li>Spring</li>
                                <li>Liquibase</li>
                                <li>Bootstrap, Laravel</li>
                                <li>MySql, Oracle DB</li>
                                <li>Notebook Python, Scikit-Learn</li>
                                <li>VBA, Excel</li>
                                <li>Power Apps, SharePoint</li>
                                <li>Android Studio, Kotlin</li>
                                <li>VMware Workstation Pro, Proxmox</li>
                                <li>PfSense</li>
                            </ul>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="4" >
                        <AccordionHeader><h2 className='m-0'>Formation</h2></AccordionHeader>
                        <AccordionBody>
                            <h4 className='my-4'>Bachelor informatique, 2022 - 2025</h4>
                            <ul>
                                <li>École Supérieure de Génie Informatique (ESGI Paris 12<sup>ème</sup>)</li>
                                <li>Un diplôme de Bachelor est délivré à la troisième année (2025) mais la formation
                                    continue jusqu'à l'obtention d'un <strong>mastère</strong> en 2027
                                </li>
                                <li>Intervenants venant du monde professionnel ce qui donne un bon aperçu du milieu du
                                    travail
                                </li>
                                <li>Alternance à partir de la troisième année en rythme 3 semaines d'entreprise pour 1
                                    semaine d'école
                                </li>
                                <li>Apprentissage de compétences techniques (développement, réseau, gestion de bases de
                                    données, gestion de projets)
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
                    <AccordionItem eventKey='5'>
                        <AccordionHeader><h2 className='m-0'>Loisirs</h2></AccordionHeader>
                        <AccordionBody>
                            <ul>
                                <li>Cyclisme, Escalade, Athlétisme, Ski</li>
                                <li>Guitare : 12 ans de pratique</li>
                                <li>Lecture : romans historiques</li>
                            </ul>
                        </AccordionBody>
                    </AccordionItem>

                </Accordion>
            </MainContainer>
            <Footer />
        </>
    );
}