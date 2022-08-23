import { Row, Button } from 'react-bootstrap';
import { apiCall } from '../../services/api_call';
import './ApiButton.css';

function ApiButton(){

    return(
        <Row className="center">
            <Button type="submit" variant="primary" onClick={apiCall}>
                Llamar a la API
            </Button>
        </Row> 
    );
}

export default ApiButton;
