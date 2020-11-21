import Box from '@material-ui/core/Box';

import gallery_image from './images/gallery.png';
import astro_image from './images/astro.png';
import foa_image from './images/foa.png';
import hearts_image from './images/hearts.png';
import ordlips_image from './images/ordlips.jpg';
import mona_image from './images/mona.png';
import ordinary_image from './images/ordinary.png';
import secret_image from './images/secret.png';
import fish_gif from './images/fishies.gif';
import './App.css';

function App() {

  return (
    <div className="App">
        <Box>
          <div style={{ width: '100%' }}>
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <Box p={1} width={3/4}>
                <text className="willieText">willie</text>
                <img src={gallery_image} className="gallery-image"/>
                <img src={fish_gif} className='fish'/>
                <text className="infoText">all sketches come in hoodies for an order text 720.251.6343</text>
              </Box>
            </Box>
            <Box display="flex"justifyContent="center">
              <Box p={1} width={3/4} mt={5}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={foa_image} className="design-image-large"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={hearts_image} className="App-logo"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1} >
                  <Box p={1}>
                    <img src={ordlips_image} className="design-image"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={astro_image} className="design-image-large"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={secret_image} className="design-image-large"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={mona_image} className="design-image"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={ordinary_image} className="design-image"/>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        </Box>
    </div>
  );
}

export default App;
