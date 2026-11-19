import { DDragonChampionSummary, LaneTag } from '../utils/ddragon';

export interface RankedCounterPick {
  championId: string;
  rank: 1 | 2 | 3;
  reason: string;
}

export interface ChampionLaneMatchup {
  lanes: LaneTag[];
  byLane: Partial<Record<LaneTag, RankedCounterPick[]>>;
}

function picks(
  c1: [string, string],
  c2: [string, string],
  c3: [string, string]
): RankedCounterPick[] {
  return [
    { championId: c1[0], rank: 1, reason: c1[1] },
    { championId: c2[0], rank: 2, reason: c2[1] },
    { championId: c3[0], rank: 3, reason: c3[1] },
  ];
}

// Primary lanes & ranked Top 3 Counters for League of Legends champions.
// Preserves exact spreadsheet order for Aatrox (TOP & JUNGLE) and provides full roster coverage.
export const CHAMPION_MATCHUPS: Record<string, ChampionLaneMatchup> = {
  Aatrox: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Fiora', 'Ripostar bloqueia o Q3 e a mobilidade esquiva dos pontos doces.'],
        ['Irelia', 'Avança pelos minions para neutralizar o alcance do Q de Aatrox.'],
        ['Kled', 'Corta cura natural no Q e pressão constante no nível 2 e 3.']
      ),
      JUNGLE: picks(
        ['Graves', 'Kite fácil na selva e armadura extra em trocas prolongadas.'],
        ['Kindred', 'Mobilidade alta para desviar dos Qs e escalar nos acampamentos.'],
        ['Elise', 'Explosão no início do jogo e Casulo para punir o avanço.']
      ),
    },
  },
  Ahri: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Yasuo', 'Parede de Vento bloqueia o Charme (E) e o retorno do Q.'],
        ['Kassadin', 'Reduz dano mágico na passiva e acompanha os dashes no nível 6.'],
        ['Annie', 'Dano instantâneo confiável para punir quando o R estiver em recarga.']
      ),
    },
  },
  Akali: {
    lanes: ['MID', 'TOP'],
    byLane: {
      MID: picks(
        ['Galio', 'W revela e provoca dentro da Proteção do Crepúsculo com alta resistência mágica.'],
        ['Lissandra', 'Controle de grupo garantido no W e R para travar a mobilidade.'],
        ['Vex', 'Passiva pune cada avanço do E e da ultimate da Akali.']
      ),
      TOP: picks(
        ['Mordekaiser', 'Leva para o Reino da Morte e ignora a área da fumaça com passiva.'],
        ['Pantheon', 'Stun garantido no W e pressão dominante nos níveis iniciais.'],
        ['Kled', 'E revela a invisibilidade e impede recuo seguro na rota.']
      ),
    },
  },
  Akshan: {
    lanes: ['MID', 'TOP'],
    byLane: {
      MID: picks(
        ['Yasuo', 'Parede de Vento anula o Q, ataques e a ultimate inteira.'],
        ['Irelia', 'Fecha a distância rapidamente e interrompe o balanço do E.'],
        ['Malphite', 'Armadura alta neutraliza as trocas de ataque básico.']
      ),
      TOP: picks(
        ['Malphite', 'Escala armadura facilmente e pune após o nível 6 sem resposta.'],
        ['Irelia', 'Estoura em all-in após cortar o gancho com o E.'],
        ['Jax', 'Contra-Ataque ignora os disparos duplos da passiva.']
      ),
    },
  },
  Alistar: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula o combo de W+Q na iniciação.'],
        ['Janna', 'Furacão interrompe o avanço do W no meio do trajeto.'],
        ['Braum', 'Protege o atirador e pune a entrada corpo a corpo com passiva.']
      ),
    },
  },
  Ambessa: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Poppy', 'Presença Inabalável bloqueia todos os dashes da passiva.'],
        ['Renekton', 'Trocas curtas com W impedem a sequência de avanços.'],
        ['Warwick', 'Sustentação absurda em duelos corpo a corpo prolongados.']
      ),
      JUNGLE: picks(
        ['Poppy', 'W trava a mobilidade em lutas e invasões na selva.'],
        ['Kindred', 'Mantém distância segura e derrete em trocas com marcações.'],
        ['Nocturne', 'Escudo de feitiço bloqueia controle e vence o 1v1 direto.']
      ),
    },
  },
  Amumu: {
    lanes: ['JUNGLE', 'SUPORTE'],
    byLane: {
      JUNGLE: picks(
        ['Olaf', 'Ragnarok anula completamente as duas cargas de Q e a ultimate.'],
        ['Lillia', 'Kite contínuo e dano verdadeiro em percentual de vida máxima.'],
        ['Trundle', 'Rouba resistências no R e vence qualquer invasão cedo.']
      ),
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro protege o alvo do Q e do R em lutas 2v2.'],
        ['Janna', 'Afasta o Amumu após a entrada com o Q e protege o atirador.'],
        ['Alistar', 'Devolve controle e isola o atirador inimigo da jogada.']
      ),
    },
  },
  Anivia: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Fizz', 'Pula a parede de gelo e desvia do Q com o Salto do E.'],
        ['Kassadin', 'Interrompe a canalização do R com o Q e escala livremente.'],
        ['Xerath', 'Alcance superior para limpar ondas e punir sem entrar no Q.']
      ),
    },
  },
  Annie: {
    lanes: ['MID', 'SUPORTE'],
    byLane: {
      MID: picks(
        ['Syndra', 'Empurra o Tibbers e controla a rota fora do alcance do Q.'],
        ['Orianna', 'Pressão segura com a esfera e escudo para absorver o combo.'],
        ['Galio', 'Resistência mágica natural sobrevive ao burst completo.']
      ),
      SUPORTE: picks(
        ['Xerath', 'Aplica poke muito além do alcance de iniciação da Annie.'],
        ['Morgana', 'Escudo Negro bloqueia o atordoamento da passiva.'],
        ['Lux', 'Controla a dupla à distância e pune antes do nível 6.']
      ),
    },
  },
  Aphelios: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Draven', 'Pressão brutal desde o nível 1 antes de Aphelios escalar.'],
        ['Twitch', 'Surpreende na invisibilidade e explode fora de posição.'],
        ['Caitlyn', 'Vantagem de alcance para punir cada minion na fase de rotas.']
      ),
    },
  },
  Ashe: {
    lanes: ['ADC', 'SUPORTE'],
    byLane: {
      ADC: picks(
        ['Sivir', 'Escudo de Feitiço bloqueia a Flecha de Cristal ou o W.'],
        ['Tristana', 'Pula para cima quando Ashe não tem flash e vence no burst.'],
        ['Samira', 'Bloqueia flechas com o W e domina o all-in 2v2.']
      ),
      SUPORTE: picks(
        ['Blitzcrank', 'Puxa Ashe imóvel e força Flash ou abate imediato.'],
        ['Nautilus', 'Iniciação implacável em campeã sem mobilidade.'],
        ['Pyke', 'Pune posicionamento avançado e controla a visão da rota.']
      ),
    },
  },
  AurelionSol: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Fizz', 'Cancela o voo com burst e pune cada tentativa de farmar o E.'],
        ['Yone', 'Fecha a distância rapidamente e interrompe o Q canalizado.'],
        ['Kassadin', 'Q interrompe o sopro contínuo e acompanha o voo no nível 6.']
      ),
    },
  },
  Aurora: {
    lanes: ['MID', 'TOP'],
    byLane: {
      MID: picks(
        ['Viktor', 'Empurra a rota com segurança e pune o alcance curto do Q.'],
        ['Kassadin', 'Aguenta o poke mágico e supera em mobilidade após o 6.'],
        ['Syndra', 'E afasta durante o salto e vence nas trocas à distância.']
      ),
      TOP: picks(
        ['Nasus', 'Sustenta o poke na passiva e escala livremente na rota.'],
        ['DrMundo', 'Ignora o dano mágico com regeneração e pressiona o split.'],
        ['Mordekaiser', 'Puxa no E e anula o espaço da ultimate de Aurora.']
      ),
    },
  },
  Azir: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Xerath', 'Supera o alcance dos soldados e pune a fase de rotas.'],
        ['Kassadin', 'Escala com segurança e salta por cima da linha de frente.'],
        ['Zed', 'Troca de sombras evita a ultimate e pressiona antes do 1º item.']
      ),
    },
  },
  Bard: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula o Q e protege o alvo da ultimate.'],
        ['Nautilus', 'Pune o atirador sozinho sempre que Bardo sai para coletar sinos.'],
        ['Pyke', 'Acompanha as rotações pelo mapa e vence escaramuças cedo.']
      ),
    },
  },
  Belveth: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Rammus', 'Espinhos e provocação destroem a altíssima velocidade de ataque.'],
        ['Jax', 'Contra-Ataque ignora toda a rajada do E e dos ataques básicos.'],
        ['Poppy', 'W trava os avanços do Q e impede o reset em lutas.']
      ),
    },
  },
  Blitzcrank: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro torna o puxão inútil na fase de rotas.'],
        ['Alistar', 'Se for puxado, entrega iniciação gratuita no atirador inimigo.'],
        ['Leona', 'Usa o puxão como aproximação para engajar direto na retaguarda.']
      ),
    },
  },
  Brand: {
    lanes: ['SUPORTE', 'JUNGLE', 'MID'],
    byLane: {
      SUPORTE: picks(
        ['Xerath', 'Aplica poke à distância sem nunca entrar no alcance do E+Q.'],
        ['Velkoz', 'Supera em alcance e pune Brand imóvel quando erra o W.'],
        ['Nautilus', 'Explode Brand frágil com controle encadeado no 2v2.']
      ),
      JUNGLE: picks(
        ['Khazix', 'Invade cedo e isola Brand sem ferramentas de fuga.'],
        ['Rengar', 'Elimina instantaneamente nos arbustos da selva.'],
        ['LeeSin', 'Pressão inicial forte para atrasar o crescimento do mago.']
      ),
      MID: picks(
        ['Fizz', 'Desvia do pilar e do stun com o E para abater no nível 6.'],
        ['Syndra', 'Controla a rota com maior alcance e cancela avanços com E.'],
        ['Zed', 'Mobilidade das sombras garante abate fácil após o 6.']
      ),
    },
  },
  Braum: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro impede o atordoamento da passiva Concussão.'],
        ['Zyra', 'Plantas aplicam dano contínuo contornando o escudo direcional.'],
        ['Karma', 'Poke constante e escudo com velocidade para desengajar.']
      ),
    },
  },
  Briar: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Jax', 'Contra-Ataque ignora todos os golpes durante o frenesi do W.'],
        ['Rammus', 'Provoca e devolve dano pesado na velocidade de ataque.'],
        ['Lillia', 'Corre muito mais rápido e queima enquanto Briar persegue.']
      ),
      TOP: picks(
        ['Jax', 'Bloqueia o frenesi e pune quando o E está em recarga.'],
        ['Teemo', 'Cegueira anula a janela inteira de dano de ataque básico.'],
        ['Malphite', 'Armadura alta e redução de velocidade de ataque no E.']
      ),
    },
  },
  Caitlyn: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Sivir', 'Escudo absorve armadilhas/Q e empurra a onda igual ou mais rápido.'],
        ['Ashe', 'Inicia de longe com o R e iguala a pressão nas trocas.'],
        ['Jhin', 'Acompanha no alcance do W/R e pune recargas com o 4º tiro.']
      ),
    },
  },
  Camille: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Jax', 'Contra-Ataque bloqueia o Q2 verdadeiro e domina duelos longos.'],
        ['Poppy', 'W cancela o Gancho (E) no ar e impede qualquer iniciação.'],
        ['Renekton', 'W quebra o escudo da passiva e vence as trocas cedo.']
      ),
    },
  },
  Cassiopeia: {
    lanes: ['MID', 'TOP'],
    byLane: {
      MID: picks(
        ['Syndra', 'Mantém distância segura e explode fora do alcance do E.'],
        ['Xerath', 'Poke constante muito além da zona do Miasma (W).'],
        ['Orianna', 'Controla a onda sem precisar avançar no veneno.']
      ),
      TOP: picks(
        ['Olaf', 'Ultimate ignora tanto a lentidão do W quanto o stun do R.'],
        ['DrMundo', 'Passiva bloqueia o stun da ultimate e escala resistência mágica.'],
        ['Irelia', 'Avança pelos minions antes que Cassiopeia acumule dano.']
      ),
    },
  },
  Chogath: {
    lanes: ['TOP', 'MID'],
    byLane: {
      TOP: picks(
        ['Vayne', 'Dano verdadeiro em vida máxima derrete o tanque sem esforço.'],
        ['Fiora', 'Ripostar devolve o Q e os pontos vitais punem vida alta.'],
        ['Gwen', 'Cura e derrete vida máxima com Q e passiva na rota.']
      ),
      MID: picks(
        ['Sylas', 'Rouba a ultimate para ganhar vida extra e vence trocas longas.'],
        ['Ahri', 'Mobilidade desvia fácil do Q e pune o corpo grande.'],
        ['Anivia', 'Controla a onda e impede a aproximação para usar o R.']
      ),
    },
  },
  Corki: {
    lanes: ['MID', 'ADC'],
    byLane: {
      MID: picks(
        ['Syndra', 'Burst alto para punir após Corki gastar o W.'],
        ['Viktor', 'Escala em área e pressiona a rota desde os primeiros níveis.'],
        ['Tristana', 'Pula para cima quando o W estiver em recarga.']
      ),
      ADC: picks(
        ['Caitlyn', 'Maior alcance para punir cada tentativa de farm.'],
        ['Draven', 'Domina trocas diretas antes de Corki fechar dois itens.'],
        ['Lucian', 'Burst explosivo nível 2-3 pune o início fraco de Corki.']
      ),
    },
  },
  Darius: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Vayne', 'Empurra no E, rola fora do Q e pune cada passo à frente.'],
        ['Quinn', 'Interrompe o puxão com o E e controla a rota à distância.'],
        ['MonkeyKing', 'Avança para dentro do cabo do Q e vence com clone no nível 6.']
      ),
    },
  },
  Diana: {
    lanes: ['JUNGLE', 'MID'],
    byLane: {
      JUNGLE: picks(
        ['Mordekaiser', 'Vence qualquer duelo 1v1 e isola no R após a entrada.'],
        ['LeeSin', 'Invade nos primeiros níveis e ganha trocas curtas na selva.'],
        ['Warwick', 'Sustenta o combo completo e vira o duelo com pouca vida.']
      ),
      MID: picks(
        ['Galio', 'W reduz o burst mágico e responde todas as iniciações.'],
        ['Cassiopeia', 'Miasma impede o segundo dash e derrete Diana de perto.'],
        ['Mordekaiser', 'Impede Diana de sair da troca e vence pelo escudo e passiva.']
      ),
    },
  },
  Draven: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Nilah', 'W bloqueia os machados e escala melhor nas lutas 2v2.'],
        ['Caitlyn', 'Usa armadilhas exatamente onde os machados vão cair.'],
        ['Ashe', 'Lentidão constante atrapalha o ritmo de pegar os machados.']
      ),
    },
  },
  DrMundo: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Gwen', 'Dano em vida máxima e tesourada punem Mundo facilmente.'],
        ['Aatrox', 'Pressão inicial forte e controle antes da ultimate escalar.'],
        ['Kled', 'Corta cura no Q e atropela o início fraco de Mundo.']
      ),
      JUNGLE: picks(
        ['Lillia', 'Dano percentual e velocidade para nunca ser atingida pelo Q.'],
        ['Kindred', 'Derrete tanques com passiva e domina invasões cedo.'],
        ['Viego', 'Espada do Rei e resets destroem a barra de vida alta.']
      ),
    },
  },
  Ekko: {
    lanes: ['MID', 'JUNGLE'],
    byLane: {
      MID: picks(
        ['Kassadin', 'Absorve dano mágico e escala melhor nas laterais.'],
        ['Sylas', 'Vence trocas prolongadas com cura no W e rouba a ultimate.'],
        ['Leblanc', 'Correntes prendem Ekko antes que consiga ativar a passiva.']
      ),
      JUNGLE: picks(
        ['Khazix', 'Invade cedo e vence o 1v1 isolado antes do nível 6.'],
        ['Warwick', 'Cura mais do que o burst inicial de Ekko na selva.'],
        ['Poppy', 'W interrompe o dash do E e impede o uso limpo do combo.']
      ),
    },
  },
  Elise: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Nocturne', 'Escudo bloqueia o Casulo (E) e domina o 1v1 direto.'],
        ['Olaf', 'Ultimate ignora o Casulo e atropela nas escaramuças.'],
        ['Karthus', 'Limpa a selva muito mais rápido e supera no impacto global.']
      ),
    },
  },
  Evelynn: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['RekSai', 'Sentido Sísmico detecta Evelynn camuflada antes do abate.'],
        ['Rengar', 'Ultimate revela a invisibilidade e vence invasões cedo.'],
        ['LeeSin', 'Invade os acampamentos pré-6 e revela com o Q/E.']
      ),
    },
  },
  Ezreal: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Sivir', 'Escudo absorve o W+Q e empurra a rota sob a torre.'],
        ['Vayne', 'Escala muito mais forte e desvia dos disparos com o Q.'],
        ['Kalista', 'Pressão constante na rota e dodge contínuo nos skillshots.']
      ),
    },
  },
  Fiddlesticks: {
    lanes: ['JUNGLE', 'SUPORTE'],
    byLane: {
      JUNGLE: picks(
        ['XinZhao', 'Invade nos primeiros níveis e interrompe a drenagem com Q3/R.'],
        ['Olaf', 'Ragnarok anula o medo do Q e derrete Fiddlesticks de perto.'],
        ['LeeSin', 'Chute afasta Fiddlesticks logo após a entrada da ultimate.']
      ),
      SUPORTE: picks(
        ['Janna', 'Furacão e R cancelam a drenagem e afastam a ultimate.'],
        ['Alistar', 'Cabeçada expulsa Fiddlesticks da equipe durante o R.'],
        ['Morgana', 'Escudo Negro neutraliza o medo do Q na fase de rotas.']
      ),
    },
  },
  Fiora: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Malphite', 'Armadura pesada e redução de velocidade de ataque no E.'],
        ['Poppy', 'W trava o Q e a parede anula ângulos da ultimate.'],
        ['Kennen', 'Poke constante e mobilidade no E para escapar do all-in.']
      ),
    },
  },
  Fizz: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Galio', 'W e resistências absorvem todo o combo do nível 6.'],
        ['Lissandra', 'Ultimate própria anula o tubarão e trava Fizz no lugar.'],
        ['Pantheon', 'Escudo do E bloqueia a explosão e pune no corpo a corpo.']
      ),
    },
  },
  Galio: {
    lanes: ['MID', 'SUPORTE'],
    byLane: {
      MID: picks(
        ['Lucian', 'Dano físico contínuo ignora o escudo mágico do Galio.'],
        ['Tristana', 'Pressiona torres e vence trocas com dano físico explosivo.'],
        ['Yasuo', 'Dano físico sustentado corta a resistência natural de Galio.']
      ),
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula o E e a provocação do W na rota.'],
        ['Braum', 'Protege o atirador na entrada e pune o corpo a corpo.'],
        ['Janna', 'Interrompe o soco do E com o Furacão com facilidade.']
      ),
    },
  },
  Gangplank: {
    lanes: ['TOP', 'MID'],
    byLane: {
      TOP: picks(
        ['Akshan', 'Ataque duplo estoura os barris antes de Gangplank detonar.'],
        ['Lucian', 'Ataques rápidos garantem o último hit nos barris na rota.'],
        ['Irelia', 'Fecha a distância rapidamente e limpa barris com o Q.']
      ),
      MID: picks(
        ['Azir', 'Soldados e alcance longo destroem barris com segurança.'],
        ['Lucian', 'Punição imediata no nível 2 e facilidade para quebrar barris.'],
        ['Viktor', 'Laser limpa ondas e controla o ritmo fora do alcance do Q.']
      ),
    },
  },
  Garen: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Camille', 'Escudo da passiva absorve o Q e dano verdadeiro atravessa o W.'],
        ['Kayle', 'Kite fácil após o nível 6 e R salva da execução do Garen.'],
        ['Vayne', 'Empurra no E e impede Garen de encostar durante a rota.']
      ),
    },
  },
  Gnar: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Irelia', 'Avança facilmente no Mini Gnar antes de encher a fúria.'],
        ['Malphite', 'Q desacelera e R pune a janela de transformação.'],
        ['Yasuo', 'Bloqueia o bumerangue e tem mobilidade igual pelos minions.']
      ),
    },
  },
  Gragas: {
    lanes: ['TOP', 'JUNGLE', 'MID'],
    byLane: {
      TOP: picks(
        ['Mordekaiser', 'Sustenta as trocas curtas e vence dentro do Reino da Morte.'],
        ['Yorick', 'Dama e andarilhos bloqueiam a barrigada e pressionam a rota.'],
        ['Gwen', 'W evita o R à distância e derrete vida em trocas longas.']
      ),
      JUNGLE: picks(
        ['Kindred', 'Desvia da barrigada e pune nos acampamentos iniciais.'],
        ['Graves', 'Limpa rápido e mantém vantagem física nas escaramuças.'],
        ['Nidalee', 'Ritmo acelerado na selva pune recargas altas de Gragas.']
      ),
      MID: picks(
        ['Ahri', 'Desvia do E/R com os avanços e pune à distância.'],
        ['Viktor', 'Escala livremente e controla a onda sem se expor.'],
        ['Sylas', 'Usa a própria ultimate de Gragas com maior poder de duelo.']
      ),
    },
  },
  Graves: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Evelynn', 'Dano mágico ignora a armadura acumulada pelo E de Graves.'],
        ['Lillia', 'Dano mágico contínuo e velocidade para desviar dos tiros.'],
        ['Rammus', 'Acumula armadura ainda maior e reflete os disparos pesados.']
      ),
    },
  },
  Gwen: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Jax', 'Contra-Ataque ignora os ataques que carregam as tesouradas.'],
        ['Fiora', 'Responde dentro da névoa e ganha duelos móveis com o Q.'],
        ['Tryndamere', 'Ultimate impede a execução e atropela no início do jogo.']
      ),
      JUNGLE: picks(
        ['MasterYi', 'Ignora lentidão e vence no duelo 1v1 dentro da névoa.'],
        ['XinZhao', 'Pressão inicial muito forte antes de Gwen fechar itens.'],
        ['Warwick', 'Domina invasões cedo antes de Gwen escalar poder de habilidade.']
      ),
    },
  },
  Hecarim: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Poppy', 'W para o avanço do E instantaneamente em qualquer gank.'],
        ['Trundle', 'Pilar quebra a velocidade e R rouba as resistências.'],
        ['Briar', 'Vence lutas prolongadas de corpo a corpo na selva.']
      ),
    },
  },
  Heimerdinger: {
    lanes: ['TOP', 'MID', 'SUPORTE'],
    byLane: {
      TOP: picks(
        ['Sion', 'E joga as torres longe com facilidade e limpa ondas seguro.'],
        ['Irelia', 'Usa as próprias torres como alvo de reset rápido do Q.'],
        ['Yasuo', 'Parede bloqueia granada/mísseis e limpa torres sem risco.']
      ),
      MID: picks(
        ['Syndra', 'Pega as torres com o W e arremessa longe da rota.'],
        ['Xerath', 'Destrói as torres de fora do alcance sem tomar dano.'],
        ['Lux', 'Limpa torres e minions juntos com E à distância segura.']
      ),
      SUPORTE: picks(
        ['Lux', 'Aplica dano direto por trás das torres e pune Heimerdinger.'],
        ['Xerath', 'Remove torres do mapa sem arriscar entrar na granada.'],
        ['Zyra', 'Igual ou maior controle de zona na rota inferior.']
      ),
    },
  },
  Hwei: {
    lanes: ['MID', 'SUPORTE'],
    byLane: {
      MID: picks(
        ['Fizz', 'Pula por cima dos feitiços lentos e explode no nível 6.'],
        ['Zed', 'Sombras contornam o controle de zona e punem pouca mobilidade.'],
        ['Yasuo', 'Parede bloqueia QE, EW e R deixando Hwei exposto.']
      ),
      SUPORTE: picks(
        ['Blitzcrank', 'Puxa Hwei imóvel sempre que erra o medo (EQ).'],
        ['Pyke', 'Mobilidade alta para flanquear e punir recargas longas.'],
        ['Nautilus', 'Força entrada pesada sobre mago sem fuga.']
      ),
    },
  },
  Illaoi: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Mordekaiser', 'Leva para o Reino da Morte deixando todos os tentáculos para trás.'],
        ['Yorick', 'Andarilhos bloqueiam o E e a Donzela pressiona à distância.'],
        ['Kayle', 'Desvia dos tentáculos após o 6 e salva aliados/si com R.']
      ),
    },
  },
  Irelia: {
    lanes: ['TOP', 'MID'],
    byLane: {
      TOP: picks(
        ['Sett', 'Vence trocas nível 1-3 e W pune quando Irelia entra de Q.'],
        ['Jax', 'Contra-Ataque ignora toda a sequência de ataques com passiva cheia.'],
        ['Volibear', 'Atordoa no Q e estoura no W/E antes de Irelia acumular cura.']
      ),
      MID: picks(
        ['Vex', 'Passiva aplica medo em cada avanço do Q de Irelia.'],
        ['Pantheon', 'Stun garantido e escudo do E quebram a janela de all-in.'],
        ['Malphite', 'Armadura e redução de velocidade de ataque travam o duelo.']
      ),
    },
  },
  Ivern: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Rengar', 'Usa os próprios arbustos do Ivern para saltar sem parar.'],
        ['Khazix', 'Invade cedo e isola Ivern longe da Margarida.'],
        ['Graves', 'Limpa os campos roubados rapidamente e domina o mapa.']
      ),
    },
  },
  Janna: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Sona', 'Escala mais em equipe com cura e auras sem sofrer pressão de abate.'],
        ['Nami', 'Trocas melhores com cura + poke constante no W na rota.'],
        ['Xerath', 'Poke de longo alcance quebra o escudo fora de alcance.']
      ),
    },
  },
  JarvanIV: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Poppy', 'W trava o combo E+Q no meio da animação.'],
        ['Kindred', 'Pula a parede do Cataclisma com o Q e mantém DPS.'],
        ['Graves', 'Pula a arena com o E e vence trocas prolongadas.']
      ),
    },
  },
  Jax: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Malphite', 'E reduz velocidade de ataque e Q impede aproximação constante.'],
        ['Poppy', 'W bloqueia o Salto (Q) e empurra na parede durante o E.'],
        ['Gragas', 'Barrigada interrompe o salto e mantém trocas curtas mágicas.']
      ),
      JUNGLE: picks(
        ['Lillia', 'Dano mágico e velocidade superam o Contra-Ataque físico.'],
        ['Poppy', 'Anula a mobilidade do Q nas escaramuças pelos objetivos.'],
        ['Fiddlesticks', 'Medo e drenagem ignoram a defesa física do Contra-Ataque.']
      ),
    },
  },
  Jayce: {
    lanes: ['TOP', 'MID'],
    byLane: {
      TOP: picks(
        ['Malphite', 'Armadura anula o poke e pune sem escapatória no nível 6.'],
        ['Irelia', 'Avança rapidamente quando Jayce troca para forma de canhão.'],
        ['MonkeyKing', 'Armadura passiva e avanço no E punem a baixa vida base.']
      ),
      MID: picks(
        ['Syndra', 'Empurra Jayce durante o salto do martelo e controla a rota.'],
        ['Yasuo', 'Parede bloqueia o disparo acelerado Q+E facilmente.'],
        ['Irelia', 'Pune imediatamente qualquer passo avançado na rota curta.']
      ),
    },
  },
  Jhin: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Tristana', 'Pula para cima quando Jhin está recarregando as 4 balas.'],
        ['Lucian', 'Combo rápido pune as pausas naturais entre disparos de Jhin.'],
        ['Draven', 'Trocas muito mais pesadas enquanto Jhin depende da recarga.']
      ),
    },
  },
  Jinx: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Draven', 'Domina a rota antes de Jinx fechar velocidade de ataque.'],
        ['Tristana', 'All-in agressivo explode Jinx sem mobilidade no nível 2-6.'],
        ['Twitch', 'Abre da invisibilidade direto nas costas fora de posição.']
      ),
    },
  },
  Kaisa: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Draven', 'Vence todas as trocas curtas pelo alcance curto de Kai’Sa.'],
        ['Caitlyn', 'Pune o alcance reduzido de 525 em cada minion da rota.'],
        ['MissFortune', 'Pressão de Q e R em lutas antes da evolução das habilidades.']
      ),
    },
  },
  Kalista: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Ashe', 'Lentidão reduz drasticamente a distância dos saltos da passiva.'],
        ['Draven', 'Supera em dano bruto nas trocas diretas nível 1-5.'],
        ['Caitlyn', 'Controla o chão com armadilhas e alcance muito superior.']
      ),
    },
  },
  Karma: {
    lanes: ['SUPORTE', 'MID'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Um puxão pune a fragilidade mesmo com escudo do E.'],
        ['Nautilus', 'Força lutas diretas ignorando o poke constante.'],
        ['Sona', 'Supera em utilidade em equipe após a fase de rotas.']
      ),
      MID: picks(
        ['Viktor', 'Escala muito mais em dano mantendo a rota limpa de longe.'],
        ['Syndra', 'Supera o burst após o nível 6 sem perder pressão.'],
        ['Xerath', 'Aplica poke além do alcance do RQ de Karma.']
      ),
    },
  },
  Karthus: {
    lanes: ['JUNGLE', 'MID'],
    byLane: {
      JUNGLE: picks(
        ['Kindred', 'Invade nível 2-3 e ultimate salva o time inteiro do R.'],
        ['Khazix', 'Abate instantâneo ao encontrar Karthus isolado na selva.'],
        ['Rengar', 'Pressão constante nos acampamentos sem defesa de Karthus.']
      ),
      MID: picks(
        ['Fizz', 'Desvia das bolhas e anula o R com o E bem cronometrado.'],
        ['Kassadin', 'Escala livremente e reduz todo o dano mágico contínuo.'],
        ['Zed', 'Elimina facilmente sempre que Karthus avança a onda.']
      ),
    },
  },
  Kassadin: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Tristana', 'Dano físico pesado pune o início fraco e derruba torres cedo.'],
        ['Lucian', 'Domina os níveis 1-5 impedindo Kassadin de farmar.'],
        ['Pantheon', 'Stun garantido e dano físico esmagador no início do jogo.']
      ),
    },
  },
  Katarina: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Pantheon', 'W interrompe o R na hora e ganha todas as trocas cedo.'],
        ['Galio', 'W cancela a ultimate e resiste ao burst mágico facilmente.'],
        ['Kassadin', 'Q interrompe o R e supera em mobilidade após o nível 6.']
      ),
    },
  },
  Kayle: {
    lanes: ['TOP', 'MID'],
    byLane: {
      TOP: picks(
        ['Nasus', 'Murchar (W) trava o kite e escala livre contra pressão fraca.'],
        ['Jax', 'Pula para cima cedo e bloqueia os ataques após o nível 6.'],
        ['Irelia', 'Congele a onda e puna cada tentativa de farm pré-6.']
      ),
      MID: picks(
        ['Orianna', 'Controla a rota cedo e pune sem dar espaço para escalar.'],
        ['Syndra', 'Pressão constante e burst antes da ultimate ficar pronta.'],
        ['Viktor', 'Acompanha a escala com muito mais presença de rota cedo.']
      ),
    },
  },
  Kayn: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Poppy', 'W interrompe o Q e empurra na parede quando sai do E.'],
        ['Graves', 'Invade o Kayn pré-transformação e domina todos os objetivos.'],
        ['Kindred', 'R salva do burst do Assassino e kiting pune Rhaast.']
      ),
    },
  },
  Kennen: {
    lanes: ['TOP', 'MID'],
    byLane: {
      TOP: picks(
        ['DrMundo', 'Passiva bloqueia o stun e regeneração ignora o poke.'],
        ['Nasus', 'Sustenta o poke na passiva e atropela após fechar Fulgor.'],
        ['Yorick', 'Prisão do W prende Kennen mesmo após usar o E.']
      ),
      MID: picks(
        ['Syndra', 'Empurra Kennen durante a entrada da ultimate com o E.'],
        ['Janna', 'Não usual no mid, mas Azir/Orianna controlam fora do alcance.'],
        ['Viktor', 'Limpa ondas com segurança e usa W para travar a entrada.']
      ),
    },
  },
  Khazix: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['LeeSin', 'Q e E revelam a invisibilidade do R e vencem cedo.'],
        ['Elise', 'Crias impedem bônus de Isolamento em trocas na selva.'],
        ['Rengar', 'R revela a camuflagem e vence o duelo corpo a corpo.']
      ),
    },
  },
  Kindred: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['LeeSin', 'Chute expulsa Kindred para fora da área da própria ultimate.'],
        ['Khazix', 'Explode nos acampamentos antes da proteção da ultimate.'],
        ['Gragas', 'R desloca Kindred e inimigos fora da zona de imortalidade.']
      ),
    },
  },
  Kled: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Fiora', 'Ripostar no Q de Kled garante atordoamento e duelo fácil.'],
        ['Jax', 'Contra-Ataque bloqueia os 4 golpes rápidos do W de Kled.'],
        ['Shen', 'W bloqueia todos os ataques do W de Kled e protege aliados do R.']
      ),
    },
  },
  KogMaw: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Draven', 'Explode Kog’Maw sem fuga antes de fechar o segundo item.'],
        ['Tristana', 'All-in de longa distância pune qualquer passo avançado.'],
        ['Lucian', 'Pressão inicial fortíssima na rota inferior.']
      ),
    },
  },
  KSante: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Gwen', 'Dano verdadeiro e em vida máxima derrete K’Sante o jogo todo.'],
        ['Fiora', 'Pontos vitais punem a alta vida e Ripostar devolve o Q3/W.'],
        ['Vayne', 'Kite contínuo impede a aproximação e ignora armadura.']
      ),
    },
  },
  Leblanc: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Galio', 'W provoca na saída do dash e absorve o burst mágico.'],
        ['Vex', 'Passiva pune o W e o retorno do dash com medo imediato.'],
        ['Lissandra', 'W e R prendem LeBlanc no meio da distorção.']
      ),
    },
  },
  LeeSin: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Poppy', 'W cancela tanto a segunda ativação do Q quanto o W.'],
        ['Warwick', 'Vence qualquer duelo direto nos níveis iniciais na selva.'],
        ['Trundle', 'R rouba status após o nível 6 e ganha todas as escaramuças.']
      ),
    },
  },
  Leona: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula toda a cadeia de controle do E+Q+R.'],
        ['Janna', 'Furacão interrompe a Lâmina Zênite (E) antes de encostar.'],
        ['Alistar', 'Expulsa o atirador ou Leona após a entrada, quebrando o foco.']
      ),
    },
  },
  Lillia: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Kindred', 'Dano à distância acompanhando a velocidade e R anula o sono.'],
        ['MasterYi', 'Ultimate ignora lentidão e Q desvia do W no tempo certo.'],
        ['Khazix', 'Explode Lillia frágil antes de acumular velocidade no Q.']
      ),
      TOP: picks(
        ['Camille', 'Ultimate prende Lillia na arena sem deixá-la correr.'],
        ['Irelia', 'Avança pelos minions para colar mesmo com alta velocidade.'],
        ['Jayce', 'Poke e combo de explosão superam as trocas curtas.']
      ),
    },
  },
  Lissandra: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Xerath', 'Aplica poke muito além do alcance da garra do E.'],
        ['Orianna', 'Controla a onda e vence trocas à distância com segurança.'],
        ['Syndra', 'Empurra Lissandra com o E logo após a chegada da garra.']
      ),
    },
  },
  Locke: {
    lanes: ['MID', 'JUNGLE'],
    byLane: {
      MID: picks(
        ['Lissandra', 'Controle de grupo imediato no W/R pune entradas de assassino.'],
        ['Galio', 'Resistências e provocação protegem a rota e os aliados.'],
        ['Pantheon', 'Stun confiável no W e escudo do E quebram janelas de burst.']
      ),
      JUNGLE: picks(
        ['Poppy', 'W trava avanços repentinos em emboscadas e lutas.'],
        ['LeeSin', 'Pressão inicial forte e revelação para contestar a selva.'],
        ['Warwick', 'Sustentação alta vence trocas curtas de assassinos.']
      ),
    },
  },
  Lucian: {
    lanes: ['ADC', 'MID'],
    byLane: {
      ADC: picks(
        ['Caitlyn', 'Alcance bem maior pune o avanço curto de 500 de Lucian.'],
        ['Draven', 'Responde o burst com ainda mais dano por ataque básico.'],
        ['Ashe', 'Lentidão e alcance impedem Lucian de controlar o ritmo.']
      ),
      MID: picks(
        ['Syndra', 'Pune o dash curto do E com empurrão e explosão no nível 6.'],
        ['Viktor', 'Escala superior em lutas mantendo a onda limpa sob torre.'],
        ['Malphite', 'Armadura alta anula completamente o dano físico na rota.']
      ),
    },
  },
  Lulu: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Sona', 'Supera em cura contínua para toda a equipe nas lutas.'],
        ['Xerath', 'Poke de longo alcance drena a rota além dos escudos.'],
        ['Blitzcrank', 'Puxa e elimina antes que o R salve o alvo focado.']
      ),
    },
  },
  Lux: {
    lanes: ['SUPORTE', 'MID'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Puxão pune Lux imóvel sempre que erra a Ligação da Luz (Q).'],
        ['Nautilus', 'Iniciação pesada força Flash ou abate em cada erro.'],
        ['Pyke', 'Mobilidade desvia do Q/E e garante abates na rota.']
      ),
      MID: picks(
        ['Fizz', 'Salto do E desvia do Q e da ultimate com facilidade.'],
        ['Yasuo', 'Parede bloqueia Q e W enquanto avança pela onda.'],
        ['Zed', 'Sombras evitam todo o controle e explodem após o nível 6.']
      ),
    },
  },
  Malphite: {
    lanes: ['TOP', 'MID', 'SUPORTE'],
    byLane: {
      TOP: picks(
        ['Sylas', 'Cura no W, dano mágico e rouba a própria ultimate do Malphite.'],
        ['Mordekaiser', 'Dano mágico sustentado e passiva derretem a armadura.'],
        ['Gwen', 'Ignora armadura com dano mágico e verdadeiro em vida máxima.']
      ),
      MID: picks(
        ['Sylas', 'Usa a ultimate de Malphite ainda melhor em lutas de equipe.'],
        ['Galio', 'Ignora o poke mágico do Q e controla a pressão do mapa.'],
        ['Swain', 'Sustenta as trocas e vence lutas prolongadas com facilidade.']
      ),
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro protege o atirador do impacto da ultimate.'],
        ['Sivir', 'Nota: contra suportes, Sona/Milio mantêm a rota saudável antes do 6.'],
        ['Braum', 'Absorve pressão e protege após a iniciação do nível 6.']
      ),
    },
  },
  Malzahar: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Syndra', 'Arremessa os voidlings longe com o W e quebra o escudo fácil.'],
        ['Xerath', 'Remove o escudo da passiva e limpa a onda muito mais longe.'],
        ['Orianna', 'Esfera limpa os voidlings rápido e mantém controle total.']
      ),
    },
  },
  Maokai: {
    lanes: ['SUPORTE', 'JUNGLE', 'TOP'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula a raiz do W e o controle do Q.'],
        ['Braum', 'Bloqueia mudas/ultimate e vira o 2v2 quando Maokai entra.'],
        ['Milio', 'Ultimate remove o enraizamento em área do time inteiro.']
      ),
      JUNGLE: picks(
        ['Lillia', 'Queima a vida máxima do tanque sem deixá-lo encostar.'],
        ['Olaf', 'Ignora toda a cadeia de controle na ultimate.'],
        ['Trundle', 'Rouba armadura e vida no R e domina os objetivos.']
      ),
      TOP: picks(
        ['Mordekaiser', 'Vence trocas estendidas e isola no Reino da Morte.'],
        ['Fiora', 'Pontos vitais derretem tanques e Ripostar devolve o Q/W.'],
        ['Darius', 'Pune a fase inicial lenta com estacas fáceis de passiva.']
      ),
    },
  },
  MasterYi: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Rammus', 'Provocação e espinhos fazem Yi se derrotar atacando.'],
        ['Jax', 'Contra-Ataque ignora todos os golpes e atordoa na saída.'],
        ['Pantheon', 'Stun instantâneo no W garante o foco da equipe antes do Q.']
      ),
    },
  },
  Mel: {
    lanes: ['MID', 'SUPORTE'],
    byLane: {
      MID: picks(
        ['Kassadin', 'Escala com redução mágica e salta além da zona de reflexão.'],
        ['Fizz', 'Pula os projéteis com o E e força trocas corpo a corpo.'],
        ['Yasuo', 'Mobilidade alta para forçar o W cedo e punir na sequência.']
      ),
      SUPORTE: picks(
        ['Blitzcrank', 'Puxão direto sem depender de projétil de dano lento.'],
        ['Leona', 'Iniciação corpo a corpo através do E ignora reflexão à distância.'],
        ['Nautilus', 'Força controle encadeado em campeã sem mobilidade.']
      ),
    },
  },
  Milio: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Puxa Milio antes que possa curar ou usar R no atirador.'],
        ['Pyke', 'Executa alvos baixos ignorando escudos e cura contínua.'],
        ['Xerath', 'Aplica poke de longe e drena a mana de defesa rapidamente.']
      ),
    },
  },
  MissFortune: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Yasuo', 'Parede de Vento bloqueia a ultimate inteira e o ricochete do Q.'],
        ['Samira', 'W corta a chuva de balas da ultimate no momento certo.'],
        ['Tristana', 'Salto interrompe ou sai da área do R e vence no 1v1.']
      ),
    },
  },
  MonkeyKing: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Mordekaiser', 'Dano mágico ignora a passiva de armadura de Wukong.'],
        ['Malphite', 'Escala armadura junto e reduz velocidade de ataque no E.'],
        ['Garen', 'Giro do E atinge Wukong e clone juntos e executa no R.']
      ),
      JUNGLE: picks(
        ['Lillia', 'Dano mágico ignora a armadura extra da passiva de Wukong.'],
        ['Evelynn', 'Explosão mágica atravessa o escudo físico da selva.'],
        ['LeeSin', 'Revela a invisibilidade do clone (W) com o Q e E.']
      ),
    },
  },
  Mordekaiser: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Olaf', 'Ragnarok cancela e impede o Reino da Morte e ganha o 1v1.'],
        ['Fiora', 'Ripostar bloqueia o puxão e vence fácil dentro da ultimate.'],
        ['Vayne', 'Empurra com o E dentro da arena e derrete vida com W.']
      ),
      JUNGLE: picks(
        ['Olaf', 'Imune ao Reino da Morte e domina invasões diretas na selva.'],
        ['Kindred', 'Usa a própria ultimate para sobreviver dentro do R de Morde.'],
        ['Lillia', 'Velocidade alta dificulta acertar Q e E na arena fechada.']
      ),
    },
  },
  Morgana: {
    lanes: ['SUPORTE', 'JUNGLE', 'MID'],
    byLane: {
      SUPORTE: picks(
        ['Karma', 'Poke constante quebra o escudo e ganha controle da rota.'],
        ['Zyra', 'Dano de plantas em área pune Morgana sem mobilidade.'],
        ['Velkoz', 'Dano verdadeiro e alcance superior furam o Escudo Negro.']
      ),
      JUNGLE: picks(
        ['Khazix', 'Invade os campos cedo quando a prisão (Q) estiver em recarga.'],
        ['LeeSin', 'Pressão inicial muito superior para contestar objetivos.'],
        ['Nocturne', 'Escudo de feitiço bloqueia a prisão e garante o abate.']
      ),
      MID: picks(
        ['Zed', 'Desvia fácil da prisão lenta e pressiona com dano físico.'],
        ['Xerath', 'Aplica poke fora do alcance de W e R sem se arriscar.'],
        ['Syndra', 'Burst alto estoura após quebrar o escudo com Q+E.']
      ),
    },
  },
  Naafiri: {
    lanes: ['MID', 'JUNGLE'],
    byLane: {
      MID: picks(
        ['Lissandra', 'W trava o salto do W da Naafiri e limpa os cães em área.'],
        ['Irelia', 'Usa os próprios cães da matilha para resetar o Q e curar.'],
        ['Yasuo', 'Limpa os cães facilmente e bloqueia as adagas do Q.']
      ),
      JUNGLE: picks(
        ['Poppy', 'W interrompe o salto teleguiado (W) instantaneamente.'],
        ['Rammus', 'Espinha reflete o dano dos ataques e da matilha junta.'],
        ['Trundle', 'Domina duelos corpo a corpo na selva desde cedo.']
      ),
    },
  },
  Nami: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Um puxão acerta Nami frágil mesmo com cura do W.'],
        ['Nautilus', 'Iniciação consistente pune a baixa vida base da suporte.'],
        ['Pyke', 'Desvia da bolha (Q) e garante abates na rota inferior.']
      ),
    },
  },
  Nasus: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Darius', 'Controle total da onda desde o nível 1 nega acúmulos no Q.'],
        ['Camille', 'Troca com dano verdadeiro e foge antes da punição.'],
        ['Aatrox', 'Pressão pesada cedo impede Nasus de tocar nos minions.']
      ),
    },
  },
  Nautilus: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula o gancho, a passiva e a ultimate.'],
        ['Braum', 'Pula na frente do atirador e vence a luta prolongada 2v2.'],
        ['Alistar', 'Devolve controle direto no atirador inimigo após a entrada.']
      ),
    },
  },
  Neeko: {
    lanes: ['MID', 'SUPORTE'],
    byLane: {
      MID: picks(
        ['Syndra', 'Empurra Neeko durante a canalização da ultimate com o E.'],
        ['Xerath', 'Limpa a rota muito além do alcance do enraizamento (E).'],
        ['Kassadin', 'Escala forte e reduz todo o dano mágico do combo.']
      ),
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro bloqueia o E e o atordoamento do R.'],
        ['Janna', 'Afasta Neeko da equipe com o R antes do estouro da ultimate.'],
        ['Xerath', 'Aplica poke de longe sem cair no disfarce de minion.']
      ),
    },
  },
  Nidalee: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Nocturne', 'Escudo bloqueia a lança e vence qualquer invasão direta.'],
        ['Kindred', 'Desvia das lanças no Q e supera no impacto em lutas.'],
        ['Rengar', 'Emboscadas nos arbustos eliminam Nidalee antes da troca.']
      ),
    },
  },
  Nilah: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Xayah', 'Penas no chão punem quando Nilah pula para perto no E.'],
        ['Caitlyn', 'Vantagem massiva de alcance pune cada minion na rota.'],
        ['Ashe', 'Kite contínuo impede a aproximação fora do alcance curto.']
      ),
    },
  },
  Nocturne: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Olaf', 'Ragnarok ignora o medo do E e vence o 1v1 direto.'],
        ['Warwick', 'Sustenta mais na selva e vira duelos com pouca vida.'],
        ['Trundle', 'Rouba o dano e as resistências e vence no corpo a corpo.']
      ),
    },
  },
  Nunu: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Anivia', 'Parede de gelo bloqueia a bola de neve gigante no meio da rota.'],
        ['Trundle', 'Pilar para a bola de neve instantaneamente em qualquer lugar.'],
        ['Janna', 'Furacão interrompe tanto a bola de neve quanto a ultimate.']
      ),
    },
  },
  Olaf: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Kled', 'Corta cura no Q e mobilidade escapa do tempo da ultimate.'],
        ['Camille', 'Prende no R ou pula paredes para esperar o Ragnarok acabar.'],
        ['Tryndamere', 'Fúria Sem Fim segura o burst enquanto Olaf perde armadura no R.']
      ),
      JUNGLE: picks(
        ['Kindred', 'Kite fácil e R salva o time durante o Ragnarok do Olaf.'],
        ['Graves', 'Mantém distância com o E e domina na selva com armadura.'],
        ['Lillia', 'Corre muito rápido até a ultimate de Olaf expirar.']
      ),
    },
  },
  Orianna: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Syndra', 'Pressiona no mesmo alcance com maior poder de explosão no 6.'],
        ['Xerath', 'Supera o alcance da esfera e drena vida na rota.'],
        ['Fizz', 'Pula o Onda de Choque com o E e pune pouca mobilidade.']
      ),
    },
  },
  Ornn: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Fiora', 'Ripostar devolve o carneiro da ultimate e derrete vida máxima.'],
        ['Gwen', 'Névoa evita o R à distância e Q aplica dano verdadeiro.'],
        ['Illaoi', 'Ornn grande e lento é alvo fácil para o E e tentáculos.']
      ),
    },
  },
  Pantheon: {
    lanes: ['TOP', 'MID', 'SUPORTE'],
    byLane: {
      TOP: picks(
        ['Malphite', 'Armadura pesada neutraliza as lanças e vence após o 6.'],
        ['Gragas', 'Barrigada interrompe o salto do W antes do atordoamento.'],
        ['Shen', 'W bloqueia os golpes fortalecidos e R acompanha o salto global.']
      ),
      MID: picks(
        ['Orianna', 'Controla a onda de longe sem entrar no alcance do salto W.'],
        ['Syndra', 'Empurra Pantheon no ar durante o W com o E.'],
        ['Anivia', 'Passiva impede o snowball cedo e controla a rota pós-6.']
      ),
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro impede o stun garantido do W na rota.'],
        ['Janna', 'Furacão interrompe o avanço do W no meio do pulo.'],
        ['Braum', 'Bloqueia o dano das lanças e responde a entrada 2v2.']
      ),
    },
  },
  Poppy: {
    lanes: ['TOP', 'JUNGLE', 'SUPORTE'],
    byLane: {
      TOP: picks(
        ['Darius', 'Não depende de dash para o W ativar e vence trocas longas.'],
        ['Olaf', 'Ignora os controles da Poppy e pressiona sem parar.'],
        ['Mordekaiser', 'Dano mágico contínuo passa fácil pela defesa física.']
      ),
      JUNGLE: picks(
        ['Trundle', 'Pilar interrompe a carga do R e rouba as resistências extras.'],
        ['Udyr', 'Não tem dashes para o W bloquear e vence no corpo a corpo.'],
        ['Olaf', 'Atropela Poppy em escaramuças ignorando Q, E e R.']
      ),
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula o impacto na parede e o R.'],
        ['Zyra', 'Aplica poke mágico de longe sem precisar de avanços.'],
        ['Brand', 'Derrete vida alta nas trocas 2v2 sem dar alvo fácil.']
      ),
    },
  },
  Pyke: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula o puxão do Q e o stun do E.'],
        ['Nautilus', 'Trava Pyke frágil com controle instantâneo se errar o E.'],
        ['Alistar', 'Protege o atirador com R/cura e interrompe o avanço do E.']
      ),
    },
  },
  Qiyana: {
    lanes: ['MID', 'JUNGLE'],
    byLane: {
      MID: picks(
        ['Lissandra', 'W e R travam Qiyana logo na entrada do combo.'],
        ['Pantheon', 'Escudo do E bloqueia o burst e W pune imediatamente.'],
        ['Diana', 'Escudo e armadura natural vencem trocas curtas no meio.']
      ),
      JUNGLE: picks(
        ['Poppy', 'W trava o E e pune Qiyana nas paredes da selva.'],
        ['Warwick', 'Sente cheiro de pouca vida e vence qualquer duelo 1v1.'],
        ['LeeSin', 'Q e E revelam Qiyana dentro da invisibilidade do elemento grama.']
      ),
    },
  },
  Quinn: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Malphite', 'Armadura alta anula o poke e R pune sem chance de fuga.'],
        ['Irelia', 'Avança pelos minions após Quinn gastar o salto do E.'],
        ['Poppy', 'W bloqueia o salto do E, deixando Quinn presa no corpo a corpo.']
      ),
    },
  },
  Rakan: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro bloqueia o levantamento do W e o charme do R.'],
        ['Janna', 'Furacão interrompe a entrada do W no ar facilmente.'],
        ['Poppy', 'W trava tanto a entrada do W quanto o retorno do E de Rakan.']
      ),
    },
  },
  Rammus: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Trundle', 'R rouba toda a armadura acumulada pelo W de Rammus.'],
        ['Lillia', 'Dano mágico contínuo derrete Rammus sem depender de ataques.'],
        ['Evelynn', 'Dano mágico alto e penetração ignoram a armadura extrema.']
      ),
    },
  },
  RekSai: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Poppy', 'W bloqueia o túnel (E) e o avanço sob a terra.'],
        ['Kindred', 'Desvia do levantamento e R salva do execute da ultimate.'],
        ['Olaf', 'Vence trocas diretas nível 3-6 ignorando o levantamento.']
      ),
      TOP: picks(
        ['Mordekaiser', 'Vence trocas prolongadas depois de Rek’Sai gastar a fúria.'],
        ['Jax', 'Contra-Ataque ignora as mordidas e ataques potenciados.'],
        ['Darius', 'Domina trocas estendidas punindo a cura limitada na rota.']
      ),
    },
  },
  Rell: {
    lanes: ['SUPORTE', 'JUNGLE'],
    byLane: {
      SUPORTE: picks(
        ['Janna', 'Furacão interrompe o salto da queda de armadura (W) no ar.'],
        ['Morgana', 'Escudo Negro anula o controle completo da entrada.'],
        ['Thresh', 'Esfolar (E) empurra Rell para trás no meio do salto.']
      ),
      JUNGLE: picks(
        ['Poppy', 'W interrompe a montaria e impede a iniciação em objetivos.'],
        ['Lillia', 'Derrete vida alta e foge facilmente da velocidade lenta desmontada.'],
        ['Olaf', 'Imune a todo o pacote de controle de grupo de Rell.']
      ),
    },
  },
  Renata: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Puxa Renata sem mobilidade antes de usar o R em área.'],
        ['Xerath', 'Poke de longa distância pune recargas altas de W e Q.'],
        ['Yasuo', 'Nota de equipe: Parede de Vento anula a onda inteira da ultimate.']
      ),
    },
  },
  Renekton: {
    lanes: ['TOP', 'MID'],
    byLane: {
      TOP: picks(
        ['Illaoi', 'Puxa a alma sempre que Renekton avança com E no corpo a corpo.'],
        ['Quinn', 'Cega e usa E para cancelar o avanço antes do atordoamento.'],
        ['Kennen', 'Poke contínuo e controle impedem Renekton de acumular fúria.']
      ),
      MID: picks(
        ['Lissandra', 'W trava a entrada do E e mantém distância segura na rota.'],
        ['Syndra', 'Empurra Renekton para fora antes que alcance com o W.'],
        ['Ahri', 'Charme interrompe o dash duplo e pune o recuo.']
      ),
    },
  },
  Rengar: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Poppy', 'W interrompe o salto dos arbustos e da ultimate inteira.'],
        ['Rammus', 'Armadura e provocação seguram o burst do combo inteiro.'],
        ['Warwick', 'E reduz dano e vence o 1v1 direto contra Rengar.']
      ),
      TOP: picks(
        ['Darius', 'W/E punem imediatamente o salto nos arbustos do topo.'],
        ['Poppy', 'W para todo salto nos arbustos e força duelo desfavorável.'],
        ['Jax', 'Contra-Ataque bloqueia o Q fortalecido na aterrissagem.']
      ),
    },
  },
  Riven: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Poppy', 'W bloqueia todos os avanços do Q e E deixando Riven parada.'],
        ['Renekton', 'W quebra o escudo do E e domina trocas curtas na rota.'],
        ['Quinn', 'Interrompe o Q3 com o E e pune à distância com facilidade.']
      ),
    },
  },
  Rumble: {
    lanes: ['TOP', 'MID'],
    byLane: {
      TOP: picks(
        ['Aatrox', 'Sustentação e alcance do Q punem o corpo frágil de Rumble.'],
        ['Irelia', 'Avança pela onda e vence o duelo antes do superaquecimento.'],
        ['Yorick', 'Prende Rumble imóvel na parede do W durante o Equalizador.']
      ),
      MID: picks(
        ['Viktor', 'Escala seguro fora do alcance do lança-chamas (Q).'],
        ['Syndra', 'Controla a onda à distância e explode Rumble imóvel.'],
        ['Kassadin', 'Reduz dano mágico e pula fora do Equalizador no nível 6.']
      ),
    },
  },
  Ryze: {
    lanes: ['MID', 'TOP'],
    byLane: {
      MID: picks(
        ['Cassiopeia', 'Dano contínuo maior em alcance médio vence qualquer troca.'],
        ['Orianna', 'Supera em alcance na fase de rotas e controla objetivos.'],
        ['Syndra', 'Burst e atordoamento punem a falta de mobilidade de Ryze.']
      ),
      TOP: picks(
        ['Irelia', 'Fecha a distância rapidamente e vence no 1v1 antes do Seraph.'],
        ['Aatrox', 'Pressão forte com Q pune Ryze nas trocas de alcance médio.'],
        ['Camille', 'Ultimate isola e força abate antes de Ryze escalar mana.']
      ),
    },
  },
  Samira: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Nilah', 'W ignora ataques de Samira e vence lutas corpo a corpo.'],
        ['Draven', 'Interrompe ou vence antes que Samira atinja o rank S.'],
        ['Caitlyn', 'Pune o alcance curto de 500 durante toda a fase de rotas.']
      ),
    },
  },
  Sejuani: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Trundle', 'R rouba a armadura da passiva e vence todas as brigas.'],
        ['Olaf', 'Imune a toda a sequência de congelamento e ultimate.'],
        ['Lillia', 'Kite contínuo e queima percentual derretem a vida alta.']
      ),
      TOP: picks(
        ['Gwen', 'Dano verdadeiro e cura superam as trocas curtas da tanque.'],
        ['Mordekaiser', 'Vence trocas estendidas e ignora armadura da passiva.'],
        ['Fiora', 'Ripostar devolve o Q/R e os pontos vitais punem vida alta.']
      ),
    },
  },
  Senna: {
    lanes: ['SUPORTE', 'ADC'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Puxão pune a menor vida base do jogo na rota inferior.'],
        ['Pyke', 'Fecha a distância rapidamente e executa Senna frágil.'],
        ['Nautilus', 'Controle garantido força Flash ou abate a cada erro.']
      ),
      ADC: picks(
        ['Tristana', 'Pula para cima cedo punindo a lentidão dos ataques de Senna.'],
        ['Draven', 'Domina o dano por segundo muito antes das almas escalarem.'],
        ['Lucian', 'Combo explosivo pune qualquer avanço para coletar almas.']
      ),
    },
  },
  Seraphine: {
    lanes: ['SUPORTE', 'ADC', 'MID'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Puxa e elimina Seraphine imóvel antes da luta começar.'],
        ['Pyke', 'Mobilidade alta para desviar do E e R e punir na rota.'],
        ['Nautilus', 'Pressão de all-in constante sobre suporte sem fuga.']
      ),
      ADC: picks(
        ['Sivir', 'Iguala o clear de onda e bloqueia o E/R com o Escudo.'],
        ['Draven', 'Pressão agressiva na rota pune o foco em farmar de longe.'],
        ['Yasuo', 'Parede de Vento bloqueia a ultimate Bis inteira facilmente.']
      ),
      MID: picks(
        ['Fizz', 'Pula os feitiços lentos e garante abate fácil após o 6.'],
        ['Zed', 'Mobilidade contorna o controle e explode Seraphine frágil.'],
        ['Yasuo', 'Parede anula E e R enquanto pressiona a rota curta.']
      ),
    },
  },
  Sett: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Vayne', 'Empurra no E e desvia do centro do W com o Rolamento (Q).'],
        ['Volibear', 'Sustenta e vence trocas prolongadas com mordida do W.'],
        ['Mordekaiser', 'Mantém distância com Q e vence com dano mágico contínuo.']
      ),
    },
  },
  Shaco: {
    lanes: ['JUNGLE', 'SUPORTE'],
    byLane: {
      JUNGLE: picks(
        ['RekSai', 'Sentido Sísmico detecta exatamente onde Shaco saiu no Q.'],
        ['LeeSin', 'Q e E revelam a invisibilidade e vencem invasões cedo.'],
        ['Graves', 'Limpa as caixas e domina o 1v1 com armadura extra no E.']
      ),
      SUPORTE: picks(
        ['Zyra', 'Plantas ativam e limpam as caixinhas nos arbustos de longe.'],
        ['Morgana', 'Escudo Negro anula o medo das caixas na fase de rotas.'],
        ['Lux', 'Controla a rota de longe sem precisar entrar nos arbustos.']
      ),
    },
  },
  Shen: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Mordekaiser', 'Leva para o Reino da Morte e impede ou pune pós-ultimate.'],
        ['Gangplank', 'Escala ouro livremente e pressiona torres sempre que Shen ulta.'],
        ['Aatrox', 'Dano em área de habilidades ignora o bloqueio de ataques do W.']
      ),
    },
  },
  Shyvana: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Kindred', 'Kite fácil e invade cedo antes de Shyvana ter a forma de dragão.'],
        ['Graves', 'Pressão inicial muito superior para roubar campos e dragões.'],
        ['Trundle', 'Rouba status na forma de dragão e vence qualquer 1v1.']
      ),
      TOP: picks(
        ['Darius', 'Pune o início fraco de Shyvana sem deixar farmar perto.'],
        ['Fiora', 'Mobilidade evita o bafo de fogo (E) e vence no duelo.'],
        ['Aatrox', 'Domina trocas pré-6 e sustenta o dano em área.']
      ),
    },
  },
  Singed: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Kayle', 'Escala livremente contra proxy e usa W/R para neutralizar.'],
        ['Gnar', 'Kite contínuo impede Singed de alcançar para arremessar no E.'],
        ['Gangplank', 'Limpa ondas na base se houver proxy e escala ouro extra.']
      ),
    },
  },
  Sion: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Aatrox', 'Três cargas de Q interrompem facilmente o Q carregado de Sion.'],
        ['Gwen', 'Derrete vida máxima e entra na névoa para evitar o E/R.'],
        ['Darius', 'Puxão (E) cancela o Q carregado e acumula passiva grátis.']
      ),
    },
  },
  Sivir: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Vayne', 'Supera em duelos diretas e desvia da volta do bumerangue Q.'],
        ['Draven', 'Vence trocas pesadas porque o escudo bloqueia apenas uma habilidade.'],
        ['Twitch', 'Abre da invisibilidade com DPS muito superior em lutas.']
      ),
    },
  },
  Skarner: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Lillia', 'Velocidade alta escapa do E e dano percentual derrete o tanque.'],
        ['Trundle', 'R rouba vida e armadura e Pilar cancela a corrida do E.'],
        ['Olaf', 'Ultimate ignora a parede do E e o empalamento do R.']
      ),
      TOP: picks(
        ['Gwen', 'Dano verdadeiro e vida máxima vencem trocas mesmo com escudo.'],
        ['Fiora', 'Ripostar bloqueia a colisão na parede ou o R com facilidade.'],
        ['Mordekaiser', 'Vence duelos estendidos e isola na ultimate.']
      ),
    },
  },
  Smolder: {
    lanes: ['ADC', 'MID'],
    byLane: {
      ADC: picks(
        ['Draven', 'Pune severamente os primeiros níveis antes das 225 cargas.'],
        ['Tristana', 'All-in explosivo interrompe ou atropela o voo curto do E.'],
        ['Caitlyn', 'Pressão constante de alcance impede farm seguro de Q.']
      ),
      MID: picks(
        ['Irelia', 'Avança pela onda e pune Smolder frágil cedo na rota.'],
        ['Syndra', 'Burst alto no nível 6 antes de Smolder ganhar alcance.'],
        ['Zed', 'Acompanha o voo do E com a ultimate e garante abates fáceis.']
      ),
    },
  },
  Sona: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Um puxão elimina instantaneamente pela menor vida do jogo.'],
        ['Pyke', 'Pune posicionamento para usar Q e executa fácil na rota.'],
        ['Nautilus', 'Iniciação implacável em suporte sem mobilidade pré-6.']
      ),
    },
  },
  Soraka: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Puxa Soraka primeiro impedindo a cura contínua no atirador.'],
        ['Pyke', 'Executa diretamente alvos abaixo do limite e ignora parte da cura.'],
        ['Nautilus', 'Foca Soraka com controle pesado para quebrar a sustentação.']
      ),
    },
  },
  Swain: {
    lanes: ['SUPORTE', 'MID', 'TOP'],
    byLane: {
      SUPORTE: picks(
        ['Xerath', 'Aplica poke fora do alcance do puxão do E durante toda a rota.'],
        ['Velkoz', 'Dano verdadeiro e distância vencem antes do nível 6.'],
        ['Morgana', 'Escudo Negro impede o puxão da passiva após o E.']
      ),
      MID: picks(
        ['Sylas', 'Rouba a ultimate do Swain e cura ainda mais nas lutas.'],
        ['Viktor', 'Escala forte e sai facilmente da área da ultimate.'],
        ['Cassiopeia', 'Vence trocas de dano contínuo mesmo dentro do R de Swain.']
      ),
      TOP: picks(
        ['Irelia', 'Avança para cima cedo e corta a recuperação com burst.'],
        ['Olaf', 'Atropela na ultimate ignorando o E e vence no corpo a corpo.'],
        ['Aatrox', 'Alcance do Q e pressão física superam Swain nos primeiros níveis.']
      ),
    },
  },
  Sylas: {
    lanes: ['MID', 'TOP', 'JUNGLE'],
    byLane: {
      MID: picks(
        ['Cassiopeia', 'Miasma impede o E e o W enquanto derrete no veneno.'],
        ['Vex', 'Passiva pune ambos os avanços de E e W com medo imediato.'],
        ['Heimerdinger', 'Torres punem qualquer tentativa de aproximação no corpo a corpo.']
      ),
      TOP: picks(
        ['Darius', 'Vence lutas prolongadas depois que Sylas gasta a cura do W.'],
        ['Aatrox', 'Pressão de alcance e cura competitiva em trocas diretas.'],
        ['Illaoi', 'Puxa a alma sempre que Sylas entra de E/W e vence com R.']
      ),
      JUNGLE: picks(
        ['Poppy', 'W interrompe o segundo avanço do E e trava em invasões.'],
        ['Warwick', 'Sustentação maior vence qualquer briga pré-nível 6.'],
        ['Graves', 'Limpa mais rápido e kiting pune quando W está em recarga.']
      ),
    },
  },
  Syndra: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Fizz', 'Salto do E anula a ultimate inteira e o atordoamento do E.'],
        ['Ekko', 'Ultimate retorna vida após o burst e força trocas favoráveis.'],
        ['Kassadin', 'Reduz o dano mágico e pula por cima do empurrão após o 6.']
      ),
    },
  },
  TahmKench: {
    lanes: ['TOP', 'SUPORTE'],
    byLane: {
      TOP: picks(
        ['Vayne', 'Dano verdadeiro derrete a vida alta e E empurra no mergulho.'],
        ['Gwen', 'Cura e derrete o tanque em trocas prolongadas facilmente.'],
        ['Heimerdinger', 'Torres bloqueiam a língua (Q) e punem se tentar avançar.']
      ),
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula o atordoamento do Q e a entrada do W.'],
        ['Zyra', 'Plantas bloqueiam a língua e aplicam dano contínuo.'],
        ['Senna', 'Escala almas livremente em cima da baixa pressão à distância.']
      ),
    },
  },
  Taliyah: {
    lanes: ['JUNGLE', 'MID'],
    byLane: {
      JUNGLE: picks(
        ['Khazix', 'Invade cedo e abate antes de Taliyah montar o combo W+E.'],
        ['Rengar', 'Salto surpresa vence antes que Taliyah coloque pedras no chão.'],
        ['Nocturne', 'Escudo bloqueia o levantamento do W e vence no corpo a corpo.']
      ),
      MID: picks(
        ['Katarina', 'Pisca fora do empurrão do W e pune a falta de mobilidade.'],
        ['Zed', 'Ultimate evita o levantamento e força dano pesado no nível 6.'],
        ['Xerath', 'Supera o alcance do Q e controla a rota com segurança.']
      ),
    },
  },
  Talon: {
    lanes: ['MID', 'JUNGLE'],
    byLane: {
      MID: picks(
        ['Pantheon', 'W para a entrada do Q e escudo do E anula o sangramento.'],
        ['Lissandra', 'W e R travam Talon antes que possa acionar a passiva.'],
        ['Diana', 'Armadura e escudo ganham todas as trocas no corpo a corpo.']
      ),
      JUNGLE: picks(
        ['LeeSin', 'Revela a invisibilidade da ultimate e vence invasões cedo.'],
        ['Poppy', 'W interrompe o Q e empurra contra as paredes que Talon pula.'],
        ['Warwick', 'Sustenta o burst inicial e domina escaramuças na selva.']
      ),
    },
  },
  Taric: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro bloqueia o atordoamento do E com facilidade.'],
        ['Zyra', 'Poke constante à distância drena a mana antes da luta.'],
        ['Xerath', 'Pune Taric sem mobilidade impedindo aproximação na rota.']
      ),
    },
  },
  Teemo: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Mordekaiser', 'Dano de habilidades ignora a cegueira e vence fácil no R.'],
        ['Malphite', 'Poke do Q ganha a rota e ultimate explode Teemo frágil.'],
        ['Olaf', 'Ignora cegueira/cogumelos no R e atropela após acertar o Q.']
      ),
    },
  },
  Thresh: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula a Sentença (Q) e o Esfolar (E).'],
        ['Zyra', 'Plantas bloqueiam a trajetória do gancho na hora do disparo.'],
        ['Braum', 'Pula no atirador e vence a luta se o gancho conectar.']
      ),
    },
  },
  Tristana: {
    lanes: ['ADC', 'MID'],
    byLane: {
      ADC: picks(
        ['Draven', 'E sai do salto (W) no ar e vence todas as trocas diretas.'],
        ['Samira', 'Bloqueia a bomba do E no W e explode no all-in.'],
        ['Sivir', 'Escudo absorve a explosão da bomba (E) inteira com facilidade.']
      ),
      MID: picks(
        ['Syndra', 'E empurra Tristana para trás no meio do Salto Foguete.'],
        ['Malphite', 'Armadura alta anula completamente o dano físico na rota.'],
        ['Pantheon', 'Escudo do E bloqueia a bomba e W trava antes da fuga.']
      ),
    },
  },
  Trundle: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Jax', 'Contra-Ataque ignora os ataques e mordidas fortalecidas.'],
        ['Quinn', 'Interrompe aproximação com o E e kiting vence no topo.'],
        ['Teemo', 'Cegueira anula a janela inteira de dano de ataque do Trundle.']
      ),
      JUNGLE: picks(
        ['Lillia', 'Kite contínuo e dano mágico evitam que Trundle encoste.'],
        ['Kindred', 'Mantém distância com o Q e R salva da mordida final.'],
        ['Jax', 'Vence duelos 1v1 bloqueando o foco de ataques básicos.']
      ),
    },
  },
  Tryndamere: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Malphite', 'Armadura e redução de velocidade de ataque anulam o crítico.'],
        ['Nasus', 'Murchar (W) reduz velocidade de movimento e ataque durante todo o R.'],
        ['Poppy', 'W trava o giro do E e R joga Tryndamere longe durante a ultimate.']
      ),
    },
  },
  TwistedFate: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Fizz', 'Pula a carta dourada com o E e garante abate fácil no nível 6.'],
        ['Yasuo', 'Parede bloqueia qualquer carta dourada e pressiona a rota.'],
        ['Sylas', 'Vence trocas diretas e rouba a ultimate para igualar o mapa.']
      ),
    },
  },
  Twitch: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Draven', 'Domina totalmente a rota antes de Twitch fechar itens.'],
        ['Nilah', 'W bloqueia os ataques durante a ultimate de Twitch inteira.'],
        ['Tristana', 'All-in forte pune Twitch sem ferramentas de fuga.']
      ),
    },
  },
  Udyr: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Lillia', 'Velocidade superior nunca deixa Udyr alcançar para atordoar.'],
        ['Kindred', 'Kite fácil e dano percentual derretem antes da aproximação.'],
        ['Vayne', 'Em lutas de equipe, empurra e derrete sem deixar Udyr encostar.']
      ),
      TOP: picks(
        ['Vayne', 'Empurra na aproximação do E e pune na distância o jogo todo.'],
        ['Gnar', 'Kite contínuo com lentidão do Q impede qualquer troca curta.'],
        ['Olaf', 'Ignora o atordoamento e vence trocas prolongadas no nível 6.']
      ),
    },
  },
  Urgot: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Mordekaiser', 'Supera em trocas estendidas e vence no Reino da Morte.'],
        ['Olaf', 'Ultimate anula a execução do R de Urgot se estiver ativa.'],
        ['Rammus', 'Muitas balas no W de Urgot ativam espinhos rapidamente.']
      ),
    },
  },
  Varus: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Sivir', 'Escudo bloqueia o Q carregado ou a ultimate com facilidade.'],
        ['Samira', 'W destrói a ultimate e o Q em lutas na rota inferior.'],
        ['Tristana', 'Pula para cima punindo Varus totalmente sem mobilidade.']
      ),
    },
  },
  Vayne: {
    lanes: ['ADC', 'TOP'],
    byLane: {
      ADC: picks(
        ['Caitlyn', 'Vantagem enorme de alcance pune cada passo para farmar.'],
        ['Draven', 'Trocas iniciais muito mais fortes ganham a rota cedo.'],
        ['Ashe', 'Alcance e lentidão controlam Vayne antes do terceiro item.']
      ),
      TOP: picks(
        ['Malphite', 'Poke do Q e combo no nível 6 punem a baixa vida base.'],
        ['Teemo', 'Cegueira impede acumular os dardos de prata do W.'],
        ['Rengar', 'Salta dos arbustos sem parar e explode Vayne frágil.']
      ),
    },
  },
  Veigar: {
    lanes: ['MID', 'ADC'],
    byLane: {
      MID: picks(
        ['Katarina', 'Pisca por cima da gaiola (E) com o E e explode Veigar.'],
        ['Fizz', 'Salta a gaiola e a ultimate inteira com o E no tempo certo.'],
        ['Zed', 'Troca com as sombras para sair da gaiola e matar no nível 6.']
      ),
      ADC: picks(
        ['Sivir', 'Escudo absorve a gaiola ou a ultimate e empurra a onda.'],
        ['Ezreal', 'Pisca fora da gaiola com o E e aplica poke de longe.'],
        ['Morgana', 'Nota de dupla: Escudo Negro torna a gaiola inofensiva.']
      ),
    },
  },
  Velkoz: {
    lanes: ['SUPORTE', 'MID'],
    byLane: {
      SUPORTE: picks(
        ['Blitzcrank', 'Puxão pune Vel’Koz totalmente imóvel durante a ultimate.'],
        ['Pyke', 'Fecha a distância rapidamente e sai do ângulo das habilidades.'],
        ['Nautilus', 'Força controle direto no suporte sem qualquer fuga.']
      ),
      MID: picks(
        ['Fizz', 'Pula os feitiços e o raio da ultimate com o E.'],
        ['Zed', 'Sombras entram nas costas e interrompem a ultimate facilmente.'],
        ['Yasuo', 'Parede bloqueia Q, W e E enquanto avança pela rota.']
      ),
    },
  },
  Vex: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Orianna', 'Não possui dashes para ativar a passiva e supera no alcance.'],
        ['Viktor', 'Troca de longe sem dar gatilho de marcação e escala melhor.'],
        ['Syndra', 'Controla a rota à distância e empurra se Vex entrar no R.']
      ),
    },
  },
  Vi: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Poppy', 'W interrompe o Quebra-Cofres (Q) no ar instantaneamente.'],
        ['Olaf', 'Ultimate ignora tanto o Q quanto o Saque e Surra (R).'],
        ['Trundle', 'Pilar interrompe o Q e rouba status em lutas diretas.']
      ),
    },
  },
  Viego: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Jax', 'Contra-Ataque bloqueia os ataques duplos da passiva de Viego.'],
        ['Rammus', 'Provocação e espinhos punem a velocidade de ataque nas lutas.'],
        ['Poppy', 'W para o avanço do W e isola Viego longe dos abates de reset.']
      ),
    },
  },
  Viktor: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Kassadin', 'Absorve o poke mágico e pula o campo gravitacional pós-6.'],
        ['Fizz', 'Pula fora do W e do Laser para explodir no nível 6.'],
        ['Syndra', 'Igual ou maior alcance com pressão letal mais cedo no jogo.']
      ),
    },
  },
  Vladimir: {
    lanes: ['MID', 'TOP'],
    byLane: {
      MID: picks(
        ['Orianna', 'Poke constante e alcance mantêm Vladimir sob pressão pré-9.'],
        ['Anivia', 'Empurra a rota sem parar e controla a poça com parede/R.'],
        ['Kassadin', 'Escala tão forte quanto e reduz todo o dano mágico.']
      ),
      TOP: picks(
        ['Aatrox', 'Pressão física constante pune a poça de recarga longa cedo.'],
        ['Yorick', 'Prisão do W prende mesmo após sair da poça de sangue.'],
        ['Irelia', 'Avança e vence no all-in assim que a poça entrar em recarga.']
      ),
    },
  },
  Volibear: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Vayne', 'Empurra no E na corrida do Q e derrete a vida em área.'],
        ['Jax', 'Contra-Ataque ignora a mordida do W e o atordoamento do Q.'],
        ['Quinn', 'Interrompe a corrida do Q com o E e domina à distância.']
      ),
      JUNGLE: picks(
        ['Lillia', 'Velocidade alta não deixa Volibear alcançar para usar Q/W.'],
        ['Kindred', 'Kite contínuo e dano percentual punem o corpo grande.'],
        ['Trundle', 'R rouba a vida extra da ultimate e vence no 1v1.']
      ),
    },
  },
  Warwick: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Olaf', 'Ragnarok anula o medo do E e a supressão da ultimate.'],
        ['Trundle', 'Rouba status no R e vence até em lutas com pouca vida.'],
        ['Kindred', 'Mantém distância segura sem entrar no alcance do medo.']
      ),
      TOP: picks(
        ['Jax', 'Contra-Ataque bloqueia o Q e toda a sequência de ataques.'],
        ['Olaf', 'Corta o controle da ultimate e vence no duelo até o fim.'],
        ['Teemo', 'Cegueira impede o sustento pelos ataques básicos na rota.']
      ),
    },
  },
  Xayah: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Caitlyn', 'Maior alcance evita o alinhamento das penas no chão.'],
        ['Ashe', 'Controla à distância e inicia antes que Xayah espalhe penas.'],
        ['Draven', 'Supera nas trocas diretas antes da ultimate defensiva.']
      ),
    },
  },
  Xerath: {
    lanes: ['SUPORTE', 'MID'],
    byLane: {
      SUPORTE: picks(
        ['Pyke', 'Mobilidade e camuflagem flanqueiam facilmente o mago imóvel.'],
        ['Blitzcrank', 'Um puxão acerta Xerath sem qualquer ferramenta de escape.'],
        ['Nautilus', 'Iniciação pesada pune toda vez que o E está em recarga.']
      ),
      MID: picks(
        ['Fizz', 'Pula todos os feitiços e elimina no nível 6 sem resposta.'],
        ['Zed', 'Sombras atravessam a rota e punem a fragilidade de perto.'],
        ['Kassadin', 'Pula para cima pós-6 e reduz todo o dano mágico de poke.']
      ),
    },
  },
  XinZhao: {
    lanes: ['JUNGLE'],
    byLane: {
      JUNGLE: picks(
        ['Jax', 'Contra-Ataque ignora os três golpes que levantam no Q.'],
        ['Poppy', 'W interrompe a investida (E) antes de Xin Zhao colar.'],
        ['Warwick', 'Sustenta o dano inicial e vence duelos estendidos cedo.']
      ),
    },
  },
  Yasuo: {
    lanes: ['MID', 'TOP'],
    byLane: {
      MID: picks(
        ['Pantheon', 'W instantâneo ignora a parede de vento e vence o 1v1 cedo.'],
        ['Renekton', 'W atordoa e quebra o escudo da passiva em trocas curtas.'],
        ['Annie', 'W e Tibbers ignoram completamente a Parede de Vento.']
      ),
      TOP: picks(
        ['Renekton', 'Domina o corpo a corpo e quebra o escudo facilmente.'],
        ['Poppy', 'W trava todos os avanços pelos minions da rota.'],
        ['Malphite', 'Armadura e redução de velocidade de ataque anulam o crítico.']
      ),
    },
  },
  Yone: {
    lanes: ['MID', 'TOP'],
    byLane: {
      MID: picks(
        ['Pantheon', 'Stun garantido e escudo do E vencem todas as trocas no E.'],
        ['Vex', 'Medo da passiva pune cada entrada de E, Q3 e R do Yone.'],
        ['Akali', 'Fumaça protege durante o espírito e pune o retorno do E.']
      ),
      TOP: picks(
        ['Renekton', 'Burst com fúria e stun quebram qualquer janela de troca do Yone.'],
        ['Jax', 'Contra-Ataque bloqueia os ataques e o Q durante o avanço.'],
        ['Poppy', 'W trava o Q3 e a entrada do E impedindo o all-in.']
      ),
    },
  },
  Yorick: {
    lanes: ['TOP'],
    byLane: {
      TOP: picks(
        ['Irelia', 'Usa o Q para abater cada andarilho em 1 golpe com reset grátis.'],
        ['Jax', 'Pula fora da prisão (W) e bloqueia os ataques dos monstros.'],
        ['Mordekaiser', 'Ultimate leva Yorick deixando a Donzela e monstros para trás.']
      ),
    },
  },
  Yunara: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Draven', 'Pressão agressiva nos primeiros níveis pune atiradores escaláveis.'],
        ['Caitlyn', 'Vantagem de alcance e armadilhas controlam a fase de rotas.'],
        ['Tristana', 'All-in rápido explode alvos frágeis antes do meio do jogo.']
      ),
    },
  },
  Yuumi: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Nautilus', 'Pressão total 2v1 sobre o atirador sem suporte com corpo na linha.'],
        ['Blitzcrank', 'Puxa o atirador desprotegido e garante dois abates juntos.'],
        ['Leona', 'Dives e iniciações constantes exploram o início fraco de Yuumi.']
      ),
    },
  },
  Zaahen: {
    lanes: ['TOP', 'JUNGLE'],
    byLane: {
      TOP: picks(
        ['Jax', 'Contra-Ataque bloqueia trocas físicas prolongadas e domina o 1v1.'],
        ['Poppy', 'Controle de terreno e defesa física alta freiam avanços corpo a corpo.'],
        ['Fiora', 'Mobilidade e dano verdadeiro vencem duelos na rota superior.']
      ),
      JUNGLE: picks(
        ['Kindred', 'Kite fácil na selva e ultimate protege nas escaramuças.'],
        ['LeeSin', 'Pressão inicial alta para contestar acampamentos cedo.'],
        ['Graves', 'Limpeza rápida e armadura natural favorecem trocas físicas.']
      ),
    },
  },
  Zac: {
    lanes: ['JUNGLE', 'TOP'],
    byLane: {
      JUNGLE: picks(
        ['Poppy', 'W interrompe o Estilingue (E) no meio do voo sem esforço.'],
        ['Janna', 'Furacão cancela a chegada do E antes de levantar a equipe.'],
        ['Trundle', 'Pilar interrompe o salto e R derrete a vida máxima do tanque.']
      ),
      TOP: picks(
        ['Gwen', 'Dano percentual e névoa punem o estilo de troca lenta do Zac.'],
        ['Fiora', 'Ripostar devolve o E/Q e derrete a barra de vida facilmente.'],
        ['Mordekaiser', 'Vence duelos longos e impede fuga limpa no Reino da Morte.']
      ),
    },
  },
  Zed: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Lissandra', 'Ultimate própria anula a Marca Fatal e trava Zed após aparecer.'],
        ['Malphite', 'Armadura alta anula completamente o combo físico no meio.'],
        ['Kayle', 'Ultimate torna o aliado ou si mesma imune à explosão da marca.']
      ),
    },
  },
  Zeri: {
    lanes: ['ADC'],
    byLane: {
      ADC: picks(
        ['Draven', 'Vence trocas iniciais sem deixar Zeri escalar velocidade.'],
        ['Tristana', 'All-in de longa distância acompanha o salto de parede do E.'],
        ['Caitlyn', 'Controla a rota cedo punindo a necessidade de limpar onda no Q.']
      ),
    },
  },
  Ziggs: {
    lanes: ['ADC', 'MID'],
    byLane: {
      ADC: picks(
        ['Sivir', 'Escudo absorve bombas/R e iguala a limpeza rápida de onda.'],
        ['Tristana', 'Pula para cima punindo o corpo frágil após gastar o W.'],
        ['Samira', 'W corta bombas e R facilitando a entrada agressiva 2v2.']
      ),
      MID: picks(
        ['Fizz', 'Pula todas as bombas com o E e explode no nível 6.'],
        ['Zed', 'Sombras atravessam a zona de poke e garantem abates fáceis.'],
        ['Yasuo', 'Parede bloqueia Q, W, E e avança rápido pelos minions.']
      ),
    },
  },
  Zilean: {
    lanes: ['SUPORTE', 'MID'],
    byLane: {
      SUPORTE: picks(
        ['Morgana', 'Escudo Negro anula o atordoamento de duas bombas e a lentidão.'],
        ['Sivir', 'Nota de rota: Escudo bloqueia a bomba marcada evitando o stun.'],
        ['Pyke', 'Força troca em dois alvos para gastar a ultimate e executar.']
      ),
      MID: picks(
        ['Fizz', 'Pula a bomba do Q com o E e pressiona muito cedo.'],
        ['Yasuo', 'Parede bloqueia as bombas e impede o atordoamento na rota.'],
        ['Syndra', 'Limpa a rota no mesmo ritmo e força o R antes da luta.']
      ),
    },
  },
  Zoe: {
    lanes: ['MID'],
    byLane: {
      MID: picks(
        ['Morgana', 'Escudo Negro anula o sono da Bolha (E) na rota.'],
        ['Fizz', 'Salta a bolha e a estrela com o E e vence no nível 6.'],
        ['Naafiri', 'Cães da matilha bloqueiam a Bolha (E) e a Estrela (Q).']
      ),
    },
  },
  Zyra: {
    lanes: ['SUPORTE'],
    byLane: {
      SUPORTE: picks(
        ['Xerath', 'Aplica poke de longe sem entrar no alcance das raízes e plantas.'],
        ['Blitzcrank', 'Puxão elimina Zyra extremamente frágil na fase de rotas.'],
        ['Nautilus', 'Força luta direta antes que as plantas dominem o espaço.']
      ),
    },
  },
};

