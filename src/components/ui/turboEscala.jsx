import { Link } from 'react-router-dom';
import turboEscala from '../../../public/turboEscala.svg';

const TurboEscala = () => {

    return (
        <div className="flex justify-center items-center">

            <div className="relative mr-[-200px]">

                <Link to="/"><img src={turboEscala} alt="Logo de Taunus Technologies" className="h-[100px]" /></Link>

            </div>

        </div>
    );

};

export default TurboEscala;