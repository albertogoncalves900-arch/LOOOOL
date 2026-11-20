import { DDragonChampionSummary } from '../utils/ddragon';

export interface CounterItemRecommendation {
  id: string;
  name: string;
  gold: number;
  reason: string;
}

interface CatalogItem {
  id: string;
  name: string;
  gold: number;
}

// Verified Riot Data Dragon 16.23.1 Summoner's Rift item catalog
const ITEMS = {
  THORNMAIL: { id: '3075', name: 'Armadura de Espinhos', gold: 2450 },
  STEELCAPS: { id: '3047', name: 'Botas Galvanizadas de Aço', gold: 1200 },
  MERCS: { id: '3111', name: 'Passos de Mercúrio', gold: 1250 },
  MORTAL_REMINDER: { id: '3033', name: 'Lembrete Mortal', gold: 3000 },
  MORELLO: { id: '3165', name: 'Morellonomicon', gold: 2850 },
  CHEMSWORDS: { id: '6609', name: 'Serrespada Quimiopunk', gold: 3000 },
  ZHONYAS: { id: '3157', name: 'Ampulheta de Zhonya', gold: 3250 },
  GA: { id: '3026', name: 'Anjo Guardião', gold: 3200 },
  DEATHS_DANCE: { id: '6333', name: 'Dança da Morte', gold: 3300 },
  MAW: { id: '3156', name: 'Mandíbula de Malmortius', gold: 3100 },
  ROOKERN: { id: '2504', name: 'Rookern Lamúrico', gold: 2900 },
  BANSHEES: { id: '3102', name: 'Véu da Banshee', gold: 3000 },
  QSS: { id: '3140', name: 'Bandana de Mercúrio', gold: 1300 },
  EDGE_OF_NIGHT: { id: '3814', name: 'Limiar da Noite', gold: 3000 },
  RANDUINS: { id: '3143', name: 'Presságio de Randuin', gold: 2700 },
  FROZEN_HEART: { id: '3110', name: 'Coração Congelado', gold: 2500 },
  SERPENTS_FANG: { id: '6695', name: 'Presa da Serpente', gold: 2500 },
  BOTRK: { id: '3153', name: 'Espada do Rei Destruído', gold: 3200 },
  LIANDRYS: { id: '6653', name: 'Tormento de Liandry', gold: 3000 },
  LDR: { id: '3036', name: 'Lembranças do Lorde Dominik', gold: 3300 },
  BLACK_CLEAVER: { id: '3071', name: 'Cutelo Negro', gold: 3000 },
  WITS_END: { id: '3091', name: 'Limite da Razão', gold: 2800 },
  FORCE_OF_NATURE: { id: '4401', name: 'Força da Natureza', gold: 2800 },
  VOID_STAFF: { id: '3135', name: 'Cajado do Vazio', gold: 3000 },
  DEAD_MANS: { id: '3742', name: 'Couraça do Defunto', gold: 2900 },
  STERAKS: { id: '3053', name: 'Sinal de Sterak', gold: 3200 },
} satisfies Record<string, CatalogItem>;

function rec(
  item: CatalogItem,
  reason: string
): CounterItemRecommendation {
  return { ...item, reason };
}

