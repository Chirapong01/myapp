import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Subscription_Program(){
    return(
        <div>
            <Link to="/"> <ArrowBackIcon className="m-5" sx={{ fontSize: 26 }} /></ Link>
        </div>
    )
}

export default Subscription_Program;