const TAG_TO_LANE_FALLBACK: Record<string, LaneTag> = {
  Fighter: 'TOP',
  Tank: 'TOP',
  Assassin: 'MID',
  Mage: 'MID',
  Marksman: 'ADC',
  Support: 'SUPORTE',
};

export function getChampionLanes(champ: DDragonChampionSummary): LaneTag[] {
  const configured = CHAMPION_MATCHUPS[champ.id];
  if (configured && configured.lanes.length > 0) {
    return configured.lanes;
  }
  const inferred = champ.tags
    .map((t) => TAG_TO_LANE_FALLBACK[t])
    .filter((v): v is LaneTag => Boolean(v));
  return inferred.length > 0 ? Array.from(new Set(inferred)) : ['MID'];
}

export function getRankedCountersForChampion(
  champ: DDragonChampionSummary,
  lane: LaneTag
): RankedCounterPick[] {
  const configured = CHAMPION_MATCHUPS[champ.id];
  if (configured) {
    const lanePicks = configured.byLane[lane];
    if (lanePicks && lanePicks.length > 0) return lanePicks;
    const firstAvailable = Object.values(configured.byLane)[0];
    if (firstAvailable && firstAvailable.length > 0) return firstAvailable;
  }

  // Fallback by Riot primary tag so any future patch champion still returns 3 solid ranked picks
  const primaryTag = champ.tags[0] ?? 'Fighter';
  if (primaryTag === 'Marksman') {
    return picks(
      ['Draven', 'Pressão agressiva desde o nível 1 domina atiradores de escala.'],
      ['Tristana', 'All-in explosivo pune posicionamento sem mobilidade.'],
      ['Caitlyn', 'Vantagem de alcance controla a onda e a fase de rotas.']
    );
  }
  if (primaryTag === 'Mage') {
    return picks(
      ['Fizz', 'Mobilidade desvia das habilidades principais e explode no nível 6.'],
      ['Kassadin', 'Reduz dano mágico na passiva e supera em mobilidade pós-6.'],
      ['Zed', 'Sombras punem magos sem defesa física ou escape rápido.']
    );
  }
  if (primaryTag === 'Assassin') {
    return picks(
      ['Lissandra', 'Controle de grupo imediato no W e R trava a entrada.'],
      ['Pantheon', 'Stun garantido e escudo do E quebram a janela de explosão.'],
      ['Galio', 'Resistência alta e provocação protegem contra combos rápidos.']
    );
  }
  if (primaryTag === 'Tank') {
    return picks(
      ['Gwen', 'Dano verdadeiro e percentual em vida máxima derretem tanques.'],
      ['Fiora', 'Pontos vitais punem barras de vida altas em duelos longos.'],
      ['Vayne', 'Dano verdadeiro contínuo e kite constante ignoram armadura.']
    );
  }
  if (primaryTag === 'Support') {
    return picks(
      ['Morgana', 'Escudo Negro neutraliza iniciações e controles decisivos.'],
      ['Xerath', 'Poke de longo alcance drena a rota sem entrar em risco.'],
      ['Blitzcrank', 'Um puxão pune erros de posicionamento na fase de rotas.']
    );
  }

  // Fighter default
  return picks(
    ['Jax', 'Contra-Ataque bloqueia trocas físicas e domina duelos 1v1.'],
    ['Fiora', 'Mobilidade e dano verdadeiro superam lutadores corpo a corpo.'],
    ['Malphite', 'Armadura alta e redução de velocidade de ataque travam o duelo.']
  );
}
