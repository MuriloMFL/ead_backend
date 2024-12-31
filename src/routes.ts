import { Router } from 'express';

import { estaAutentidado } from './middlewares/estaAutentidado';

import { ControleCriarUsuario } from './controle/usuario/controleCriarUsuario';
import { ControleLogarUsuario } from './controle/usuario/controleLogarUsuario';
import { ControleDetalharUsuario } from './controle/usuario/controleDetalharUsuario';
import { ControleListarUsuarioPorFranquia } from './controle/usuario/controleListarUsuarioPorFranquia';
import { ControleInativarUsuario } from './controle/usuario/controleInativarUsuario';

import { ControleListarFranquia } from './controle/franquia/controleListarFranquia';
import { ControleCriarFranquia } from './controle/franquia/controleCriarfranquia';
import { ControleTrocarStatusFranquia } from './controle/franquia/controleTrocarStatusFranquia';
import { ControleDetalharFranquia } from './controle/franquia/controleDetalharFranquia';
import { ControleAtualizarFranquia } from './controle/franquia/controleAtualizarFranquia';

import { ControleCriarSistema } from './controle/sistema/controleCriarSistema';
import { ControleListarSistema } from './controle/sistema/controleListarSistema';
import { ControleTrocarStatusSistema } from './controle/sistema/controleTrocarStatusSistema';
import { ControleDetalharSistema } from './controle/sistema/controleDetalharSistema';
import { ControleAtualizarSistema } from './controle/sistema/controleAtualizarSistema';

import { ControleCriarModulo } from './controle/modulo/controleCriarModulo';
import { ControleListarModulo } from './controle/modulo/controleListarModulo';
import { ControleTrocarStatusModulo } from './controle/modulo/controleTrocarStatusModulo';
import { ControleDetalharModulo } from './controle/modulo/controleDetalharModulo';
import { ControleAtualizarModulo } from './controle/modulo/controleAtualizarModulo';

import { ControleCriarSubModulo } from './controle/submodulo/controleCriarSubModulo';
import { ControleListarSubModulo } from './controle/submodulo/controleListarSubModulo';
import { ControleTrocarStatusSubmodulo } from './controle/submodulo/controleTrocarStatusSubmodulo';
import { ControleDetalharSubModulo } from './controle/submodulo/controleDetalharSubModulo';
import { ControleAtualizarSubModulo } from './controle/submodulo/controleAtualizarSubModulo';

import { ControleCriarFaq } from './controle/faq/controleCriarFaq';
import { ControleListarFaq } from './controle/faq/controleListarFaq'; 
import { ControleTrocarStatusFaq } from './controle/faq/controleTrocarStatusFaq';
import { ControleDetalharFaq } from './controle/faq/controleDetalharFaq';
import { ControleAtualizarFaq } from './controle/faq/controleAtualizarFaq';

import { ControleCriarVideo } from './controle/video/controleCriarVideo';
import { ControleListarVideo } from './controle/video/controleListarVideo';
import { ControleTrocarStatusVideo } from './controle/video/controleTrocarStatusVideo';
import { ControleDetalharVideo } from './controle/video/controleDetalharVideo';
import { ControleAtualizarVideo } from './controle/video/controleAtualizarVideo';

import { ControleCriarQuestoes } from './controle/questao/controleCriarQuestao';
import { ControleListarQuestao } from './controle/questao/controleListarQuestao';
import { ControleTrocarStatusQuestao } from './controle/questao/controleTrocarStatusQuestao';
import { ControleDetalharQuestao } from './controle/questao/controleDetalharQuestao';
import { ControleAtualizarQuestao } from './controle/questao/controleAtualizarQuestao';

import { ControleCriarAula } from './controle/aula/controleCriarAula';
import { ControleListarAula } from './controle/aula/controleListarAula';
import { ControleTrocarStatusAula } from './controle/aula/controleTrocarStatusAula';
import { ControleDetalharAula } from './controle/aula/controleDetalharAula';
import { ControleAtualizarAula } from './controle/aula/controleAtualizarAula';

import { ControleCriarProva } from './controle/prova/controleCriarProva';
import { ControleListarProva } from './controle/prova/controleListarProva';
import { ControleTrocarStatusProvas } from './controle/prova/controleTrocarStatusProva';
import { ControleDetalharProva } from './controle/prova/controleDetalharProva';
import { ControleAtualizarProva } from './controle/prova/controleAtualizarProva';

