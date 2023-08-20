import {NavLink} from 'react-router-dom';

const Aside = () => {
  return (
    <div className="aside">
      <h1>MENU</h1>
      <ul className='menu--list'>
        <li className='menu--item'>
          <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">Ciudades / pueblos</NavLink>          
        </li>

        <li className='menu--item'>
          <NavLink to="/lagos">Lagos / lagunas</NavLink>         
        </li>

        <li className='menu--item'>
          <NavLink to="/rios">Rios / quebradas</NavLink>         
        </li>

        <li className='menu--item'>
        <NavLink to="/volcanes">Cerros / volcanes</NavLink>          
        </li>

        <li className='menu--item'>
          <NavLink to="/playas">Costa / playas</NavLink>         
        </li>
      </ul>
    </div>
  );
};

export default Aside;