// Specific tailored counter-items by champion ID
const SPECIFIC_COUNTER_ITEMS: Record<string, CounterItemRecommendation[]> = {
  Aatrox: [
    rec(ITEMS.THORNMAIL, 'Corta a cura da passiva e do R em cada troca direta.'),
    rec(ITEMS.MORTAL_REMINDER, 'Aplica Feridas Dolorosas e perfura armadura.'),
    rec(ITEMS.STEELCAPS, 'Reduz o dano físico da passiva e dos ataques entre Qs.'),
  ],
  Ahri: [
    rec(ITEMS.BANSHEES, 'Escudo de feitiço bloqueia o Charme (E) na iniciação.'),
    rec(ITEMS.MERCS, 'Reduz a duração do Charme e oferece resistência mágica.'),
    rec(ITEMS.MAW, 'Absorve a explosão mágica do combo completo após o nível 6.'),
  ],
  Akali: [
    rec(ITEMS.ROOKERN, 'Escudo mágico renovável anula o poke do Q e o burst.'),
    rec(ITEMS.MAW, 'Salva da execução do segundo avanço da ultimate.'),
    rec(ITEMS.MERCS, 'Resistência mágica cedo reduz pressão no nível 6.'),
  ],
  Alistar: [
    rec(ITEMS.MERCS, 'Reduz o tempo de controle do combo W+Q.'),
    rec(ITEMS.LIANDRYS, 'Derrete a vida alta e a redução de dano da ultimate.'),
    rec(ITEMS.LDR, 'Penetração de armadura essencial para atiradores.'),
  ],
  Amumu: [
    rec(ITEMS.MERCS, 'Tenacidade crucial contra duas cargas de Q e ultimate.'),
    rec(ITEMS.QSS, 'Remove o atordoamento em área da ultimate na hora.'),
    rec(ITEMS.LIANDRYS, 'Dano percentual queima o tanque em lutas longas.'),
  ],
  Annie: [
    rec(ITEMS.BANSHEES, 'Bloqueia o atordoamento garantido do Q ou da ultimate.'),
    rec(ITEMS.MERCS, 'Encurta o atordoamento para escapar antes do Tibbers.'),
    rec(ITEMS.MAW, 'Escudo mágico impede a eliminação instantânea no combo.'),
  ],
  Ashe: [
    rec(ITEMS.QSS, 'Limpa a Flecha de Cristal (R) instantaneamente em qualquer distância.'),
    rec(ITEMS.STEELCAPS, 'Reduz o dano contínuo dos ataques com lentidão.'),
    rec(ITEMS.RANDUINS, 'Reduz dano crítico e desacelera a perseguição.'),
  ],
  Blitzcrank: [
    rec(ITEMS.BANSHEES, 'Bloqueia o puxão (Q) impedindo iniciações surpresa.'),
    rec(ITEMS.EDGE_OF_NIGHT, 'Escudo de feitiço protege atiradores e assassinos do Q.'),
    rec(ITEMS.MERCS, 'Reduz a duração do silêncio da ultimate após ser puxado.'),
  ],
  Brand: [
    rec(ITEMS.ROOKERN, 'Escudo absorve a queimadura contínua da passiva.'),
    rec(ITEMS.FORCE_OF_NATURE, 'Acumula resistência e velocidade contra dano ao longo do tempo.'),
    rec(ITEMS.BANSHEES, 'Evita a iniciação com E+Q para não ativar a passiva.'),
  ],
  Briar: [
    rec(ITEMS.THORNMAIL, 'Corta a cura pesada do frenesi (W) e da passiva.'),
    rec(ITEMS.STEELCAPS, 'Reduz fortemente os ataques rápidos durante o W.'),
    rec(ITEMS.ZHONYAS, 'Estase desperdiça a janela inteira de frenesi da Briar.'),
  ],
  Caitlyn: [
    rec(ITEMS.STEELCAPS, 'Mitiga os tiros na cabeça e o poke na fase de rotas.'),
    rec(ITEMS.RANDUINS, 'Reduz o dano massivo dos acertos críticos das armadilhas.'),
    rec(ITEMS.FROZEN_HEART, 'Diminui a velocidade de ataque em lutas de equipe.'),
  ],
  Camille: [
    rec(ITEMS.STEELCAPS, 'Reduz o dano dos ataques antes do Q2 verdadeiro.'),
    rec(ITEMS.STERAKS, 'Escudo absorve o pico de dano verdadeiro do Q2.'),
    rec(ITEMS.ZHONYAS, 'Anula o tempo dentro da arena do Ultimato Hextec.'),
  ],
  Cassiopeia: [
    rec(ITEMS.ROOKERN, 'Escudo mágico constante absorve as rajadas repetidas do E.'),
    rec(ITEMS.FORCE_OF_NATURE, 'Escala resistência mágica rapidamente com o veneno.'),
    rec(ITEMS.MERCS, 'Reduz a duração da petrificação da ultimate.'),
  ],
  Chogath: [
    rec(ITEMS.BOTRK, 'Dano em vida atual derrete a barra gigante de vida.'),
    rec(ITEMS.LIANDRYS, 'Queimadura percentual perfeita contra acúmulos do R.'),
    rec(ITEMS.LDR, 'Amplifica o dano contra vida máxima elevada.'),
  ],
  Darius: [
    rec(ITEMS.STEELCAPS, 'Reduz o dano dos ataques que acumulam a Hemorragia.'),
    rec(ITEMS.DEATHS_DANCE, 'Atrasa o sangramento e ajuda a sobreviver até o reset.'),
    rec(ITEMS.DEAD_MANS, 'Velocidade e resistência à lentidão do W para manter distância.'),
  ],
  Draven: [
    rec(ITEMS.STEELCAPS, 'Redução direta sobre o altíssimo dano dos machados do Q.'),
    rec(ITEMS.RANDUINS, 'Corta o dano crítico explosivo nos abates rápidos.'),
    rec(ITEMS.THORNMAIL, 'Corta o roubo de vida da Sedenta por Sangue e pune trocas.'),
  ],
  DrMundo: [
    rec(ITEMS.MORTAL_REMINDER, 'Corta a regeneração da ultimate e perfura armadura.'),
    rec(ITEMS.BOTRK, 'Dano baseado na vida enorme acumulada pelo Mundo.'),
    rec(ITEMS.MORELLO, 'Aplica Feridas Dolorosas contínuas para magos.'),
  ],
  Evelynn: [
    rec(ITEMS.MAW, 'Escudo mágico impede o abate completo após o Charme.'),
    rec(ITEMS.BANSHEES, 'Bloqueia o proc à distância do W ou a chicotada inicial.'),
    rec(ITEMS.ROOKERN, 'Resistência mágica alta impede explosões com um combo.'),
  ],
  Fiddlesticks: [
    rec(ITEMS.QSS, 'Limpa o Medo do Q instantaneamente na entrada da ultimate.'),
    rec(ITEMS.MERCS, 'Reduz bastante a duração do Medo em área.'),
    rec(ITEMS.MORELLO, 'Corta a cura intensa da drenagem (W) em lutas.'),
  ],
  Fiora: [
    rec(ITEMS.THORNMAIL, 'Aplica Feridas Dolorosas sobre a cura da passiva e do R.'),
    rec(ITEMS.STEELCAPS, 'Reduz o dano dos ataques básicos e do E crítico.'),
    rec(ITEMS.RANDUINS, 'Reduz o crítico garantido do E2 e retarda a perseguição.'),
  ],
  Fizz: [
    rec(ITEMS.ZHONYAS, 'Estase anula 100% do dano do tubarão (R) no momento do impacto.'),
    rec(ITEMS.BANSHEES, 'Bloqueia o tubarão de longo alcance na iniciação.'),
    rec(ITEMS.MAW, 'Absorve o burst mágico antes de finalizar com o W.'),
  ],
  Garen: [
    rec(ITEMS.STERAKS, 'Escudo salva da execução do R quando a vida cai.'),
    rec(ITEMS.STEELCAPS, 'Mitiga o combo Q+E no início e meio de jogo.'),
    rec(ITEMS.BLACK_CLEAVER, 'Corta a armadura do W e dá velocidade para caitar o E.'),
  ],
  Illaoi: [
    rec(ITEMS.THORNMAIL, 'Corta a cura intensa dos tentáculos em trocas corpo a corpo.'),
    rec(ITEMS.CHEMSWORDS, 'Feridas Dolorosas baratas para lutadores punirem o R.'),
    rec(ITEMS.STEELCAPS, 'Reduz o dano do W que ativa os golpes dos tentáculos.'),
  ],
  Irelia: [
    rec(ITEMS.STEELCAPS, 'Reduz o dano dos ataques com passiva cheia.'),
    rec(ITEMS.THORNMAIL, 'Corta a cura do Q e da Espada do Rei Destruído.'),
    rec(ITEMS.FROZEN_HEART, 'Diminui drasticamente a velocidade de ataque da Irelia.'),
  ],
  Jax: [
    rec(ITEMS.FROZEN_HEART, 'Reduz a velocidade de ataque acumulada na passiva.'),
    rec(ITEMS.STEELCAPS, 'Mitiga grande parte do dano físico sustentado em duelos.'),
    rec(ITEMS.ZHONYAS, 'Estase ajuda magos a sobreviverem após o salto do Q.'),
  ],
  Jinx: [
    rec(ITEMS.RANDUINS, 'Reduz muito o dano crítico em área dos foguetes (Q).'),
    rec(ITEMS.FROZEN_HEART, 'Freia o altíssimo ritmo de ataques após o reset da passiva.'),
    rec(ITEMS.STEELCAPS, 'Defesa básica essencial contra dano contínuo de atirador.'),
  ],
  Karthus: [
    rec(ITEMS.ZHONYAS, 'Estase anula completamente o dano do Réquiem (R).'),
    rec(ITEMS.MAW, 'Salva do Réquiem com escudo mágico quando estiver com pouca vida.'),
    rec(ITEMS.BANSHEES, 'Bloqueia a ultimate global do Karthus sem precisar de estase.'),
  ],
  Kassadin: [
    rec(ITEMS.MAW, 'Absorve a explosão repetida do Caminhar na Fenda no nível 16.'),
    rec(ITEMS.ROOKERN, 'Reduz o burst mágico contínuo em lutas prolongadas.'),
    rec(ITEMS.GA, 'Impede que Kassadin ganhe resets fáceis em lutas finais.'),
  ],
  Katarina: [
    rec(ITEMS.MAW, 'Segura o burst da Lótus da Morte e impede o reset da passiva.'),
    rec(ITEMS.MERCS, 'Resistência mágica cedo reduz a pressão de abates no meio.'),
    rec(ITEMS.ROOKERN, 'Impede que Katarina elimine alvos em uma única rotação.'),
  ],
  Kayn: [
    rec(ITEMS.THORNMAIL, 'Corta a cura massiva do Rhaast (Kayn Vermelho) em lutas.'),
    rec(ITEMS.ZHONYAS, 'Anula o combo do Assassino das Sombras ou atrasa a saída do R.'),
    rec(ITEMS.GA, 'Evita abates rápidos contra a forma de Assassino.'),
  ],
  KhaZix: [
    rec(ITEMS.STEELCAPS, 'Reduz o dano físico inicial antes de escalar letalidade.'),
    rec(ITEMS.ZHONYAS, 'Estase impede o abate isolado e trava o reset do salto (E).'),
    rec(ITEMS.GA, 'Neutraliza o pico de explosão isolada em objetivos.'),
  ],
  Khazix: [
    rec(ITEMS.STEELCAPS, 'Reduz o dano físico inicial antes de escalar letalidade.'),
    rec(ITEMS.ZHONYAS, 'Estase impede o abate isolado e trava o reset do salto (E).'),
    rec(ITEMS.GA, 'Neutraliza o pico de explosão isolada em objetivos.'),
  ],
  Leona: [
    rec(ITEMS.MERCS, 'Tenacidade essencial contra a cadeia de Q, E e R.'),
    rec(ITEMS.QSS, 'Remove o atordoamento do R para reposicionar na luta.'),
    rec(ITEMS.LIANDRYS, 'Derrete a armadura e resistência mágica extras do W.'),
  ],
  Lillia: [
    rec(ITEMS.FORCE_OF_NATURE, 'Resistência mágica e velocidade acompanham a passiva dela.'),
    rec(ITEMS.ROOKERN, 'Escudo absorve a queimadura contínua das habilidades.'),
    rec(ITEMS.QSS, 'Limpa a sonolência antes ou durante a ativação do sono (R).'),
  ],
  Lissandra: [
    rec(ITEMS.QSS, 'Remove o Túmulo Congelado (R) instantaneamente.'),
    rec(ITEMS.MERCS, 'Reduz o enraizamento do W e o controle da ultimate.'),
    rec(ITEMS.BANSHEES, 'Bloqueia o primeiro controle após Lissandra sair da garra (E).'),
  ],
  Lux: [
    rec(ITEMS.BANSHEES, 'Bloqueia a Ligação da Luz (Q) e impede o combo completo.'),
    rec(ITEMS.EDGE_OF_NIGHT, 'Protege contra prisões surpresa fora de visão.'),
    rec(ITEMS.MERCS, 'Reduz o tempo presa no Q para escapar do R.'),
  ],
  Malphite: [
    rec(ITEMS.BLACK_CLEAVER, 'Corta a armadura absurda acumulada pelo W e passiva.'),
    rec(ITEMS.VOID_STAFF, 'Penetração mágica indispensável contra tanques de armadura.'),
    rec(ITEMS.BANSHEES, 'Bloqueia o impacto da Força Incontrolável (R) se estiver pronto.'),
  ],
  Malzahar: [
    rec(ITEMS.QSS, 'Item obrigatório: cancela a supressão da ultimate na hora.'),
    rec(ITEMS.BANSHEES, 'Bloqueia a iniciação direta com o R à distância.'),
    rec(ITEMS.ROOKERN, 'Absorve o dano contínuo do E e dos voidlings.'),
  ],
  MasterYi: [
    rec(ITEMS.THORNMAIL, 'Pune a alta velocidade de ataque e corta o roubo de vida.'),
    rec(ITEMS.ZHONYAS, 'Estase quebra o ritmo de reset da ultimate durante a luta.'),
    rec(ITEMS.RANDUINS, 'Reduz dano físico e acertos críticos em builds de crítico.'),
  ],
  Mordekaiser: [
    rec(ITEMS.ROOKERN, 'Escudo mágico forte para duelar contra o dano contínuo da passiva.'),
    rec(ITEMS.SERPENTS_FANG, 'Quebra o escudo gigante do W pela metade nas trocas.'),
    rec(ITEMS.WITS_END, 'Resistência mágica e dano ao contato para vencer dentro do R.'),
  ],
  Morgana: [
    rec(ITEMS.MERCS, 'Reduz drasticamente os longos segundos presa no Q.'),
    rec(ITEMS.BANSHEES, 'Bloqueia a Ligação das Trevas (Q) antes de conectar.'),
    rec(ITEMS.EDGE_OF_NIGHT, 'Permite avançar sem ser parado pelo Q na linha de frente.'),
  ],
  Nautilus: [
    rec(ITEMS.MERCS, 'Reduz a duração do enraizamento passivo e do levantamento do R.'),
    rec(ITEMS.BANSHEES, 'Bloqueia a âncora (Q) ou a onda da ultimate.'),
    rec(ITEMS.LIANDRYS, 'Queima o escudo do W e a vida alta do suporte tanque.'),
  ],
  Nocturne: [
    rec(ITEMS.ZHONYAS, 'Anula o medo do E e o avanço da Paranoia (R) em lutas.'),
    rec(ITEMS.STEELCAPS, 'Mitiga o DPS pesado dentro da trilha do Q.'),
    rec(ITEMS.GA, 'Impede que Nocturne elimine o alvo principal após ultar.'),
  ],
  Olaf: [
    rec(ITEMS.ZHONYAS, 'Desperdiça segundos preciosos da janela do Ragnarok.'),
    rec(ITEMS.THORNMAIL, 'Corta o roubo de vida crescente da passiva com pouca vida.'),
    rec(ITEMS.STEELCAPS, 'Reduz o dano dos ataques frenéticos do W.'),
  ],
  Ornn: [
    rec(ITEMS.BOTRK, 'Derrete a barra de vida massiva gerada pelos itens aprimorados.'),
    rec(ITEMS.LDR, 'Penetração de armadura fundamental contra o bônus da passiva.'),
    rec(ITEMS.LIANDRYS, 'Queimadura percentual constante em confrontos longos.'),
  ],
  Rammus: [
    rec(ITEMS.BLACK_CLEAVER, 'Reduz a armadura extrema que alimenta o dano dos espinhos.'),
    rec(ITEMS.MERCS, 'Encurta a provocação do E para não morrer atacando o W.'),
    rec(ITEMS.WITS_END, 'Dano mágico ao contato evita refletir tanta defesa física.'),
  ],
  Rengar: [
    rec(ITEMS.STEELCAPS, 'Reduz o pico de dano do salto + Q logo nos primeiros níveis.'),
    rec(ITEMS.ZHONYAS, 'Estase anula 100% da emboscada vinda da ultimate.'),
    rec(ITEMS.RANDUINS, 'Corta o dano crítico letal da build de assassino crítico.'),
  ],
  Samira: [
    rec(ITEMS.THORNMAIL, 'Corta a cura intensa em área durante o Gatilho Infernal (R).'),
    rec(ITEMS.STEELCAPS, 'Reduz o dano físico durante o combo de aproximação.'),
    rec(ITEMS.RANDUINS, 'Reduz o crítico da ultimate inteira dentro da equipe.'),
  ],
  Sett: [
    rec(ITEMS.SERPENTS_FANG, 'Corta o escudo gigante do Casca-Grossa (W) na metade.'),
    rec(ITEMS.STEELCAPS, 'Reduz os socos duplos da passiva nas trocas iniciais.'),
    rec(ITEMS.BOTRK, 'Derrete a vida alta de lutador que aumenta o dano do W.'),
  ],
  Skarner: [
    rec(ITEMS.QSS, 'Cancela o empalamento da ultimate (R) na hora.'),
    rec(ITEMS.MERCS, 'Reduz o controle da colisão do E e das lentidões.'),
    rec(ITEMS.BOTRK, 'Dano percentual derrete o acúmulo pesado de vida.'),
  ],
  Soraka: [
    rec(ITEMS.MORELLO, 'Feridas Dolorosas constantes reduzem todas as curas em área.'),
    rec(ITEMS.MORTAL_REMINDER, 'Corta a recuperação do W e da ultimate em lutas.'),
    rec(ITEMS.CHEMSWORDS, 'Aplica corte de cura facilmente com habilidades físicas.'),
  ],
  Swain: [
    rec(ITEMS.MORELLO, 'Corta a drenagem contínua de vida durante o R.'),
    rec(ITEMS.MORTAL_REMINDER, 'Impede Swain de sobreviver na linha de frente curando.'),
    rec(ITEMS.ROOKERN, 'Absorve o dano em área constante da ultimate.'),
  ],
  Sylas: [
    rec(ITEMS.MORELLO, 'Corta a cura explosiva da Regicida (W) em trocas curtas.'),
    rec(ITEMS.THORNMAIL, 'Aplica Feridas Dolorosas sempre que Sylas entra no corpo a corpo.'),
    rec(ITEMS.MAW, 'Segura o burst mágico mesmo se ele roubar uma ultimate forte.'),
  ],
  Syndra: [
    rec(ITEMS.BANSHEES, 'Bloqueia o empurrão com atordoamento (E) à distância.'),
    rec(ITEMS.ZHONYAS, 'Anula o combo completo da ultimate de esferas acumuladas.'),
    rec(ITEMS.MAW, 'Escudo mágico salva do limiar de execução do R.'),
  ],
  TahmKench: [
    rec(ITEMS.SERPENTS_FANG, 'Destrói o escudo gigantesco do E (Pele Grossa).'),
    rec(ITEMS.BOTRK, 'Derrete a barra enorme de vida em trocas estendidas.'),
    rec(ITEMS.LIANDRYS, 'Queimadura percentual constante pune tanques pesados.'),
  ],
  Teemo: [
    rec(ITEMS.ROOKERN, 'Escudo mágico absorve o veneno do E e os cogumelos.'),
    rec(ITEMS.MERCS, 'Reduz a duração da cegueira (Q) e dá resistência mágica.'),
    rec(ITEMS.WITS_END, 'Resistência mágica com dano mágico para vencer trocas.'),
  ],
  Thresh: [
    rec(ITEMS.MERCS, 'Reduz a duração da Sentença (Q) e da caixa (R).'),
    rec(ITEMS.BANSHEES, 'Bloqueia o gancho (Q) impedindo picks decisivos.'),
    rec(ITEMS.EDGE_OF_NIGHT, 'Protege carregadores físicos contra iniciações de longe.'),
  ],
  Tryndamere: [
    rec(ITEMS.RANDUINS, 'Reduz o dano crítico massivo e desacelera durante o R.'),
    rec(ITEMS.FROZEN_HEART, 'Diminui a velocidade de ataque nos 5 segundos de imortalidade.'),
    rec(ITEMS.STEELCAPS, 'Redução direta no dano de todos os golpes críticos.'),
  ],
  Vayne: [
    rec(ITEMS.FROZEN_HEART, 'Diminui a velocidade para atrasar os 3 acertos do W.'),
    rec(ITEMS.EDGE_OF_NIGHT, 'Bloqueia a Condenação (E) impedindo atordoamento na parede.'),
    rec(ITEMS.RANDUINS, 'Reduz o dano físico dos ataques entre os rolamentos.'),
  ],
  Veigar: [
    rec(ITEMS.BANSHEES, 'Permite atravessar a borda da gaiola (E) sem atordoar.'),
    rec(ITEMS.ZHONYAS, 'Estase anula 100% da execução da Explosão Primordial (R).'),
    rec(ITEMS.MERCS, 'Reduz a duração do atordoamento da gaiola.'),
  ],
  Vladimir: [
    rec(ITEMS.MORELLO, 'Corta a cura intensa do Q fortalecido e da ultimate.'),
    rec(ITEMS.MORTAL_REMINDER, 'Aplica Feridas Dolorosas para impedir que sustente na luta.'),
    rec(ITEMS.ROOKERN, 'Absorve o pico de dano mágico no fim do jogo.'),
  ],
  Warwick: [
    rec(ITEMS.THORNMAIL, 'Corta a cura absurda da passiva e do Q com pouca vida.'),
    rec(ITEMS.QSS, 'Remove a supressão da Coerção Infinita (R) instantaneamente.'),
    rec(ITEMS.CHEMSWORDS, 'Feridas Dolorosas fáceis para lutadores vencerem o duelo.'),
  ],
  Yasuo: [
    rec(ITEMS.RANDUINS, 'Reduz o dano de 100% de chance crítica do Yasuo.'),
    rec(ITEMS.STEELCAPS, 'Mitiga drasticamente os golpes de Q e ataques básicos.'),
    rec(ITEMS.FROZEN_HEART, 'Aumenta o tempo de recarga do Q ao reduzir velocidade de ataque.'),
  ],
  Yone: [
    rec(ITEMS.RANDUINS, 'Reduz os golpes críticos constantes durante o E e o R.'),
    rec(ITEMS.STEELCAPS, 'Reduz o dano físico da passiva e do Q na fase de rotas.'),
    rec(ITEMS.ZHONYAS, 'Estase sobrevive à entrada do R e força o retorno do E.'),
  ],
  Yuumi: [
    rec(ITEMS.SERPENTS_FANG, 'Quebra os escudos contínuos aplicados no carregador.'),
    rec(ITEMS.MORELLO, 'Corta a cura de habilidades e ultimate para magos.'),
    rec(ITEMS.MORTAL_REMINDER, 'Reduz a sustentação do alvo hospedeiro durante lutas.'),
  ],
  Zed: [
    rec(ITEMS.ZHONYAS, 'Estase anula completamente o estouro da Marca Fatal (R).'),
    rec(ITEMS.STEELCAPS, 'Reduz o dano físico inicial e os ataques da passiva.'),
    rec(ITEMS.GA, 'Revive após a marca explodir e neutraliza o snowball.'),
  ],
};

