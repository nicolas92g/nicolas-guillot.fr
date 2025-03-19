import {Footer, Header, ProjectListContainer} from "@/app/components";

export default function Projects(){
    return (
        <>
            <Header/>
            <main className="container-fluid projects-container p-0">
                <ProjectListContainer image='codeBackground.png' darkness={.6} height={100}>
                    <article className="col-10">
                        <h1 className='text-center mb-3'>Mes Projets</h1>
                        <p className="text-center scroll-indicator">&#x2193;</p>
                    </article>
                </ProjectListContainer>
                <ProjectListContainer height={50}>
                    <article className="col-10">
                        <h1 className='text-center mb-5'>Projet annuel de 3<sup>ème</sup> année (en cours...)</h1>
                        <p>
                            Dans le cadre de cette première année de spécialisation en IA et Big Data, nous devons créer
                            <strong> notre propre implémentation</strong> de plusieurs algorithmes de <strong>machine learning en C++</strong> :
                        </p>
                        <ul>
                            <li>Modèle linéaire</li>
                            <li>Perceptron Multi Couches</li>
                            <li>Radial Basis Function Network</li>
                            <li>SVM</li>
                        </ul>
                        Ensuite nous devons choisir des exemples et créer des <strong>datasets</strong> grâce auxquelles il faut <strong>entrainer un modèle </strong>
                        et le mettre en production sur une application.
                    </article>
                </ProjectListContainer>
                <ProjectListContainer image='pa2024.png' height={100}>
                    <article className="col-10">
                        <h1 className='text-center mb-5'>Projet annuel de 2<sup>ème</sup> année à l'ESGI</h1>
                        <p>
                            En équipe de trois personnes, on nous a chargé de développer l'ensemble du système
                            informatique d'une association caritative fictive. Ce projet est le plus conséquent que j'ai
                            eu à réaliser
                            et il a été développé à partir de janvier jusqu'à mai 2024.<br/>
                            Voici les composants du projets ainsi que les technologies choisies :
                        </p>
                        <ul>
                            <li>API REST, <strong>Laravel</strong> PHP</li>
                            <li>Site internet afin d'interagir avec L'API, <strong>Bootstrap</strong></li>
                            <li>Application <strong>JAVA</strong></li>
                            <li>Application <strong>Android</strong></li>
                            <li>Mise en place du réseau sur un serveur de virtualisation <strong>Proxmox</strong></li>
                            <li>Conteneurisation des applications grâce à <strong>Docker</strong></li>
                        </ul>
                    </article>
                </ProjectListContainer>
                <ProjectListContainer height={40}>
                    <article className="col-10">
                        <h1 className='text-center mb-5'>Mon site internet</h1>
                        <p>
                            Sur mon temps libre et afin de parfaire mes compétences en développement web,
                            j'ai décidé de développer le site que vous êtes en train de consulter
                            et de l'héberger par mes propres moyens grâce à un <strong>Raspberry Pi</strong>.
                            Ce site était également un moyen d'apprendre la bibliothèque <strong>React </strong>
                            et de mettre en pratique mes connaissances nouvellement acquises en <strong>Docker</strong>.
                            J'ai utilisé <strong>Portainer</strong> afin d'améliorer l'accès à mes conteneurs ainsi qu'une image
                            nginx proxy manager servant de <strong>reverse proxy </strong> ce qui m'a permis d'ajouter des sous-domaines.
                        </p>
                    </article>
                </ProjectListContainer>
                <ProjectListContainer image='machineLearning.png'>
                    <article className="col-10">
                        <h1 className='text-center mb-5'>Projet machine learning</h1>
                        <p>
                            Dans le cadre du cours de data mining proposé par mon école cette année, j'ai réalisé un travail de nettoyage et d'analyse
                            de données d'assurances afin d'en déduire un modèle de <strong>machine learning</strong> permettant de déduire
                            le coût de l'assurance pour une personne en fonction de plusieurs critères.<br/>
                            J'ai ainsi réalisé une <strong>régression linéaire</strong> grâce à la bibliothèque <strong>scikit-learn</strong> de <strong>python</strong>.
                        </p>
                    </article>
                </ProjectListContainer>
                <ProjectListContainer height={40}>
                    <article className="col-10">
                        <h1 className='text-center mb-5'>Infrastructure réseau</h1>
                        <p>
                            Afin de mettre en pratique les cours de réseau, j'ai du réaliser une infrastructure complète avec plusieurs réseaux communiquant entre-eux par <strong>VPN </strong>
                            et le tout sécurisé par des <strong>pare-feu</strong>.<br/>
                            Cette exercice a été réalisé sur <strong>Vmware Workstation</strong> et en utilisant <strong>PfSense</strong> ainsi que des machines virtuelles <strong>Ubuntu</strong>.
                        </p>
                    </article>
                </ProjectListContainer>
                <ProjectListContainer height={100} image='projetC.png' darkness='0.7'>
                    <article className="col-10">
                        <h1 className='text-center mb-5'>Jeu vidéo développé en C</h1>
                        <p>
                            En réutilisant de nombreux morceaux de code de mes précédents projets 3D que j'avais réalisé en C++ avec OpenGL,
                            j'ai développé un petit jeu 3D en C et OpenGL communiquant avec l'API APOD de la NASA afin de récupérer des fonds d'écrans
                            ainsi qu'une base de donnée MySQL afin d'enregistrer les parties.
                        </p>
                    </article>
                </ProjectListContainer>
                <ProjectListContainer height={40}>
                    <article className="col-10">
                        <h1 className='text-center mb-5'>Projet annuel de 1<sup>ère</sup> année à l'ESGI</h1>
                        <p>
                            Mon premier gros projet à l'ESGI a été de faire le site internet d'un réseau social s'inspirant de X (Twitter) disposant d'une page montrant un fil de publications,
                            la possibilité d'envoyer des messages privés, de liker et republier des publications ainsi que de s'abonner à des utilisateurs. Le site disposait également d'une interface de
                            modération.<br/>
                            Le tout a été réalisé en <strong>PHP</strong> avec une base de données <strong>MySQL</strong> et hébergé sur un <strong>VPS</strong>.

                        </p>
                    </article>
                </ProjectListContainer>
                <ProjectListContainer height={100} image='projetCpp-photo.png' darkness='0.7'>
                    <article className="col-10">
                        <h1 className='text-center mb-5'>Projet annuel de classe préparatoire intégrée</h1>
                        <p>
                            Pour ce projet où nous avions une entière liberté, j'ai décidé de faire ce qui me passionnait à ce moment là : du développement 3D.
                            J'ai ainsi utilisé mon propre <strong>moteur 3D</strong> développé en <strong>C++</strong> et <strong>OpenGL</strong> afin de faire un simulateur de montgolfière.<br/>
                            Dans ce projet, La montgolfière est modélisée avec <trong>Blender</trong> mais le terrain est entièrement généré automatiquement grâce au <strong>bruit de perlin</strong>.
                            De plus, ce terrain est entièrement généré en arrière-plan grâce au <strong>multithreading</strong>.
                        </p>
                    </article>
                </ProjectListContainer>
            </main>
            <Footer/>
        </>
    );
}