//init
import React , {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

//Import Custom Components
import PersistentDrawer from './PersistentDrawer';
import ButtonPrimary from './buttons/ButtonPrimary';
//import assets
import photo from '../Assets/worldbg.png';

function HeroBanner(props) {

  return <div style={{margin: "auto", height: 300,backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundImage: `url(${photo})`}}>
    {props.children}
  </div>
}

export default function BaseForPage(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <HeroBanner>
        <PersistentDrawer openDrawer={openDrawer}/>
        <div style={{display: 'flex', justifyContent: "center", paddingTop: 120}}>
          <ButtonPrimary onClick={()=> setOpenDrawer(!openDrawer) } style={{marginLeft: 15}} variant="contained" color="primary">
            Search Crime Reports in your town/city area ...
          </ButtonPrimary>
        </div>
      </HeroBanner>
      <CssBaseline />
      <Container maxWidth="md">
        {props.children}
      </Container>
    </React.Fragment>
  );
}