export function getCounterItemsForChampion(
  champ: DDragonChampionSummary
): CounterItemRecommendation[] {
  const specific = SPECIFIC_COUNTER_ITEMS[champ.id];
  if (specific) return specific;

  const tags = champ.tags;
  const primary = tags[0] ?? 'Fighter';
  const secondary = tags[1] ?? '';

  if (primary === 'Marksman') {
    return [
      rec(ITEMS.STEELCAPS, 'Reduz diretamente o dano contínuo dos ataques básicos.'),
      rec(ITEMS.RANDUINS, 'Mitiga acertos críticos em lutas de equipe.'),
      rec(ITEMS.FROZEN_HEART, 'Diminui a velocidade de ataque e o DPS constante.'),
    ];
  }

  if (primary === 'Assassin') {
    if (secondary === 'Mage') {
      return [
        rec(ITEMS.ROOKERN, 'Escudo mágico absorve a primeira rotação de burst.'),
        rec(ITEMS.MAW, 'Salva da explosão mágica quando a vida cai.'),
        rec(ITEMS.BANSHEES, 'Bloqueia a habilidade inicial do combo surpresa.'),
      ];
    }
    return [
      rec(ITEMS.ZHONYAS, 'Estase neutraliza a janela inteira de explosão.'),
      rec(ITEMS.STEELCAPS, 'Reduz o dano físico explosivo nos primeiros níveis.'),
      rec(ITEMS.GA, 'Impede eliminações fáceis e quebra resets em lutas.'),
    ];
  }

  if (primary === 'Mage') {
    return [
      rec(ITEMS.ROOKERN, 'Escudo mágico renovável absorve o poke na rota e em lutas.'),
      rec(ITEMS.BANSHEES, 'Bloqueia o controle de grupo ou habilidade chave do combo.'),
      rec(ITEMS.MERCS, 'Reduz controle de grupo e oferece resistência mágica cedo.'),
    ];
  }

  if (primary === 'Tank') {
    return [
      rec(ITEMS.BOTRK, 'Dano em vida atual derrete barras gigantes de HP.'),
      rec(ITEMS.LIANDRYS, 'Queimadura percentual perfeita contra alta vida.'),
      rec(ITEMS.LDR, 'Penetração de armadura e dano extra contra tanques.'),
    ];
  }

  if (primary === 'Support') {
    if (secondary === 'Tank') {
      return [
        rec(ITEMS.MERCS, 'Tenacidade essencial contra múltiplas habilidades de controle.'),
        rec(ITEMS.BANSHEES, 'Bloqueia o gancho ou iniciação direta na retaguarda.'),
        rec(ITEMS.LIANDRYS, 'Derrete a linha de frente tanque em lutas prolongadas.'),
      ];
    }
    return [
      rec(ITEMS.SERPENTS_FANG, 'Corta pela metade os escudos aplicados nos aliados.'),
      rec(ITEMS.MORELLO, 'Aplica Feridas Dolorosas em área contra curas contínuas.'),
      rec(ITEMS.MORTAL_REMINDER, 'Corta curas sem perder penetração de armadura.'),
    ];
  }

  // Fighter default
  return [
    rec(ITEMS.STEELCAPS, 'Reduz o dano físico em duelos corpo a corpo.'),
    rec(ITEMS.THORNMAIL, 'Corta a cura e devolve dano em trocas prolongadas.'),
    rec(ITEMS.DEATHS_DANCE, 'Atrasa o dano explosivo para vencer lutas estendidas.'),
  ];
}
