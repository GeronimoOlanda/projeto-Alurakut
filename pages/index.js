
import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/alurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(props){
  return(
    <Box>
    <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}} />
   </Box>
  );
}

export default function Home() {
  const githubUser = 'GeronimoOlanda'; // criando variavel para setar o user
  const pessoasFavoritas = ['juunegreiros', 'GeronimoOlanda', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho'];

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        {/*"grid-area: profileArea;"*/}
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSideBar githubUser={githubUser}/>
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">bem vindo</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
     
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da Comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual)=>{
               
                return(
                  <li>
                    <a href={`/users/${githubUser}`} key={githubUser}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{githubUser}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
    );
}
