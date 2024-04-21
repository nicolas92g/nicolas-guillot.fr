import {Footer, Header, MainContainer} from "@/app/components";
import {ListGroup, ListGroupItem} from "react-bootstrap";


export default function ContactPage() {
    return (
        <>
            <Header/>
            <MainContainer  minHeight="75">
                <div className="d-flex flex-column align-items-center">
                    <div className='col-10'>
                        <ListGroup>
                            <ListGroupItem className='p-5'>
                                <h1 className='text-center '>Mes réseaux</h1>
                            </ListGroupItem>
                            <ListGroupItem className='p-3'>
                                Adresse mail : <a href='mailto:nicolasguillot92@gmail.com'>nicolasguillot92@gmail.com</a>
                            </ListGroupItem>
                            <ListGroupItem className='p-3'>
                                LinkedIn : <a href='https://www.linkedin.com/in/nicolas-guillot-27a30b264/'>linkedin.com/in/nicolas-guillot-27a30b264</a>
                            </ListGroupItem>
                            <ListGroupItem className='p-3'>
                                Github : <a href='https://github.com/nicolas92g/'>github.com/nicolas92g</a>
                            </ListGroupItem>

                        </ListGroup>
                    </div>
                </div>
            </MainContainer>
            <Footer/>
        </>
    );
}