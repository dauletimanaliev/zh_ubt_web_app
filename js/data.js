// База данных вопросов на казахском языке для ҰБТ
const questionsDatabase = {
    physics: [
        {
            id: 1,
            question: "Ньютонның екінші заңын қандай формула сипаттайды?",
            options: {
                A: "F = ma",
                B: "E = mc²",
                C: "P = mv",
                D: "W = Fs"
            },
            correct: "A",
            explanation: "Ньютонның екінші заңы: күш массаның үдеуге көбейтіндісіне тең (F = ma).",
            hint: "Бұл заң күш, масса және дененің үдеуі арасындағы байланысты көрсетеді.",
            difficulty: 2
        },
        {
            id: 2,
            question: "Вакуумдағы жарық жылдамдығы қанша?",
            options: {
                A: "3 × 10⁸ м/с",
                B: "3 × 10⁶ м/с",
                C: "3 × 10¹⁰ м/с",
                D: "3 × 10⁴ м/с"
            },
            correct: "A",
            explanation: "Вакуумдағы жарық жылдамдығы шамамен 3 × 10⁸ м/с (300 000 км/с) құрайды.",
            hint: "Бұл физиканың негізгі тұрақтыларының бірі.",
            difficulty: 1
        },
        {
            id: 3,
            question: "Электр кедергісінің өлшем бірлігі қандай?",
            options: {
                A: "Ампер (А)",
                B: "Вольт (В)",
                C: "Ом (Ω)",
                D: "Ватт (Вт)"
            },
            correct: "C",
            explanation: "Электр кедергісі омдармен (Ω) өлшенеді, Георг Омның құрметіне аталған.",
            hint: "Бұл бірлік неміс физигінің құрметіне аталған.",
            difficulty: 1
        },
        {
            id: 4,
            question: "Жылдамдық 2 есе артқанда кинетикалық энергия қалай өзгереді?",
            options: {
                A: "2 есе артады",
                B: "4 есе артады",
                C: "Өзгермейді",
                D: "2 есе кемиді"
            },
            correct: "B",
            explanation: "Кинетикалық энергия жылдамдықтың квадратына пропорционал (E = mv²/2), сондықтан жылдамдық 2 есе артқанда энергия 4 есе артады.",
            hint: "Кинетикалық энергия жылдамдықтың квадратына тәуелді.",
            difficulty: 3
        },
        {
            id: 5,
            question: "Идеал газдың қысымы, көлемі және температурасы арасындағы байланысты қандай заң сипаттайды?",
            options: {
                A: "Ом заңы",
                B: "Гук заңы",
                C: "Менделеев-Клапейрон теңдеуі",
                D: "Архимед заңы"
            },
            correct: "C",
            explanation: "Менделеев-Клапейрон теңдеуі (PV = nRT) идеал газдың күйін сипаттайды.",
            hint: "Бұл идеал газдың күй теңдеуі.",
            difficulty: 2
        },
        {
            id: 6,
            question: "Тербеліс периоды дегеніміз не?",
            options: {
                A: "Бір толық тербелістің уақыты",
                B: "Секундтағы тербелістер саны",
                C: "Тепе-теңдік жағдайынан ең үлкен ауытқу",
                D: "Толқынның таралу жылдамдығы"
            },
            correct: "A",
            explanation: "Тербеліс периоды - бір толық тербеліс жасалатын уақыт.",
            hint: "Секундпен өлшенеді.",
            difficulty: 1
        },
        {
            id: 7,
            question: "Жалпы тартылыс заңының формуласы қандай?",
            options: {
                A: "F = kx",
                B: "F = G(m₁m₂)/r²",
                C: "F = ma",
                D: "F = qE"
            },
            correct: "B",
            explanation: "Ньютонның жалпы тартылыс заңы: F = G(m₁m₂)/r², мұндағы G - гравитациялық тұрақты.",
            hint: "Тартылыс күші қашықтықтың квадратына кері пропорционал.",
            difficulty: 2
        },
        {
            id: 8,
            question: "Дененің импульсі дегеніміз не?",
            options: {
                A: "mv",
                B: "ma",
                C: "mv²/2",
                D: "mgh"
            },
            correct: "A",
            explanation: "Дененің импульсі массаның жылдамдыққа көбейтіндісіне тең (p = mv).",
            hint: "Бұл дененің қозғалысын сипаттайтын векторлық шама.",
            difficulty: 2
        },
        {
            id: 9,
            question: "Дене қандай жағдайда салмақсыздық күйінде болады?",
            options: {
                A: "Оған ешқандай күш әсер етпегенде",
                B: "Тұрақты жылдамдықпен қозғалғанда",
                C: "Еркін құлағанда",
                D: "Ғарышта болғанда"
            },
            correct: "C",
            explanation: "Салмақсыздық еркін құлау кезінде пайда болады, бұл кезде жалғыз күш - ауырлық күші.",
            hint: "Бұл күйді лифтте еркін құлау кезінде сезінуге болады.",
            difficulty: 3
        },
        {
            id: 10,
            question: "Дененің инерттілігін қандай шама сипаттайды?",
            options: {
                A: "Салмақ",
                B: "Масса",
                C: "Көлем",
                D: "Тығыздық"
            },
            correct: "B",
            explanation: "Масса дененің инерттілігін сипаттайды - оның жылдамдық өзгерісіне қарсы тұру қабілетін.",
            hint: "Бұл шама дененің орналасқан жеріне тәуелді емес.",
            difficulty: 1
        }
    ],
    mathematics: [
        {
            id: 11,
            question: "sin(90°) неге тең?",
            options: {
                A: "0",
                B: "1",
                C: "√2/2",
                D: "√3/2"
            },
            correct: "B",
            explanation: "sin(90°) = 1, өйткені 90° шеңбердің ширегіне сәйкес келеді.",
            hint: "90° - бұл тік бұрыш.",
            difficulty: 1
        },
        {
            id: 12,
            question: "f(x) = x² функциясының туындысы қандай?",
            options: {
                A: "x",
                B: "2x",
                C: "x²",
                D: "2x²"
            },
            correct: "B",
            explanation: "Дәрежелік функцияның туындысы x^n = n·x^(n-1), сондықтан (x²)' = 2x.",
            hint: "Дәрежелік функцияның дифференциалдау ережесін қолданыңыз.",
            difficulty: 2
        },
        {
            id: 13,
            question: "x² - 4 = 0 теңдеуінің неше түбірі бар?",
            options: {
                A: "0",
                B: "1",
                C: "2",
                D: "3"
            },
            correct: "C",
            explanation: "x² - 4 = 0, x² = 4, x = ±2. Теңдеудің екі түбірі бар: x₁ = 2, x₂ = -2.",
            hint: "Бұл квадрат теңдеуді квадраттар айырымы арқылы шешуге болады.",
            difficulty: 1
        },
        {
            id: 14,
            question: "log₂(8) логарифмі неге тең?",
            options: {
                A: "2",
                B: "3",
                C: "4",
                D: "8"
            },
            correct: "B",
            explanation: "log₂(8) = 3, өйткені 2³ = 8.",
            hint: "2-ні қандай дәрежеге шығарса 8 шығады?",
            difficulty: 2
        },
        {
            id: 15,
            question: "Шеңбердің ауданының формуласы қандай?",
            options: {
                A: "πr",
                B: "2πr",
                C: "πr²",
                D: "πd"
            },
            correct: "C",
            explanation: "Шеңбердің ауданы πr²-ге тең, мұндағы r - шеңбердің радиусы.",
            hint: "Аудан радиустың квадратына пропорционал.",
            difficulty: 1
        },
        {
            id: 16,
            question: "Үшбұрыштың бұрыштарының қосындысы неге тең?",
            options: {
                A: "90°",
                B: "180°",
                C: "270°",
                D: "360°"
            },
            correct: "B",
            explanation: "Кез келген үшбұрыштың бұрыштарының қосындысы әрқашан 180°-қа тең.",
            hint: "Бұл геометрияның негізгі теоремаларының бірі.",
            difficulty: 1
        },
        {
            id: 17,
            question: "2x + 6 = 14 теңдеуінің түбірі қандай сан?",
            options: {
                A: "2",
                B: "4",
                C: "6",
                D: "8"
            },
            correct: "B",
            explanation: "2x + 6 = 14, 2x = 8, x = 4.",
            hint: "6-ны оң жаққа көшіріп, 2-ге бөліңіз.",
            difficulty: 1
        },
        {
            id: 18,
            question: "cos(0°) неге тең?",
            options: {
                A: "0",
                B: "1",
                C: "-1",
                D: "√2/2"
            },
            correct: "B",
            explanation: "cos(0°) = 1, өйткені 0° бұрышының косинусы бірге тең.",
            hint: "0° x осінің оң бағытына сәйкес келеді.",
            difficulty: 1
        },
        {
            id: 19,
            question: "Арифметикалық прогрессияның n-ші мүшесінің формуласы қандай?",
            options: {
                A: "aₙ = a₁ + (n-1)d",
                B: "aₙ = a₁ · qⁿ⁻¹",
                C: "aₙ = a₁ + nd",
                D: "aₙ = a₁ · qⁿ"
            },
            correct: "A",
            explanation: "Арифметикалық прогрессияда aₙ = a₁ + (n-1)d, мұндағы d - прогрессияның айырымы.",
            hint: "Арифметикалық прогрессияда әрбір келесі мүше тұрақты айырымды қосу арқылы алынады.",
            difficulty: 2
        },
        {
            id: 20,
            question: "∫x dx интегралы неге тең?",
            options: {
                A: "x + C",
                B: "x²/2 + C",
                C: "x² + C",
                D: "1 + C"
            },
            correct: "B",
            explanation: "∫x dx = x²/2 + C, мұндағы C - еркін тұрақты.",
            hint: "Интегралдау - дифференциалдауға кері амал.",
            difficulty: 2
        }
    ]
};

