import boar from "./public/NFTticket boar.png"
import deer from "./public/NFTticket deer.png"
import "./styles/App.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const Icon = ()=>{
    return (
        
        <a className="Ticket_buy">
            <div className="NFTIcon">
                    <div className="NFTIcon-container">
                        <p><img className="icon-boar" src={boar} alt="boar" /></p>
                        <p><img className="icon-deer" src={deer} alt="deer" /></p>
                    </div>

            </div>
        </a>
    );
}

export default Icon