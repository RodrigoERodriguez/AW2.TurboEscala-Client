import CartWidget from '../../ui/CartWidget';
import  MyOrdersButton  from '../../ui/myordersbutton'; 
import  SigInButton  from '../../ui/signinbutton';
import  TurboEscala  from '../../ui/turboEscala';
import  Categories  from '../../shared/categories/categories';
import { IoSearchOutline } from 'react-icons/io5';


const NavBar = () => {
    return (
        <div className="relative">
            <header className="py-3 px-10 flex justify-between items-center top-0 w-full z-40 text-black bg-body-tertiary">
                <div className="ml-[100px]">
                <TurboEscala/>
                </div>

                <div className="relative mr-[-150px]">
                    <input type="text" placeholder="¡Explora nuestra selección de vehículos a escala!" className="p-1 border border-gray-300 rounded-full w-[1000px]" />
                    <button className="absolute top-[3px] right-[6px] p-1"><IoSearchOutline /></button>
                </div>
                <div className="mr-[30px]">
                    <SigInButton />
                    <MyOrdersButton />
                </div> 
            </header>

            <nav className="py-3 px-10 flex items-center bg-red-600 text-white text-bold">
                <ul className="flex text-sm justify-center items-center space-x-4 w-full font-bold">
                    <Categories/>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </nav>        
        </div>
    );
}

export default NavBar;
