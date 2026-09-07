import {
  Target,
  Eye,
  RotateCcw,
  LayoutList,
  TrendingUp,
  Ruler,
  Hash,
  ArrowDownCircle,
  ArrowUpCircle,
  RefreshCw,
  Trophy,
} from "lucide-react";
import {
  BenefitItem,
  ModuleItem,
  BonusItem,
  FaqItem,
  PlanFeature,
  DrillExample,
} from "./types";

export const assets = {
  gmailIcon: "/assets/gmail-WKqhIC7A.webp",
  heroMockup: "/assets/BASICO.png",
  heroMockupFallback: "https://i.ibb.co/Z117hWq8/BASICO.png",
  sectionMockup: "/assets/BASICO.png",
  sectionMockupFallback: "https://i.ibb.co/Z117hWq8/BASICO.png",
  basicPlanMockup: "/assets/BASICO.png",
  basicPlanMockupFallback: "https://i.ibb.co/Z117hWq8/BASICO.png",
  completePlanMockup: "/assets/COMPLETO-V2.png",
  completePlanMockupFallback: "https://i.ibb.co/TMFTW82L/COMPLETO.png",
  sampleFicha: "/assets/ficha-carrossel-card.webp",
  guaranteeBadge: "/assets/garantia-opt.webp",
};

export const checkoutLinks = {
  basicPlan: "",
  completePlan: "",
};

export const drillExamples: DrillExample[] = [
  {
    title: "Saque Curto + Recepção Longa + Ataque de 3ª Bola",
    category: "Combinação & Terceira Bola",
    focus: "Transição e Tomada de Decisão",
    diagramInfo: "Saque curto com rotação lateral/baixo → Devolução longa na diagonal → Abertura agressiva de forehand",
  },
  {
    title: "Topspin de Forehand + Deslocamento Lateral",
    category: "Técnico-Tático",
    focus: "Mecânica e Coordenação de Pernas",
    diagramInfo: "Ataque da zona central → Deslocamento rápido para o meio da mesa → Finalização paralela",
  },
  {
    title: "Backhand + Bloqueio + Mudança de Direção",
    category: "Controle & Defesa Ativa",
    focus: "Variação de Ritmo e Antecipação",
    diagramInfo: "Bloqueio passivo no corpo → Abertura ativa na paralela do adversário",
  },
  {
    title: "Precisão em Duas Zonas",
    category: "Regularidade & Alvo",
    focus: "Controle Espacial e Pontaria",
    diagramInfo: "Alternância rítmica entre canto fundo direito e meia-mesa esquerda com alvos delimitados",
  },
  {
    title: "Ataque + Transição",
    category: "Dinâmica de Jogo",
    focus: "Passagem de Bola Ativa para Neutra",
    diagramInfo: "Primeiro golpe ofensivo de topspin seguido de reposicionamento e contra-ataque",
  },
  {
    title: "Construção do Ponto + Tomada de Decisão",
    category: "Situação Real",
    focus: "Leitura de Jogo sob Pressão",
    diagramInfo: "Sequência de 4 bolas pré-determinadas evoluindo para ponto livre e finalização tática",
  },
  {
    title: "Recepção + Ataque",
    category: "Início de Rally",
    focus: "Neutralização e Iniciativa",
    diagramInfo: "Flip curto de backhand ou empurrada profunda preparando ataque imediato na 4ª bola",
  },
  {
    title: "Deslocamento + Regularidade",
    category: "Físico-Técnico",
    focus: "Consistência e Resistência em Mesa",
    diagramInfo: "Série contínua de 20 bolas em movimentação contínua de pivô e lateralidade",
  },
];

export const benefitsList: BenefitItem[] = [
  {
    icon: Target,
    emoji: "🎯",
    title: "CHEGAR AO TREINO SABENDO O QUE APLICAR",
    desc: "Tenha atividades prontas para consultar quando precisar organizar a sessão, sem precisar criar um exercício novo do zero.",
  },
  {
    icon: Eye,
    emoji: "👀",
    title: "VISUALIZAR RAPIDAMENTE A ATIVIDADE",
    desc: "Veja posições, trajetórias, zonas-alvo e sequência do exercício através de diagramas visuais.",
  },
  {
    icon: RotateCcw,
    emoji: "🔄",
    title: "VARIAR SEUS TREINAMENTOS",
    desc: "Tenha diferentes propostas para trabalhar aspectos técnicos e técnico-táticos sem ficar repetindo sempre as mesmas atividades.",
  },
  {
    icon: LayoutList,
    emoji: "⚡",
    title: "ORGANIZAR A AULA COM MAIS PRATICIDADE",
    desc: "Consulte rapidamente como posicionar os jogadores, iniciar a atividade, realizar o rodízio e conduzir as repetições.",
  },
  {
    icon: TrendingUp,
    emoji: "📈",
    title: "FACILITAR OU AUMENTAR A DIFICULDADE",
    desc: "Utilize as regressões e progressões indicadas em cada ficha conforme a necessidade dos alunos.",
  },
];

