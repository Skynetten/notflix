import Notflix from './Notflix'
import notflix from '../img/notflix.png'
import SelectLang from './SelectLang'

export default function TopRow() {
    return (
        <div className="top-row">
            <Notflix notflix={notflix}/>
            <SelectLang/>
        </div>
            
    )
}