import { ControleCriarRelease } from './controle/release/controleCriarRelease';
import { ControleListarRelease } from './controle/release/controleListarRelease';
import { ControleTrocarStatusRelease } from './controle/release/controleTrocarStatusRelease';
import { ControleDetalharRelease } from './controle/release/controleDetalharRelease';
import { ControleAtualizarRelease } from './controle/release/controleAtualizarRelease';

import { ControleCriarReleaseItem } from './controle/release_item/controleCriarReleaseItem';
import { ControleListarReleaseItem } from './controle/release_item/controleListarReleaseItem';
import { ControleDetalharReleaseItem } from './controle/release_item/controleDetalharReleaseItem';
import { ControleAtualizarReleaseItem } from './controle/release_item/controleAtualizarReleaseItem';

import { ControleCriarPlanejamento } from './controle/planejamento/controleCriarPlanejamento';
import { ControleListarPlanejamento } from './controle/planejamento/controleListarPlanejamento';
import { ControleDetalharPlanejamento } from './controle/planejamento/controleDetalharPlanejamento';
import { ControleTrocarStatusPlanejamento } from './controle/planejamento/controleTrocarStatusPLanejamento';
import { ControleAtualizarPlanejamento } from './controle/planejamento/controleAtualizarPlanejamento';

import { ControleCriarMvRelease } from './controle/release_mv/controleCriarMvRelease';
import { ControleCriarMvAula } from './controle/aula_mv/controleCriarMvAula';
import { ControleCriarMvVideo } from './controle/video_mv/controleCriarMvVideo';
import { ControleCriarMvFaq } from './controle/faq_mv/controleCriarMvFaq';
import { ControleCriarMvQuestao } from './controle/questao_mv/controleCriarMvQuestao';
import { ControleCriarMvProva } from './controle/prova_mv/controleCriarMvProva';
import { ControleDetalharCadUsuario } from './controle/usuario/controleDetalharCadUsuario';

const router = Router();

router.post('/usuario/criar', new ControleCriarUsuario().handle)
router.post('/logarusuario', new ControleLogarUsuario().handle)
router.get('/detalharusuario', estaAutentidado, new ControleDetalharUsuario().handle)
router.get('/detalharcadusuario', estaAutentidado, new ControleDetalharCadUsuario().handle)
router.get('/listarusuarioporfranquia', estaAutentidado, new ControleListarUsuarioPorFranquia().handle)
router.put('/trocarstatususuario', estaAutentidado, new ControleInativarUsuario().handle)

router.post('/criarfranquia', new ControleCriarFranquia().handle)
router.get('/listarfranquia',   estaAutentidado, new ControleListarFranquia().handle)
router.get('/detalharfranquia/:id_franquia', estaAutentidado, new ControleDetalharFranquia().handle)
router.put('/trocarstatusfranquia', estaAutentidado, new ControleTrocarStatusFranquia().handle)
router.put('/atualizarfranquia', estaAutentidado, new ControleAtualizarFranquia().handle)

router.post('/criarsistema', estaAutentidado, new ControleCriarSistema().handle)
router.get('/listarsistema', estaAutentidado, new ControleListarSistema().handle)
router.put('/trocarstatussistema', estaAutentidado, new ControleTrocarStatusSistema().handle)
router.get('/detalharsistema/:id_sistema', estaAutentidado, new ControleDetalharSistema().handle)
router.put('/atualizarsistema', estaAutentidado, new ControleAtualizarSistema().handle)

router.post('/criarmodulo', estaAutentidado, new ControleCriarModulo().handle)
router.get('/listarmodulo', estaAutentidado, new ControleListarModulo().handle)
router.put('/trocarstatusmodulo', estaAutentidado, new ControleTrocarStatusModulo().handle)
router.get('/detalharmodulo/:id_modulo', estaAutentidado, new ControleDetalharModulo().handle)
router.put('/atualizarmodulo', estaAutentidado, new ControleAtualizarModulo().handle)

router.post('/criarsubmodulo', estaAutentidado, new ControleCriarSubModulo().handle)
router.get('/listarsubmodulo', estaAutentidado, new ControleListarSubModulo().handle)
router.put('/trocarstatussubmodulo', estaAutentidado, new ControleTrocarStatusSubmodulo().handle)
router.get('/detalharsubmodulo/:id_submodulo', estaAutentidado, new ControleDetalharSubModulo().handle)
router.put('/atualizarsubmodulo', estaAutentidado, new ControleAtualizarSubModulo().handle)

