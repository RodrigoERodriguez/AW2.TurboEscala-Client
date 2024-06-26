import { Link } from 'react-router-dom';
import taunus from '../../../public/taunus.svg';

const Taunus = () => {

    return (
        <div className="flex justify-center items-center">

            <div className="mr-4">

                <Link to="/loginempleados"><img src={taunus} alt="Logo de Taunus Technologies" className="h-[100px]" /></Link>

            </div>

        </div>
    );

};

export default Taunus;