export const whoIsItForCards = [
  {
    icon: "👨‍🏫",
    title: "PROFESSORES DE TÊNIS DE MESA",
    desc: "Para quem precisa de atividades prontas para utilizar durante suas aulas.",
  },
  {
    icon: "🎯",
    title: "TREINADORES",
    desc: "Para quem trabalha o desenvolvimento técnico e técnico-tático de seus atletas.",
  },
  {
    icon: "🏢",
    title: "PROFESSORES DE CLUBES E ACADEMIAS",
    desc: "Para quem precisa variar os treinamentos sem precisar elaborar cada atividade do zero.",
  },
  {
    icon: "🤝",
    title: "PROFESSORES DE PROJETOS ESPORTIVOS",
    desc: "Para quem trabalha com diferentes grupos de alunos e precisa de uma forma prática de organizar as sessões.",
  },
  {
    icon: "⚡",
    title: "QUEM TRABALHA COM ALUNOS INTERMEDIÁRIOS E AVANÇADOS",
    desc: "Para quem já passou da fase de iniciação e precisa trabalhar saque, recepção, ataque, deslocamento, combinações e situações de jogo.",
  },
];

export const notForYouPoints = [
  "Procura um material de iniciação para quem nunca jogou.",
  "Procura aulas em vídeo.",
  "Busca apenas conteúdo teórico sobre tênis de mesa.",
  "Não trabalha com aulas ou treinamentos da modalidade.",
];

export const contentModules: ModuleItem[] = [
  {
    title: "📐 DIAGRAMAS DAS ATIVIDADES",
    desc: "Visualize posições, trajetórias, zonas-alvo e deslocamentos de forma clara e intuitiva.",
  },
  {
    title: "🔢 SEQUÊNCIAS PASSO A PASSO",
    desc: "Saiba exatamente como a atividade começa, evolui e termina sem margem para dúvidas.",
  },
  {
    title: "🎯 METAS DE EXECUÇÃO",
    desc: "Critérios objetivos para acompanhar o rendimento e a precisão da atividade.",
  },
  {
    title: "👁️ PONTOS DE OBSERVAÇÃO",
    desc: "Saiba quais aspectos técnicos e técnico-táticos observar e corrigir durante o treino.",
  },
  {
    title: "🔽 REGRESSÕES",
    desc: "Alternativas para facilitar a atividade quando o aluno apresentar dificuldade na execução.",
  },
  {
    title: "🔼 PROGRESSÕES",
    desc: "Formas de aumentar gradualmente a exigência e a intensidade do treinamento.",
  },
  {
    title: "🔄 RODÍZIOS",
    desc: "Orientações para organizar a rotação dos alunos durante a atividade em turmas cheias.",
  },
  {
    title: "🏓 TRANSFERÊNCIA PARA O JOGO",
    desc: "Propostas práticas para levar o que foi treinado para situações reais de disputa de ponto.",
  },
];

