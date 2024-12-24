import { Box, Toolbar, Typography, Button, AppBar, Card, Paper, CardContent } from '@mui/material'
function App() {

  function redirectstore(){
    location.href='https://mawaos.github.io/walestore';
  }

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
            Hola Walee, ¿Cómo estás? Hago esta carta con mucha intención y cariño, pues debo admitir
            que, la verdad, te agarré muchísima confianza muy rápido y siento que la mejor forma de
            expresar el cariño es hacer cartas (programar cartas es my love language).
          </Typography>

          <Typography variant='h4' marginTop={3}>¿Qué me motivó a conocerte?</Typography>
          <Typography textAlign={'justify'}>
            Sinceramente, yo te veía en los ensayos y la verdad, a pesar de ser algo callada, te vi
            como una persona bastante linda. Te ves como esa clase de persona que es muy detallista y
            se preocupa por sus amistades y, pues, la verdad, es algo muy lindo que te hace única.
          </Typography>
          <Typography variant='h4' marginTop={3}>El ensayo del viernes</Typography>
          <Typography>
            Siendo sincero, yo el día del último ensayo, estaba muy motivado a hablarte, pues la verdad,
            noté que estabas sentada sola al fondo mientras todos estaban sentados con sus amigos
            (yo también estaba solo &lt;/3). Me dolió no haberte hablado en ese momento.
          </Typography>
          <Typography variant='h4' marginTop={3}>El concierto</Typography>
          <Typography>
            Recuerdo perfectamente cómo fue todo ese día. Me levanté a las 8:40, dándome cuenta de que tenía que
            llegar a las 9. Salí corriendo, pero antes de salir, agarré un papel y escribí mi número en él, pues
            ese día, amanecí con un millón de ganas de hablarle a esa chica que, a pesar de ser algo callada, se
            ve como una persona muy linda. 
          </Typography>
          <Typography marginTop={2}>
            Recuerdo cuando llegaste, te notaba algo nerviosa por todo el estrés
            que lleva ir a tocar frente al escenario (yo también tenía miedo); te sentaste al lado del niño que
            decía chistes de mal gusto (se parecía mucho a Eric Cartman) JASJASJ.
            </Typography>
            <Typography variant='h4' marginTop={3}>Después de tocar allí</Typography>
            <Typography>
              Recuerdo cuando salí del escenario y fui con mi amigo a agarrar un alfajor (no había desayunado &lt;/3),
              mi amigo y yo nos sentamos al lado tuyo. Recuerdo que estabas viendo el teléfono y, mientras hablaba
              pura tontería con mi amigo, quise integrarte a la conversación (no me prestabas atención JASJJAS), ya que 
              te veías muy seria, lo cual me daba cosita. También cuando mi amigo se fue y estaba contigo al lado, te pregunté
              tu nombre (tu nombre es muy lindo), te dije que te fue muy bien al tocar y te pregunté qué música te gustaba
              (aún no sabes KASJAS).
            </Typography>
            <Typography variant='h4' marginTop={3}>¿Qué me das a cambio de este globo?</Typography>
            <Typography>
              La razón por la cual me acerqué a ti con un globo y te pregunté qué me dabas a cambio de él, tiene
              una razón bastante cómica. Yo estaba en el salón ese donde estaban los alfajores y vi a mi amigo
              jugando con un globo de esos que estaban pegados en la pared. Yo se lo quité y le dije que deberíamos
              venderlo y con lo que nos den a cambio comprarnos la guitarra de Hello Kitty JAJASJ (por más tonto que suene).
            </Typography>
            <Typography marginTop={3}>
              Yo, <b>la primera persona en la que pensé en darle el globo, fuiste tú</b>. Más que un gesto tonto, fue hecho
              con cariño. Me acerqué a ti y dije <i><b>"Chica, ¿qué me das a cambio de este globo?"</b></i>. Mi amigo preguntó
              si nos dabas tus lentes JAJSASJSAJ (yo soy ciego así que tal vez me sirven). Sacaste
              un alfajor y unas chupetas de tu bolso, yo agarré el alfajor y te devolví la chupeta (tengo brackets &lt;/3).
            </Typography>
            <Typography variant='h4' marginTop={3}>Despedida en el escenario y cuando te ibas a ir</Typography>
            <Typography>
              Estaba al lado tuyo en el momento en el que estábamos en el escenario cerrando el concierto. Nos tomaron 
              la foto de grupo y cuando salimos del escenario y tú estabas en el backstage, a punto de irte, te das la
              vuelta y me das el globo. Yo te digo que te lo quedes y te digo que esperes, y saco del bolsillo el papel
              que previamente escribí con mi número.
            </Typography>
            <Typography variant='h4' marginTop={3}>Después de darte mi número</Typography>
            <Typography>
              Yo me fui del teatro tiempo después (fui el último en ser buscado). Llegué a mi casa, comí y también,
              me estaba muriendo de ganas de recibir algún mensaje tuyo. Recuerdo que cuando me escribiste, justo se
              me fue el internet y tuve que arreglarlo para poder hablar contigo (contestaste al día siguiente pero tranqui).
            </Typography>
            <Card sx={{ backgroundColor: 'primary.main'}}>
            <CardContent>
              <Typography variant='h4' textAlign={'justify'} sx={{color: 'sub.main'}}>Después de eso conocí a la persona más linda del mundo</Typography>
            </CardContent>
          </Card>
            <Typography variant='h4' marginTop={3}>La carta como tal</Typography>
            <Typography>
              Debo admitir que esta carta es bastante larga en comparación a otras que he hecho, pues tenía que decir un montón de
              cosas sobre cómo te conocí. Pero tras decir todo esto, quiero desearte una feliz navidad y que la pases muy bien.
              También quiero decirte que este año lo cerré bien con tan solo conocerte. También quiero decirte que nuestra amistad
              tiene 2 días especiales: tu cumpleaños, el 26 de agosto, y el 2 de diciembre que fue la primera vez que te vi, porque realmente
              el cariño que te tengo empieza desde que tuve esa primera impresión de ti &lt;3.
            </Typography>
            <Typography variant='h5' marginTop={3}>Feliz navidad, Eres una persona muy linda, te quiero muchísimo</Typography>
            <h1>AHORA, LOS REGALOS Y DETALLES PARA LA PERSONA MÁS LINDA DEL MUNDO</h1>
            <Card sx={{ backgroundColor: 'primary.main', }}>
            <CardContent>
              <h1 style={{color: 'white'}}>Tienda de regalos de Walee:</h1>
              <Button color="inherit" variant='contained' onClick={redirectstore} sx={{ color: 'secondary.main'}}>Ir a la tienda de regalos</Button>
            </CardContent>
          </Card>    
            <Typography variant='h4' marginTop={3}>Recuerda que...</Typography>

            <Card sx={{ backgroundColor: 'primary.main', }}>
            <CardContent>
              <h1 style={{color: 'white'}}>Entre tantas estrellas en el cielo, eres tú la más brillante</h1>
            </CardContent>
          </Card>       
        </Typography>



      </Box>
    </>
  )
}

export default App
