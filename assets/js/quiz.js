// MAESTRO PALCO - Quiz de Personalidade Musical
// Sistema de pontuação para identificar tipo de músico

const quizData = {
    questions: [
        {
            id: 1,
            text: "O que mais te motiva a fazer música?",
            options: [
                { text: "Expressar meus sentimentos mais profundos", type: "artista", description: "A música como libertação emocional" },
                { text: "Conectar com pessoas e criar energia coletiva", type: "performer", description: "Vivo para a interação humana" },
                { text: "Explorar novos sons e técnicas de produção", type: "produtor", description: "Fascinado pelos detalhes sonoros" },
                { text: "Unir pessoas através de histórias universais", type: "ponte", description: "A música como linguagem comum" },
                { text: "Contar histórias que transformam vidas", type: "contador", description: "Cada música é uma narrativa" }
            ]
        },
        {
            id: 2,
            text: "Quando termina uma música, sua primeira reação é:",
            options: [
                { text: "Guardar para mim e só compartilhar se for perfeita", type: "artista", description: "Proteção da intimidade criativa" },
                { text: "Tocar imediatamente para alguém próximo", type: "performer", description: "Preciso da reação ao vivo" },
                { text: "Analisar tecnicamente cada detalhe da mixagem", type: "produtor", description: "Sempre há algo para melhorar" },
                { text: "Imaginar como diferentes pessoas vão reagir", type: "ponte", description: "Penso no impacto coletivo" },
                { text: "Pensar na mensagem que ela transmite", type: "contador", description: "O significado vem primeiro" }
            ]
        },
        {
            id: 3,
            text: "Sua maior frustração na música é:",
            options: [
                { text: "Quando minha música é mal interpretada", type: "artista", description: "A pureza da intenção importa" },
                { text: "Shows cancelados ou público desengajado", type: "performer", description: "Vivo da energia compartilhada" },
                { text: "Limitações técnicas ou equipamentos ruins", type: "produtor", description: "A qualidade não pode ser comprometida" },
                { text: "Pessoas que não 'sentem' a música", type: "ponte", description: "Quero que todos se conectem" },
                { text: "Histórias que não chegam ao coração", type: "contador", description: "Se não emociona, não funciona" }
            ]
        },
        {
            id: 4,
            text: "Como você define sucesso na música?",
            options: [
                { text: "Criar algo verdadeiramente único e pessoal", type: "artista", description: "Autenticidade acima de tudo" },
                { text: "Lotar casas de show e ver pessoas cantando junto", type: "performer", description: "Conexão em massa" },
                { text: "Dominar completamente meu som e técnica", type: "produtor", description: "Excelência técnica é tudo" },
                { text: "Ver minha música unindo pessoas diferentes", type: "ponte", description: "Música como ferramenta social" },
                { text: "Saber que minha história mudou alguém", type: "contador", description: "Impacto narrativo profundo" }
            ]
        },
        {
            id: 5,
            text: "Quando você ouve uma música, primeiro você repara:",
            options: [
                { text: "Na emoção e no sentimento que transmite", type: "artista", description: "Conexão emocional direta" },
                { text: "Se dá vontade de dançar ou cantar junto", type: "performer", description: "O poder de engajamento" },
                { text: "Na qualidade da produção e arranjos", type: "produtor", description: "O olho técnico nunca descansa" },
                { text: "Em quem mais poderia gostar desta música", type: "ponte", description: "Sempre pensando no coletivo" },
                { text: "Na história ou mensagem por trás dela", type: "contador", description: "O que ela está tentando dizer?" }
            ]
        },
        {
            id: 6,
            text: "Seu ambiente ideal para criar é:",
            options: [
                { text: "Sozinho, sem interferências externas", type: "artista", description: "Solidão criativa essencial" },
                { text: "Com outros músicos, trocando energia", type: "performer", description: "Criação colaborativa" },
                { text: "Em estúdio bem equipado, controlando cada som", type: "produtor", description: "Ambiente técnico perfeito" },
                { text: "Onde posso observar e me inspirar nas pessoas", type: "ponte", description: "Inspiração vem da vida real" },
                { text: "Lugares com história e significado pessoal", type: "contador", description: "Ambiente carregado de narrativa" }
            ]
        },
        {
            id: 7,
            text: "Quando alguém critica sua música, você:",
            options: [
                { text: "Levo para o pessoal, é parte de quem eu sou", type: "artista", description: "Música como extensão do eu" },
                { text: "Pergunto se a pessoa estava presente no show", type: "performer", description: "Performance ao vivo é tudo" },
                { text: "Analiso se a crítica tem base técnica", type: "produtor", description: "Foco na objetividade" },
                { text: "Tento entender o ponto de vista da pessoa", type: "ponte", description: "Todas as perspectivas importam" },
                { text: "Reflito se a mensagem não ficou clara", type: "contador", description: "Comunicação eficiente é meta" }
            ]
        },
        {
            id: 8,
            text: "Sua música ideal seria descrita como:",
            options: [
                { text: "Íntima, profunda e emocionalmente intensa", type: "artista", description: "Alma exposta em forma sonora" },
                { text: "Contagiante, energética e impossível de ignorar", type: "performer", description: "Feita para ser vivida em grupo" },
                { text: "Tecnicamente impecável e sonoramente inovadora", type: "produtor", description: "Referência de qualidade" },
                { text: "Universal, tocando diferentes gerações e culturas", type: "ponte", description: "Linguagem que todos entendem" },
                { text: "Narrativa, com início, meio, fim e transformação", type: "contador", description: "Jornada emocional completa" }
            ]
        },
        {
            id: 9,
            text: "O que mais te incomoda na indústria musical?",
            options: [
                { text: "A pressão para ser comercial e perder a essência", type: "artista", description: "Pureza artística ameaçada" },
                { text: "Músicas feitas só para streaming, sem alma live", type: "performer", description: "Perda da experiência coletiva" },
                { text: "Produção de baixa qualidade sendo aceita", type: "produtor", description: "Mediocridade técnica normalizada" },
                { text: "Música sendo usada para dividir, não unir", type: "ponte", description: "Potencial de união desperdiçado" },
                { text: "Letras vazias sem mensagem transformadora", type: "contador", description: "Desperdício do poder narrativo" }
            ]
        },
        {
            id: 10,
            text: "Seu maior medo como músico é:",
            options: [
                { text: "Perder minha identidade artística", type: "artista", description: "Medo da despersonalização" },
                { text: "Não conseguir mais emocionar uma plateia", type: "performer", description: "Perda da conexão humana" },
                { text: "Ficar tecnicamente obsoleto", type: "produtor", description: "Medo da estagnação técnica" },
                { text: "Criar música que separa ao invés de unir", type: "ponte", description: "Falhar na missão conectiva" },
                { text: "Não ter mais histórias importantes para contar", type: "contador", description: "Esgotamento narrativo" }
            ]
        },
        {
            id: 11,
            text: "Como você gostaria de ser lembrado?",
            options: [
                { text: "Como alguém que foi genuíno e verdadeiro", type: "artista", description: "Legado de autenticidade" },
                { text: "Como quem levou alegria e energia para as pessoas", type: "performer", description: "Memória de momentos especiais" },
                { text: "Como um mestre da técnica e inovação sonora", type: "produtor", description: "Referência de excelência" },
                { text: "Como quem aproximou pessoas através da música", type: "ponte", description: "Agente de união social" },
                { text: "Como contador de histórias que transformaram vidas", type: "contador", description: "Impacto narrativo duradouro" }
            ]
        },
        {
            id: 12,
            text: "Se pudesse mudar uma coisa na sua carreira musical, seria:",
            options: [
                { text: "Ter mais coragem para ser ainda mais eu mesmo", type: "artista", description: "Autenticidade sem limites" },
                { text: "Ter tocado em mais lugares e para mais pessoas", type: "performer", description: "Alcance de performance" },
                { text: "Ter acesso a equipamentos e técnicas melhores", type: "produtor", description: "Evolução técnica constante" },
                { text: "Ter conseguido unir mais pessoas com minha música", type: "ponte", description: "Impacto social ampliado" },
                { text: "Ter contado histórias ainda mais poderosas", type: "contador", description: "Narrativas mais transformadoras" }
            ]
        }
    ]
};