export const bonusList: BonusItem[] = [
  {
    n: 1,
    title: "GUIA PRÁTICO DE SAQUE & 3ª BOLA",
    desc: "Combinações estruturadas de saque curto, médio e longo com esquemas de ataque imediato para definir o ponto na 3ª bola.",
    originalPrice: "R$ 39,00",
  },
  {
    n: 2,
    title: "GUIA DE AULAS PRONTAS",
    desc: "Modelos de sessões completas combinando diferentes fichas.",
    originalPrice: "R$ 37,00",
  },
  {
    n: 3,
    title: "GUIA TÁTICO CONTRA PINOS & DEFESA",
    desc: "Estratégias e padrões de treino específicos para preparar seus alunos contra adversários com borracha de pino ou defensores.",
    originalPrice: "R$ 37,00",
  },
  {
    n: 4,
    title: "ROTINAS DE AQUECIMENTO ESPECÍFICO & FOOTWORK",
    desc: "Protocolos rápidos de 10 a 15 minutos com bola para ativar coordenação motora, agilidade de pernas e prontidão.",
    originalPrice: "R$ 29,00",
  },
  {
    n: 5,
    title: "MODELOS DE TORNEIOS RÁPIDOS & RODÍZIOS",
    desc: "Formatos dinâmicos de disputas internas para fechar as aulas simulando a pressão e tomada de decisão de jogos reais.",
    originalPrice: "R$ 29,00",
  },
  {
    n: 6,
    title: "CHECKLIST DE AVALIAÇÃO TÉCNICO-TÁTICA",
    desc: "Ficha de diagnóstico visual para identificar e corrigir falhas no forehand, backhand, transição e posicionamento.",
    originalPrice: "R$ 29,00",
  },
];

export const totalBonusValue = "R$ 200,00";

export const faqList: FaqItem[] = [
  {
    q: "As fichas são para iniciantes?",
    a: "Não. O material foi desenvolvido principalmente para professores e treinadores que trabalham com alunos que já dominam os fundamentos básicos.",
  },
  {
    q: "As fichas são em vídeo?",
    a: "Não. O produto é composto por fichas visuais de treinamento, desenvolvidas para consulta durante as aulas.",
  },
  {
    q: "Posso imprimir as fichas?",
    a: "Sim. As fichas são estruturadas para serem consultadas e impressas, facilitando o uso durante o treinamento.",
  },
  {
    q: "O que existe dentro de cada ficha?",
    a: "As fichas podem apresentar organização da atividade, diagrama, sequência, regras, meta, observação, rodízio, regressão, progressão e transferência para o jogo, conforme a atividade.",
  },
  {
    q: "Preciso criar os exercícios sozinho?",
    a: "Não. A proposta do material é justamente entregar atividades previamente estruturadas, para que o professor não precise começar cada treino do zero.",
  },
  {
    q: "O material trabalha apenas golpes?",
    a: "Não. As atividades podem trabalhar aspectos como saque, recepção, ataque, topspin, backspin, bloqueio, deslocamento, precisão, regularidade, combinações, tomada de decisão e situações de jogo, conforme o tema de cada ficha.",
  },
  {
    q: "O material é oficial da CBTM?",
    a: "Não. É um material autoral e independente, estruturado com base em princípios e referências técnicas e pedagógicas públicas compatíveis com a CBTM/UniTM. Não é material oficial, produzido, aprovado ou certificado pela CBTM.",
  },
  {
    q: "Como recebo o material?",
    a: "Após a confirmação do pagamento, o acesso será enviado automaticamente no seu e-mail.",
  },
  {
    q: "O acesso é vitalício?",
    a: "Sim, o acesso ao material digital para consulta e download é contínuo e garantido conforme as condições da oferta.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você conta com 7 dias de garantia, conforme as condições apresentadas na oferta.",
  },
];

export const basicPlanFeatures = [
  "+100 Fichas Visuais de Aulas Prontas",
  "Diagramas das atividades com trajetórias e zonas",
  "Sequências de execução passo a passo",
  "Pontos de observação e correção técnica",
  "Acesso imediato",
  "Acesso vitalício",
];

export const completePlanFeatures: PlanFeature[] = [
  { text: "+100 FICHAS VISUAIS DE AULAS PRONTAS", isBonus: false },
  { text: "Diagramas visuais de todas as atividades", isBonus: false },
  { text: "Sequências de execução detalhadas", isBonus: false },
  { text: "Metas de treino e pontos de observação", isBonus: false },
  { text: "Progressões, regressões e rodízios de alunos", isBonus: false },
  { text: "Acesso imediato no celular, tablet e PC", isBonus: false },
  { text: "BÔNUS 01: Guia Prático de Saque & 3ª Bola", isBonus: true },
  { text: "BÔNUS 02: Guia de Aulas Prontas", isBonus: true },
  { text: "BÔNUS 03: Guia Tático contra Pinos & Defesa", isBonus: true },
  { text: "BÔNUS 04: Aquecimento Específico & Footwork", isBonus: true },
  { text: "BÔNUS 05: Modelos de Torneios & Disputas Rápidas", isBonus: true },
  { text: "BÔNUS 06: Checklist de Avaliação Técnico-Tática", isBonus: true },
];