router.post('/criarfaq', estaAutentidado, new ControleCriarFaq().handle)
router.get('/listarfaq', estaAutentidado, new ControleListarFaq().handle)
router.put('/trocarstatusfaq', estaAutentidado, new ControleTrocarStatusFaq().handle)
router.get('/detalharfaq/:id_faq', estaAutentidado, new ControleDetalharFaq().handle)
router.put('/atualizarfaq', estaAutentidado, new ControleAtualizarFaq().handle)

router.post('/criarvideo', estaAutentidado, new ControleCriarVideo().handle)
router.get('/listarvideo', estaAutentidado, new ControleListarVideo().handle)
router.put('/trocarstatusvideo', estaAutentidado, new ControleTrocarStatusVideo().handle)
router.get('/detalharvideo/:id_video', estaAutentidado, new ControleDetalharVideo().handle)
router.put('/atualizarvideo', estaAutentidado, new ControleAtualizarVideo().handle)

router.post('/criarquestoes', estaAutentidado, new ControleCriarQuestoes().handle)
router.get('/listarquestao', estaAutentidado, new ControleListarQuestao().handle)
router.put('/trocarstatusquestao', estaAutentidado, new ControleTrocarStatusQuestao().handle)
router.get('/detalharquestao/:id_questao', estaAutentidado, new ControleDetalharQuestao().handle)
router.put('/atualizarquestao', estaAutentidado, new ControleAtualizarQuestao().handle)

router.post('/criaraula', estaAutentidado, new ControleCriarAula().handle)
router.get('/listaraula', estaAutentidado, new ControleListarAula().handle)
router.put('/trocarstatusaula', estaAutentidado, new ControleTrocarStatusAula().handle)
router.get('/detalharaula/:id_aula', estaAutentidado, new ControleDetalharAula().handle)
router.put('/atualizaraula', estaAutentidado, new ControleAtualizarAula().handle)

router.post('/criarprova', estaAutentidado, new ControleCriarProva().handle)
router.get('/listarprova', estaAutentidado, new ControleListarProva().handle)
router.put('/trocarstatusprova', estaAutentidado, new ControleTrocarStatusProvas().handle)
router.get('/detalharprova/:id_prova', estaAutentidado, new ControleDetalharProva().handle)
router.put('/atualizarprova', estaAutentidado, new ControleAtualizarProva().handle)

router.post('/criarrelease', estaAutentidado, new ControleCriarRelease().handle)
router.get('/listarrelease', estaAutentidado, new ControleListarRelease().handle)
router.put('/trocarstatusrelease', estaAutentidado, new ControleTrocarStatusRelease().handle)
router.get('/detalharrelease/:id_release', estaAutentidado, new ControleDetalharRelease().handle)
router.put('/atualizarrelease', estaAutentidado, new ControleAtualizarRelease().handle)

router.post('/criarreleaseitem', estaAutentidado, new ControleCriarReleaseItem().handle)
router.get('/listarreleaseitem', estaAutentidado, new ControleListarReleaseItem().handle)
router.get('/detalharreleaseitem/:id_item_release', estaAutentidado, new ControleDetalharReleaseItem().handle)
router.put('/atualizarreleaseitem', estaAutentidado, new ControleAtualizarReleaseItem().handle)

router.post('/criarplanejamento', estaAutentidado, new ControleCriarPlanejamento().handle)
router.get('/listarplanejamento', estaAutentidado, new ControleListarPlanejamento().handle)
router.put('/trocarstatusplanejamento', estaAutentidado, new ControleTrocarStatusPlanejamento().handle)
router.get('/detalharplanejamento/:id_planejamento', estaAutentidado, new ControleDetalharPlanejamento().handle)
router.put('/atualizarplanejamento', estaAutentidado, new ControleAtualizarPlanejamento().handle)

router.post('/criarmvrelease', estaAutentidado, new ControleCriarMvRelease().handle)

router.post('/criarmvAula', estaAutentidado, new ControleCriarMvAula().handle)

router.post('/criarmvvideo', estaAutentidado, new ControleCriarMvVideo().handle)

router.post('/criarmvfaq', estaAutentidado, new ControleCriarMvFaq().handle)

router.post('/criarmvquestao', estaAutentidado, new ControleCriarMvQuestao().handle)

router.post('/criarmvprova', estaAutentidado, new ControleCriarMvProva().handle)

export { router };