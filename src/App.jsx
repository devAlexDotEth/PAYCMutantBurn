import { Container } from './styles';
import Gallery from "./compositions/Gallery";
import Footer from './components/footer';
import Anchor from './components/anchor';
import Twitter from './components/icons/twitter';
import Youtube from './components/icons/youtube';
import Discord from './components/icons/discord';

const App = () => {
  return (
    <Container>
      <Gallery />

      <Footer
        contactLink='https://www.pepeapeyachtclub.com/contact'
        localStyles={{ position: 'fixed', bottom: 0, left: 0 }}
        socials={
          <>
            <Anchor iconOnly href="https://discord.com/invite/SXayyRHar2" target="_blank"><Discord theme="LIGHT" size="S" /></Anchor>
            <Anchor iconOnly href="https://twitter.com/PepeApeYC" target="_blank"><Twitter theme="LIGHT" size="S" /></Anchor>
            <Anchor iconOnly href="https://www.youtube.com/@pepeapeyachtclub2584" target="_blank"><Youtube theme="LIGHT" size="S" /></Anchor>
          </>
        }
      />
    </Container>
  );
};

export default App;

