import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import ButtonBase from '@mui/material/ButtonBase';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';

// Redux-related imports
import { selectCustomization, menuOpen } from '@slice/customizationSlice';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
   const defaultId = useSelector(selectCustomization.defaultId);
   const dispatch = useDispatch();
   return (
      <ButtonBase disableRipple onClick={() => dispatch(menuOpen({ id: defaultId }))} component={Link} to={config.defaultPath}>
         <Logo />
      </ButtonBase>
   );
};

export default LogoSection;
