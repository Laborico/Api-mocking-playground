import React, { useState } from "react";
import { Row, Button, Alert } from 'react-bootstrap';
import { apiCall } from '../../services/api_call';
import './ApiButton.css';

function ApiButton(){

    const [show100, setShow100] = useState(false);
    const [show200, setShow200] = useState(false);
    const [show300, setShow300] = useState(false);
    const [show400, setShow400] = useState(false);
    const [show500, setShow500] = useState(false);

    const handleResponse = async (e) => {
        let response = await apiCall();
        if(response.status >= 500) {
            setShow500(true);
        } else if (response.status >= 400){
            setShow400(true);
        } else if (response.status >= 300){
            setShow300(true);
        } else if (response.status >= 200){
            setShow200(true);
        } else if (response.status >= 0){
            setShow100(true);
        }
    }

    return(
        <>
        <Row>
            { show500 ? 
                <Alert variant="danger" onClose={() => setShow500(false)} dismissible>
                    Se nos cayo el changarro! Lo sentimos, intenta despues:C
                </Alert>
                : null 
            } 
            { show400 ? 
                <Alert variant="warning" onClose={() => setShow400(false)} dismissible>
                    Tuviste un error, revisa la informacion:D
                </Alert>
                : null 
            } 
            { show300 ? 
                <Alert variant="primary" onClose={() => setShow300(false)} dismissible>
                    El endpoint fue movido, por favor revisa la ruta:D 
                </Alert>
                : null 
            } 
            { show200 ? 
                <Alert variant="success" onClose={() => setShow200(false)} dismissible>
                    Todo salio bien:D
                </Alert>
                : null 
            } 
            { show100 ? 
                <Alert variant="secondary" onClose={() => setShow100(false)} dismissible>
                    El servidor esta procesando la informacion, por favor espera:D
                </Alert>
                : null 
            } 
        </Row>
        <Row className="center row_button">
            <Button type="submit" variant="primary" onClick={handleResponse}>
                Llamar a la API
            </Button>
        </Row> 
        </>

    );
}

export default ApiButton;
