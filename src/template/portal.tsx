import React from 'react';
import Stack from '../components/stack';
import Grid from '../components/grid';
import Heading from '../components/heading';
import background from '../assets/background.gif';
import Body from '../components/body';
import Box from '../components/box';

type Props = {
  children: React.ReactNode;
  toolbar: React.ReactNode;
  footer: React.ReactNode;
  title: string;
};

const Portal: React.FC<Props> = ({ children, title, toolbar }) => {
  return (
    <Stack
    direction='VERTICAL'
    localStyles={{
      marginTop: 86,
      backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url('${background}')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100vw',
      alignItems: 'center',
    }}>

    {/* Portal Tiles */}
    <Grid
      columns={1}
      gap={'var(--scale-48)'}
      localStyles={{
        padding: 'var(--scale-48)',
        gridTemplateColumns: '1fr',
        textAlign: 'center',
        '@media (min-width: 800px)': {
          marginTop: 'var(--scale-60)',
          maxWidth: 900,
          width: '100%'
        }
      }}>

      {/* HEADING */}
      <Stack direction='VERTICAL' space={'var(--scale-24)'} localStyles={{ alignItems: 'center' }}>
        <Heading level='3'>{title}</Heading>
        <Body size='M' localStyles={{ maxWidth: '60ch' }}>SELECT 5 MUTANTS TO BURN AND CLAIM ONE SERUM</Body>
      </Stack>

      {/* GALLERY SECTION */}
      <Box>
        <Stack
          direction='HORIZONTAL'
          localStyles={{
            justifyContent: 'space-between',
            background: 'rgb(0 0 0 / 50%)',
            padding: 'var(--scale-16)',
            borderTopRightRadius: 'var(--scale-8)',
            borderTopLeftRadius: 'var(--scale-8)'
          }}>
          {toolbar}
        </Stack>
        <Box
          localStyles={{
            background: 'rgb(255 255 255 / 10%)',
            minHeight: 300,
            borderBottomRightRadius: 'var(--scale-8)',
            borderBottomLeftRadius: 'var(--scale-8)',
          }}>
          <Grid columns={1} localStyles={{
            gridTemplateColumns: 'repeat(2, 1fr);',
            padding: 'var(--scale-24)',
            '@media (min-width: 600px)': {
              gridTemplateColumns: 'repeat(3, 1fr);',
            },
            '@media (min-width: 1000px)': {
              gridTemplateColumns: 'repeat(4, 1fr);',
            },
          }}>
            {children}
          </Grid>
        </Box>

      </Box>

    </Grid>

  </Stack>
  );
};

export default Portal;