// Tipos de músico e suas características
const musicianTypes = {
    artista: {
        name: "O Artista Puro",
        subtitle: "Música como Expressão da Alma",
        description: "Você vê a música como uma extensão direta da sua alma. Para você, autenticidade é tudo - prefere criar algo genuinamente seu do que seguir fórmulas comerciais. Sua música é íntima, profunda, e cada nota carrega um pedaço do seu ser. Você não se importa tanto com números ou reconhecimento externo; o que importa é se manter fiel à sua essência artística.",
        strengths: ["Autenticidade genuína", "Profundidade emocional", "Identidade artística forte", "Resistência a pressões comerciais"],
        challenges: ["Dificuldade em promover seu trabalho", "Resistência a feedback comercial", "Isolamento criativo", "Subestimar o valor de mercado"],
        nextSteps: "Para o Artista Puro, o próximo passo é aprender que compartilhar sua arte genuína é um ato de generosidade, não de 'venda'. Sua autenticidade é seu maior diferencial no mercado."
    },
    performer: {
        name: "O Performer",
        subtitle: "A Energia do Palco É Sua Vida",
        description: "Você nasceu para o palco! Sua energia vem da interação direta com o público - ver pessoas cantando suas músicas, dançando, se emocionando ao vivo. Para você, música que não funciona ao vivo não é música completa. Você tem o dom natural de conectar com audiências e criar experiências coletivas inesquecíveis.",
        strengths: ["Carisma natural", "Conexão com audiências", "Energia contagiante", "Habilidade de engajamento"],
        challenges: ["Dependência da validação externa", "Dificuldade com música para streaming", "Ansiedade sem performances regulares", "Foco excessivo no imediato"],
        nextSteps: "Para o Performer, o desafio é criar conteúdo que funcione tanto ao vivo quanto digitalmente, expandindo seu alcance sem perder a essência da performance."
    },
    produtor: {
        name: "O Produtor",
        subtitle: "Mestre da Técnica e Inovação",
        description: "Você é fascinado pelos detalhes técnicos da música. Cada frequência, cada reverb, cada compressão importa. Você não só faz música - você esculpe som. Sua busca constante pela perfeição técnica e inovação sonora faz de você um verdadeiro artesão da música moderna.",
        strengths: ["Excelência técnica", "Atenção aos detalhes", "Inovação sonora", "Qualidade consistente"],
        challenges: ["Perfeccionismo paralisante", "Foco excessivo na técnica vs. emoção", "Dificuldade em 'finalizar' projetos", "Subestimar aspectos comerciais"],
        nextSteps: "Para o Produtor, o crescimento vem em equilibrar excelência técnica com conexão emocional e entender que 'feito' é melhor que 'perfeito'."
    },
    ponte: {
        name: "O Construtor de Pontes",
        subtitle: "Unindo Pessoas Através da Música",
        description: "Sua missão é usar a música como ferramenta de conexão humana. Você enxerga o potencial da música de quebrar barreiras, unir gerações e culturas diferentes. Você pensa sempre no impacto coletivo do seu trabalho e tem um talento especial para criar música que ressoa universalmente.",
        strengths: ["Visão inclusiva", "Capacidade de conexão", "Sensibilidade social", "Alcance universal"],
        challenges: ["Tentar agradar a todos", "Perda de identidade pessoal", "Dificuldade em nichos específicos", "Subestimar seu próprio valor"],
        nextSteps: "Para o Construtor de Pontes, o próximo nível é entender que você pode unir pessoas sendo específico, não genérico. Sua autenticidade é o que cria conexão real."
    },
    contador: {
        name: "O Contador de Histórias",
        subtitle: "Transformando Vidas Através de Narrativas",
        description: "Para você, cada música é uma história completa - com início, meio, fim e transformação. Você tem o dom raro de transformar experiências pessoais em narrativas universais que tocam profundamente as pessoas. Sua música não é só som; é uma jornada emocional e transformativa.",
        strengths: ["Narrativa poderosa", "Capacidade de transformação", "Profundidade emocional", "Impacto duradouro"],
        challenges: ["Pressão para sempre ter uma 'mensagem'", "Dificuldade com música instrumental", "Autocrítica excessiva", "Expectativas muito altas"],
        nextSteps: "Para o Contador de Histórias, o crescimento está em entender que nem toda música precisa mudar o mundo - às vezes, tocar uma vida já é suficiente."
    }
};

class MaestroQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = {
            artista: 0,
            performer: 0,
            produtor: 0,
            ponte: 0,
            contador: 0
        };
        
        this.init();
    }

    init() {
        this.showQuestion();
        this.updateProgress();
    }

    showQuestion() {
        const question = quizData.questions[this.currentQuestion];
        const quizContent = document.getElementById('quiz-content');
        
        const questionHTML = `
            <div class="question-card">
                <h2 class="question-title">${question.text}</h2>
                <div class="options-grid">
                    ${question.options.map((option, index) => `
                        <div class="option-card" data-type="${option.type}" data-index="${index}">
                            <div class="option-text">${option.text}</div>
                            <div class="option-description">${option.description}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-nav">
                    <button class="btn btn-secondary" onclick="quiz.previousQuestion()" ${this.currentQuestion === 0 ? 'style="visibility: hidden;"' : ''}>
                        Anterior
                    </button>
                    <button class="btn btn-primary" id="next-btn" onclick="quiz.nextQuestion()" disabled>
                        ${this.currentQuestion === quizData.questions.length - 1 ? 'Ver Resultado' : 'Próxima'}
                    </button>
                </div>
            </div>
        `;
        
        quizContent.innerHTML = questionHTML;
        
        // Add click handlers to options
        const optionCards = document.querySelectorAll('.option-card');
        optionCards.forEach(card => {
            card.addEventListener('click', () => this.selectOption(card));
        });
        
        // Update question counter
        document.getElementById('current-question').textContent = this.currentQuestion + 1;
        document.getElementById('total-questions').textContent = quizData.questions.length;
    }

    selectOption(selectedCard) {
        // Remove previous selection
        document.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Add selection to clicked card
        selectedCard.classList.add('selected');
        
        // Store answer
        const questionId = quizData.questions[this.currentQuestion].id;
        const selectedType = selectedCard.dataset.type;
        const selectedIndex = parseInt(selectedCard.dataset.index);
        
        this.answers[questionId] = {
            type: selectedType,
            index: selectedIndex
        };
        
        // Enable next button
        document.getElementById('next-btn').disabled = false;
        
        // Track answer
        if (typeof gtag !== 'undefined') {
            gtag('event', 'quiz_answer', {
                'event_category': 'Quiz',
                'event_label': `Q${questionId}_${selectedType}`,
                'event_value': this.currentQuestion + 1
            });
        }
    }

    nextQuestion() {
        if (!this.answers[quizData.questions[this.currentQuestion].id]) {
            return;
        }
        
        if (this.currentQuestion < quizData.questions.length - 1) {
            this.currentQuestion++;
            this.showQuestion();
            this.updateProgress();
        } else {
            this.showResult();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.showQuestion();
            this.updateProgress();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / quizData.questions.length) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
    }

    calculateResult() {
        // Reset scores
        Object.keys(this.scores).forEach(type => {
            this.scores[type] = 0;
        });
        
        // Calculate scores based on answers
        Object.values(this.answers).forEach(answer => {
            this.scores[answer.type]++;
        });
        
        // Find the type with highest score
        let maxScore = 0;
        let resultType = 'artista';
        
        Object.entries(this.scores).forEach(([type, score]) => {
            if (score > maxScore) {
                maxScore = score;
                resultType = type;
            }
        });
        
        return resultType;
    }

    showResult() {
        const resultType = this.calculateResult();
        const result = musicianTypes[resultType];
        
        // Hide quiz content and show result
        document.getElementById('quiz-content').style.display = 'none';
        document.querySelector('.quiz-header').style.display = 'none';
        
        const resultDiv = document.getElementById('quiz-result');
        resultDiv.innerHTML = `
            <div class="result-card">
                <div class="result-badge">Seu Perfil Musical</div>
                <h1 class="result-title">${result.name}</h1>
                <p class="result-subtitle">${result.subtitle}</p>
                
                <div class="result-description">
                    <p>${result.description}</p>
                </div>
                
                <div class="separator"></div>
                
                <div style="text-align: left; margin-bottom: 32px;">
                    <h3 style="color: var(--accent); font-family: var(--font-display); margin-bottom: 16px;">
                        💪 Seus Pontos Fortes:
                    </h3>
                    <ul style="color: var(--text-muted); line-height: 1.8;">
                        ${result.strengths.map(strength => `<li>${strength}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="text-align: left; margin-bottom: 32px;">
                    <h3 style="color: var(--accent); font-family: var(--font-display); margin-bottom: 16px;">
                        🎯 Seus Desafios:
                    </h3>
                    <ul style="color: var(--text-muted); line-height: 1.8;">
                        ${result.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="insight">
                    <h3>Próximos Passos</h3>
                    <p>${result.nextSteps}</p>
                </div>
                
                <div class="cta-section">
                    <a href="https://quiz-maestro-palco.rota50ia.com" class="cta-button">
                        Descubra Como Aplicar Seu Perfil
                    </a>
                    
                    <p class="cta-subtitle">
                        Curso específico para seu tipo de músico
                    </p>
                    
                    <div style="margin-top: 24px;">
                        <button class="btn btn-secondary" onclick="quiz.restart()">
                            Refazer o Quiz
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        resultDiv.style.display = 'block';
        
        // Track quiz completion
        if (typeof gtag !== 'undefined') {
            gtag('event', 'quiz_complete', {
                'event_category': 'Quiz',
                'event_label': `Result_${resultType}`,
                'event_value': quizData.questions.length
            });
        }
        
        console.log('Quiz completed! Result:', resultType, 'Scores:', this.scores);
    }

    restart() {
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = {
            artista: 0,
            performer: 0,
            produtor: 0,
            ponte: 0,
            contador: 0
        };
        
        // Show quiz elements again
        document.getElementById('quiz-content').style.display = 'block';
        document.querySelector('.quiz-header').style.display = 'block';
        document.getElementById('quiz-result').style.display = 'none';
        
        // Restart quiz
        this.init();
        
        // Track restart
        if (typeof gtag !== 'undefined') {
            gtag('event', 'quiz_restart', {
                'event_category': 'Quiz',
                'event_label': 'User Restart'
            });
        }
    }
}

// Initialize quiz when page loads
let quiz;
document.addEventListener('DOMContentLoaded', function() {
    quiz = new MaestroQuiz();
});