import { Box, Toolbar, Typography, Button, AppBar, Card, Paper, CardContent } from '@mui/material'
function App() {

  return (
    <>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'secondary.main'}}>Para: Waleee</Typography>
          </Toolbar>
        </AppBar>

      <Box>
          <Card sx={{ backgroundColor: 'primary.main', margin: 2  }}>
            <CardContent>
              <Typography variant='h4' sx={{color: 'sub.main'}}>Para: Walee</Typography>
              <Typography variant='h4' sx={{color: 'sub.main'}}>De: Mikelin</Typography>

            </CardContent>
          </Card>
        <Typography marginX={'5%'}>
          <Typography variant='h2'>¡Hola!</Typography>
          <Typography textAlign={'justify'}>
            Hola walee, ¿Como estas?, hago esta carta mucha intencion y cariño, pues debo admitir
            que la verdad, te agarre muchisima confianza muy rapido y siento que la mejor forma de
            expresar el cariño es hacer cartas (programar cartas es my love language)
          </Typography>

          <Typography variant='h4' marginTop={3}>¿Que me motivo a conocerte?</Typography>
          <Typography textAlign={'justify'}>
            Sinceramente, yo te veia en los ensayos y la verdad, a pesar de ser algo callada, te vi
            como una persona bastante linda, te ves como esa clase de persona que es muy detallista y
            se preocupa por sus amistades y pues la verdad, es algo muy lindo que te hace unica
          </Typography>
          <Typography variant='h4' marginTop={3}>El ensayo del viernes</Typography>
          <Typography>
            Siendo sincero, yo el dia del ultimo ensayo, estaba muy motivado a hablarte, pues la verdad,
            yo noté que estabas sentada sola al fondo mientras todos estaban sentados con sus amigos
            (yo tmb estaba solo &lt;/3), Me dolio no haberte hablado en ese momento
          </Typography>
          <Typography variant='h4' marginTop={3}>El Concierto</Typography>
          <Typography>
            Recuerdo perfectamente como fue todo ese dia, me levante a las 8:40, dandome cuenta que tenia que
            llegar a las 9, sali corriendo, pero antes de salir, agarro un papel y escribo mi numero en el, pues
            ese dia, amaneci con un millon de ganas de hablarle a esa chica que a pesar de ser algo callada, se
            ve como una persona muy linda. 
          </Typography>
          <Typography marginTop={2}>
            Recuerdo cuando llegaste, te notaba algo nerviosa por todo el estres
            que lleva ir a tocar frente al escenario (yo tambien tenia miedo); te sentaste al lado del niño que
            decia chistes de mal gusto (se parecia mucho a Eric Cartman) JASJASJ
            </Typography>
            <Typography variant='h4' marginTop={3}>Despues de tocar allí</Typography>
            <Typography>
              Recuerdo cuando sali del escenario y fui con mi amigo a agarrar un alfajor (no habia desayunado &lt;/3),
              mi amigo y yo nos sentamos al lado tuyo, recuerdo que estabas viendo el telefono, y pues mienstras hablaba
              pura tonteria con mi amigo, quise integrarte a la conversacion (no me prestabas atencion JASJJAS), ya que me 
              te veia muy seria, lo cual me daba cosita, tambien, cuando mi amigo se fue y estaba contigo al lado, te pregunte
              tu nombre (tu nombre es muy lindo), te dije que te fue muy bien en al tocar y te pregunte que musica te gustaba
            </Typography>
            <Typography variant='h4' marginTop={3}>¿Que me das a cambio de este globo?</Typography>
            <Typography>
              La razon por la cual me acerque a ti con un globo y te pregunte que me dabas a cambio de el, tiene
              una razon bastante comica, pues yo estaba en el salon ese donde estaban los alfajores y vi a mi amigo
              jugando con un globo de esos que estaban pegados en la pared, yo se lo quite y le dije que deberiamos
              venderlo y con lo que nos den a cambio comprarnos la guitarra de hello kitty JAJASJ (por mas tonto que suene)
            </Typography>
            <Typography marginTop={3}>
              Yo <b>la primera persona en la que pense en darle el globo, fuiste tu</b>, mas que un gesto tonto, fue hecho
              con cariño; Me acerque a ti y dije <i><b>"Chica, ¿que me das a cambio de este globo?"</b></i>, mi amigo pregunto
              si nos dabas tus lentes JAJSASJSAJ, (yo soy ciego asi que tal vez me sirven); Sacaste
              un alfajor y unas chupetas de tu bolso, yo agarre el alfajor y te devolvi la chupeta (tengo brackets &lt;/3)
            </Typography>
            <Typography variant='h4' marginTop={3}>Despedida en el escenario y cuando te ibas a ir</Typography>
            <Typography>
              Estaba al lado tuyo en el momento en el que estabamos en el escenario cerrando el concierto, nos tomaron 
              la foto de grupo y cuando salimos del escenario y tu estabas en el backstage, a punto de irte, te das la
              vuelta y me das el globo y yo te digo que te lo quedes, y te digo que esperes, y saco del bolsillo el papel
              que previamente escribi con mi numero
            </Typography>
            <Typography variant='h4' marginTop={3}>Despues de darte mi numero</Typography>
            <Typography>
              Yo me fui de el teatro tiempo despues (fui el ultimo en ser buscado), llegue a mi casa, comi y tambien,
              me estaba muriendo de ganas de recibir algun mensaje tuyo, recuerdo que cuando me escribiste, justo se
              me fue el internet y tuve que arreglarlo para poder hablar contigo (contestaste el dia siguiente peero tranqui)
            </Typography>
            <Card sx={{ backgroundColor: 'primary.main'}}>
            <CardContent>
              <Typography variant='h4' textAlign={'justify'} sx={{color: 'sub.main'}}>Despues de eso conoci a la persona mas linda del mundo</Typography>
            </CardContent>
          </Card>
            <Typography variant='h4' marginTop={3}>La carta como tal</Typography>
            <Typography>
              Debo admitir que esta carta es bastante larga en comparacion a otras que he hecho, pues tenia que decir un monton de
              cosas que decir sobre como te conoci, pero tras decir todo esto, quiero desearte una feliz navidad y que la pases muy bien,
              tambien quiero decirte que este año, lo cerre bien, con tan solo conocerte, espero que en el 2025, seas una persona cercana
              a mi, pues no me arrepiento de conocerte
            </Typography>
            <Typography variant='h5' marginTop={3}>Eres una persona muy linda, te quiero muchiiisimo</Typography>
            <h1>AHORA, LOS REGALOS Y DETALLES PARA LA PERSONA MAS LINDA DEL MUNDO</h1>
            <Card sx={{ backgroundColor: 'primary.main', }}>
            <CardContent>
              <h1 style={{color: 'white'}}>Tienda de regalos de walee:</h1>
              <Button color="inherit" variant='contained' href="regalo" sx={{ color: 'secondary.main'}}>Ir a la tienda de regalos</Button>
            </CardContent>
          </Card>    
            <Typography variant='h4' marginTop={3}>Recuerda que...</Typography>

            <Card sx={{ backgroundColor: 'primary.main', }}>
            <CardContent>
              <h1 style={{color: 'white'}}>Entre tantas estrellas en el cielo, eres tú la mas brillante</h1>
            </CardContent>
          </Card>       
        </Typography>



      </Box>
    </>
  )
}

export default App
