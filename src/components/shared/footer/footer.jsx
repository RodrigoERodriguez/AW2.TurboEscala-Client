import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Taunus from '../../ui/taunus';
import TurboEscala from '../../ui/turboEscala';
import FooterCategories from '../footercategories/footercategories';
import ContactCategories from '../contactcategories/contactcategories';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 px-10 mt-20">
            <div className="container mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    
                    <TurboEscala/>

                    <div>
                        <h4 className="text-xl font-bold mb-4">Información</h4>
                        <div className='flex items-center w-full font-bold'>
                            <ContactCategories/>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4">Categorías</h4>
                        <div className='flex items-center w-full font-bold'>
                            <FooterCategories/>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4">Seguinos</h4>

                        <div className="flex items-center w-full font-bold gap-5 text-xl">
                            <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center md:flex-row lg:flex-row">
                    <Taunus />
                    <h2 className="text-sm font-bold mb-4">Desarrollado y Diseñado por TaunusTechnologies</h2>
                </div>



            </div>
        </footer>
    );
}

export default Footer;