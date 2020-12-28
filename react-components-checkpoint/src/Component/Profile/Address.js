import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Address (props) {
    return (<div className="address" style={{color: "#00303f"}}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <h2>Tigzirt, Tizi-Ouzou, Algeria</h2>
            </div>)
}

export default Address;