// Материалы для обучения на казахском языке
const materialsDatabase = {
    physics: [
        {
            id: 1,
            title: "Механика негіздері",
            type: "video",
            topic: "Механика",
            description: "Классикалық механиканың негізгі ұғымдары мен заңдары",
            url: "#",
            duration: "45 мин",
            difficulty: 1
        },
        {
            id: 2,
            title: "Ньютон заңдары",
            type: "pdf",
            topic: "Механика",
            description: "Ньютонның үш заңы және олардың қолданылуы",
            url: "#",
            pages: 15,
            difficulty: 2
        },
        {
            id: 3,
            title: "Электр тогы",
            type: "video",
            topic: "Электр",
            description: "Электр тогының негіздері және Ом заңы",
            url: "#",
            duration: "30 мин",
            difficulty: 2
        }
    ],
    mathematics: [
        {
            id: 4,
            title: "Тригонометрия негіздері",
            type: "video",
            topic: "Тригонометрия",
            description: "Тригонометриялық функциялар және олардың қасиеттері",
            url: "#",
            duration: "50 мин",
            difficulty: 2
        },
        {
            id: 5,
            title: "Туындылар",
            type: "pdf",
            topic: "Анализ",
            description: "Туындының анықтамасы және есептеу ережелері",
            url: "#",
            pages: 20,
            difficulty: 3
        },
        {
            id: 6,
            title: "Квадрат теңдеулер",
            type: "video",
            topic: "Алгебра",
            description: "Квадрат теңдеулерді шешу әдістері",
            url: "#",
            duration: "25 мин",
            difficulty: 1
        }
    ]
};

