import {Link} from 'react-router-dom';
import '../styles.scss';

export default function Navbar() {
    return (
            <ul className="container">
                <li><Link className="active" to="/" >HOME</Link></li>
                <li><Link className="active" to="/voicemaker" >VOICEMAKER</Link></li>
                <li><Link className="active" to="/gtts" >gTTS</Link></li>
            </ul>
        
    )
}