// Квесты на казахском языке
const questsDatabase = [
    {
        id: 1,
        title: "Күнделікті тест",
        description: "Кез келген пәннен 5 сұраққа жауап беріңіз",
        type: "daily",
        target: 5,
        reward: 50,
        icon: "📝",
        active: true
    },
    {
        id: 2,
        title: "Физика маманы",
        description: "Физика бойынша 10 тест тапсырыңыз",
        type: "subject",
        target: 10,
        reward: 200,
        icon: "🔬",
        active: true,
        subject: "physics"
    },
    {
        id: 3,
        title: "Математика чемпионы",
        description: "Математика бойынша 15 тест тапсырыңыз",
        type: "subject",
        target: 15,
        reward: 300,
        icon: "📐",
        active: true,
        subject: "mathematics"
    },
    {
        id: 4,
        title: "Апталық марафон",
        description: "7 күн қатарынан тест тапсырыңыз",
        type: "streak",
        target: 7,
        reward: 500,
        icon: "🔥",
        active: true
    }
];

// Достижения на казахском языке
const achievementsDatabase = [
    {
        id: 1,
        title: "Бірінші қадам",
        description: "Алғашқы тестті тапсырдыңыз",
        icon: "🎯",
        condition: "tests_completed >= 1",
        points: 10
    },
    {
        id: 2,
        title: "Тест маманы",
        description: "10 тест тапсырдыңыз",
        icon: "📝",
        condition: "tests_completed >= 10",
        points: 100
    },
    {
        id: 3,
        title: "Физика сүйер",
        description: "Физика бойынша 5 тест тапсырдыңыз",
        icon: "🔬",
        condition: "physics_tests >= 5",
        points: 50
    },
    {
        id: 4,
        title: "Математика дарыны",
        description: "Математика бойынша 5 тест тапсырдыңыз",
        icon: "📐",
        condition: "math_tests >= 5",
        points: 50
    },
    {
        id: 5,
        title: "Мықты студент",
        description: "80% дұрыс жауап беру дәлдігіне жеттіңіз",
        icon: "⭐",
        condition: "accuracy >= 80",
        points: 200
    }
];

// Функции для работы с данными
function getRandomQuestions(subject, count = 10) {
    const questions = questionsDatabase[subject];
    if (!questions) return [];
    
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getQuestionById(subject, id) {
    const questions = questionsDatabase[subject];
    return questions ? questions.find(q => q.id === id) : null;
}

function getMaterialsBySubject(subject) {
    return materialsDatabase[subject] || [];
}

function getActiveQuests() {
    return questsDatabase.filter(quest => quest.active);
}

function getAchievements() {
    return achievementsDatabase;
}

function getSubjectStats() {
    return {
        physics: {
            total: questionsDatabase.physics.length,
            difficulty: {
                easy: questionsDatabase.physics.filter(q => q.difficulty === 1).length,
                medium: questionsDatabase.physics.filter(q => q.difficulty === 2).length,
                hard: questionsDatabase.physics.filter(q => q.difficulty === 3).length
            }
        },
        mathematics: {
            total: questionsDatabase.mathematics.length,
            difficulty: {
                easy: questionsDatabase.mathematics.filter(q => q.difficulty === 1).length,
                medium: questionsDatabase.mathematics.filter(q => q.difficulty === 2).length,
                hard: questionsDatabase.mathematics.filter(q => q.difficulty === 3).length
            }
        }
    };
}
