const exercises = [
	{
		exerciseName: 'Wyciskanie sztangi na ławce płaskiej',
		imgPath: '../../img/photo/exercise/chest-1.PNG',
		url: 'wyciskanie-sztangi-na-ławce-płaskiej',
		muscle1: ['piersiowy większy', 'trójgłowy ramienia', 'naramienny przedni'],
		muscle2: ['zębaty przedni', 'kruczo-ramienny'],
		videoUrl: [
			'https://www.youtube.com/embed/bmjHkNJr7O0',
			'https://www.youtube.com/embed/l9BBv5bU4ks',
		],
	},
	{
		exerciseName: 'Wyciskanie sztangi na ławce skośnej głową w dół',
		imgPath: '../../img/photo/exercise/chest-2.PNG',
		url: 'wyciskanie-sztangi-na-ławce-skośnej-głową-w-dół',
		muscle1: ['piersiowy większy', 'trójgłowy ramienia', 'naramienny przedni'],
		videoUrl: ['https://www.youtube.com/embed/qXhjWWl8hrM'],
	},
	{
		exerciseName: 'Wyciskanie sztangi na ławce dodatniej 30-45°',
		imgPath: '../../img/photo/exercise/chest-3.PNG',
		url: 'wyciskanie-sztangi-na-ławce-dodatniej-30-45°',
		muscle1: [
			'piersiowy większy część obojczykowa (górna)',
			'trójgłowy ramienia',
			'naramienny przedni',
		],
		muscle2: ['zębaty przedni'],
		videoUrl: ['https://www.youtube.com/embed/LDxaLKO33TQ'],
	},
	{
		exerciseName: 'Wyciskanie hantelek na ławce płaskiej',
		imgPath: '../../img/photo/exercise/chest-4.PNG',
		url: 'wyciskanie-hantelek-na-ławce-płaskiej',
		muscle1: ['piersiowy większy', 'trójgłowy ramienia', 'naramienny przedni'],
		videoUrl: ['https://www.youtube.com/embed/ACsYCmLA9Do'],
	},
	{
		exerciseName: 'Wyciskanie hantelek na ławce dodatniej 30-45°',
		imgPath: '../../img/photo/exercise/chest-5.PNG',
		url: 'wyciskanie-hantelek-na-ławce-dodatniej-30-45°',
		muscle1: [
			'piersiowy większy, część obojczykowa (górna)',
			'naramienny przedni',
		],
		muscle2: ['trójgłowy ramienia'],
		videoUrl: ['https://www.youtube.com/embed/C06qMsCzjQ8'],
	},
	{
		exerciseName: 'Wyciskanie hantelek na ławce skośnej głową w dół',
		imgPath: '../../img/photo/exercise/chest-6.PNG',
		url: 'wyciskanie-hantelek-na-ławce-skośnej-głową-w-dół',
		muscle1: [
			'piersiowy większy, część brzuszna (dolna)',
			'trójgłowy ramienia',
			'naramienny przedni',
		],
		videoUrl: ['https://www.youtube.com/embed/QCPKqM1zjHY'],
	},
	{
		exerciseName: 'Rozpiętki z wykorzystaniem wyciągu dolnego',
		imgPath: '../../img/photo/exercise/chest-7.PNG',
		url: 'rozpiętki-z-wykorzystaniem-wyciągu-dolnego',
		muscle1: ['piersiowy większy', 'naramienny przedni'],
		videoUrl: ['https://www.youtube.com/embed/vM1Ovmiu71M'],
	},
	// ćwiczenia na plecy
	{
		exerciseName: 'Podciąganie na drążku trzymanym nachwytem',
		imgPath: '../../img/photo/exercise/back-1.PNG',
		url: 'podciąganie-na-drążku-trzymanym-nachwytem',
		muscle1: [
			'najszerszy grzbietu',
			'obły większy',
			'czworoboczny',
			'dwugłowy ramienia',
		],
		videoUrl: [
			'https://www.youtube.com/embed/UvW6XnClK7A',
			'https://www.youtube.com/embed/YYbqPzlwY6c',
		],
	},
	{
		exerciseName: 'Wiosłowanie sztangą opadzie tułowia',
		imgPath: '../../img/photo/exercise/back-2.PNG',
		url: 'wiosłowanie-sztangą-w-opadzie-tułowia',
		muscle1: ['najszerszy grzbietu', 'obły większy', 'czworoboczny'],
		muscle2: [
			'piersiowy większy część obojczykowa (górna)',
			'kruczo-ramienny',
			'naramienny przedni',
		],
		videoUrl: [
			'https://www.youtube.com/embed/MOlDmANU_4U',
			'https://www.youtube.com/embed/d6MZDg35qzc',
		],
	},
	{
		exerciseName: 'Wiosłowanie hantlą podpartym na ławeczce',
		imgPath: '../../img/photo/exercise/back-3.PNG',
		url: 'wiosłowanie-hantlą-podpartym-na-ławeczce',
		muscle1: [
			'najszerszy grzbietu',
			'obły większy',
			'czworoboczny',
			'naramienny tylny',
			'dwugłowy ramienia',
		],
		videoUrl: ['https://www.youtube.com/embed/YAEBKTpH2lw'],
	},
	//Cwiczenia na czworogłowy uda
	{
		exerciseName: 'Przysiad wykroczny z hantlami',
		imgPath: '../../img/photo/exercise/legs-1.PNG',
		url: 'przysiad-wykroczny-z-hantlami',
		muscle1: ['czworogłowe uda', 'dwugłowy uda', 'pośladkowy'],
		videoUrl: ['https://www.youtube.com/embed/M4THUsShZFA'],
	},
	{
		exerciseName: 'Przysiad ze sztangą trzymaną na plecach',
		imgPath: '../../img/photo/exercise/legs-2.PNG',
		url: 'przysiad-ze-sztangą-trzymaną-na-plecach',
		muscle1: ['czworogłowy uda'],
		muscle2: ['dwugłowy uda', 'pośladkowy'],
		videoUrl: ['https://www.youtube.com/embed/aX7aE0meWcY'],
	},
	{
		exerciseName: 'Przysiad ze sztangą trzymaną z przodu',
		imgPath: '../../img/photo/exercise/legs-3.PNG',
		url: 'przysiad-ze-sztangą-trzymaną-z-przodu',
		muscle1: ['czworogłowy uda'],
		muscle2: ['dwugłowy uda', 'pośladkowy'],
		videoUrl: ['https://www.youtube.com/embed/gOsd8NNPg04'],
	},
	//Cwiczenia na dwugłowe uda/pośladki
	{
		exerciseName: 'Klasyczny martwy ciąg',
		imgPath: '../../img/photo/exercise/legsB-1.PNG',
		url: 'klasyczny-martwy-ciąg',
		muscle1: [
			'pośladkowy',
			'dwugłowy uda',
			'czworogłowy uda',
			'prostownik grzbietu',
			'czworoboczny lędźwi',
			'czworoboczny',
		],
		videoUrl: [
			'https://www.youtube.com/embed/eMhIdSrCaqU',
			'https://www.youtube.com/embed/0_igODjLiXM',
		],
	},
	{
		exerciseName: 'Unoszenie bioder ze sztangą w oparciu o ławeczkę',
		imgPath: '../../img/photo/exercise/legsB-2.PNG',
		url: 'unoszenie-bioder-ze-sztangą-w-oparciu-o-ławeczkę',
		muscle1: ['pośladkowy', 'dwugłowy uda', 'czworogłowy uda'],
		videoUrl: [
			'https://www.youtube.com/embed/ezEQkeQWMPM',
			'https://www.youtube.com/embed/zj6IrdvL9Ps',
		],
	},
	{
		exerciseName: 'Odwodzenie nóg na maszynie',
		imgPath: '../../img/photo/exercise/legsB-3.PNG',
		url: 'odwodzenie-nóg-na-maszynie',
		muscle1: [
			'pośladkowy',
			'napinacz powięzi szerokiej',
			'przywodziciel wielki',
			'gruszkowaty',
		],
		videoUrl: ['https://www.youtube.com/embed/IydaB14rnlg'],
	},
	// Barki
	{
		exerciseName: 'Wyciskanie sztangi nad głowę',
		imgPath: '../../img/photo/exercise/shoulders-1.PNG',
		url: 'wyciskanie-sztangi-nad-głowę',
		muscle1: ['naramienny przedni'],
		muscle2: [
			'piersiowy większy, część obojczykowa (górna)',
			'podgrzebieniowy',
		],
		videoUrl: [
			'https://www.youtube.com/embed/utGTzZRrwm0',
			'https://www.youtube.com/embed/CHWdd9-6Vfw',
		],
	},
	{
		exerciseName: 'Wyciskanie hantli nad głowę siedząc',
		imgPath: '../../img/photo/exercise/shoulders-2.PNG',
		url: 'wyciskanie-hantli-nad-głowę-siedząc',
		muscle1: ['naramienny środkowy'],
		muscle2: ['trójgłowy ramienia', 'czworoboczny'],
		videoUrl: ['https://www.youtube.com/embed/pInYJYisaEo'],
	},
	{
		exerciseName: 'Odwodzenie ramion w bok ze sztangielkami',
		imgPath: '../../img/photo/exercise/shoulders-3.PNG',
		url: 'odwodzenie-ramion-w-bok-ze-sztangielkami',
		muscle1: [
			'naramienny środkowy',
			'piersiowy większy, część mostkowo-żebrowa (środkowa)',
		],
		muscle2: ['czworoboczny'],
		videoUrl: ['https://www.youtube.com/embed/5g5U2dIoeQ0'],
	},
	{
		exerciseName: 'Przyciąganie liny z wyciągu do twarzy (Face pull)',
		imgPath: '../../img/photo/exercise/shoulders-4.PNG',
		url: 'przyciąganie-liny-z-wyciągu-do-twarzy-(Face pull)',
		muscle1: [
			'naramienny tylny',
			'podgrzebieniowy',
			'obły mniejszy',
			'czworoboczny',
		],
		videoUrl: [
			'https://www.youtube.com/embed/foz3Le39glE',
			'https://www.youtube.com/embed/51AuMQzpBVY',
		],
	},
	{
		exerciseName: 'Naprzemianstronne unoszenie ramion w przód ze sztangielkami',
		imgPath: '../../img/photo/exercise/shoulders-5.PNG',
		url: 'naprzemianstronne-unoszenie-ramion-w-przód-ze-sztangielkami',
		muscle1: ['naramienny przedni'],
		muscle2: ['piersiowy większy, część obojczykowa (górna)'],
		videoUrl: ['https://www.youtube.com/embed/0ZslV4JJkIg'],
	},
	//Brzuch
	{
		exerciseName: 'Przyciąganie kolan do klatki w zwisie na drążku',
		imgPath: '../../img/photo/exercise/belly-1.PNG',
		url: 'przyciąganie-kolan-do-klatki-w-zwisie-na-drążku',
		muscle1: ['prosty brzucha', 'biodrowo-lędźwiowy', 'prosty uda'],
		videoUrl: ['https://www.youtube.com/embed/u1OJQFS3Irw'],
	},
	{
		exerciseName: 'Izometryczny skurcz mięśni brzucha. Deska/ścianka/plank',
		imgPath: '../../img/photo/exercise/belly-2.PNG',
		url: 'plank',
		muscle1: [
			'prosty brzucha',
			'skośne brzucha',
			'core',
			'ramion',
			'grzbietu',
			'pośladkowe',
			'czworogłowe uda',
		],
		videoUrl: ['https://www.youtube.com/embed/y1hXARQhHZM'],
	},

	{
		exerciseName: 'Spięcia brzucha z linkami wyciągu górnego',
		imgPath: '../../img/photo/exercise/belly-3.PNG',
		url: 'spięcia-brzucha-z-linkami-wyciągu-górnego',
		muscle1: ['prosty brzucha', 'napinacz powięzi szerokiej'],
		videoUrl: ['https://www.youtube.com/embed/yTTuVSKU-Ks'],
	},
	{
		exerciseName: 'Scyzoryk',
		imgPath: '../../img/photo/exercise/belly-4.PNG',
		url: 'scyzoryk',
		muscle1: ['prosty brzucha', 'skośne brzucha'],
		videoUrl: ['https://www.youtube.com/embed/rwnb6DGyxQA'],
	},
	// Biceps
	{
		exerciseName: 'Zginanie przedramion z gryfem łamanym na modlitewniku',
		imgPath: '../../img/photo/exercise/biceps-1.PNG',
		url: 'zginanie-przedramion-z-gryfem-łamanym-na-modlitewniku',
		muscle1: ['dwugłowy ramienia', 'ramienny'],
		videoUrl: ['https://www.youtube.com/embed/QkK9UjGI4Pw'],
	},

	{
		exerciseName: 'Zginanie przedramion z hantlami w chwycie młotkowym',
		imgPath: '../../img/photo/exercise/biceps-2.PNG',
		url: 'zginanie-przedramion-z-hantlami-w-chwycie-młotkowym',
		muscle1: ['ramienno-promieniowy', 'dwugłowy ramienia'],
		videoUrl: ['https://www.youtube.com/embed/s_ubLsRZ59I'],
	},

	{
		exerciseName: 'Zginanie przedramion ze sztangą stojąc',
		imgPath: '../../img/photo/exercise/biceps-3.PNG',
		url: 'zginanie-przedramion-ze-sztangą-stojąc',
		muscle1: ['dwugłowy ramienia', 'ramienny'],
		videoUrl: ['https://www.youtube.com/embed/wHbgdQ5rS7g'],
	},

	{
		exerciseName:
			'Jednoczesne zginanie przedramion stojąc z wykorzystaniem wyciągów górnych',
		imgPath: '../../img/photo/exercise/biceps-4.PNG',
		url: 'zginanie-przedramion-stojąc-z-wykorzystaniem-wyciągów-górnych',
		muscle1: ['dwugłowy ramienia', 'ramienny'],
		videoUrl: ['https://www.youtube.com/embed/XlvPT0mfQO8'],
	},
	// Triceps
	{
		exerciseName: 'Pompki na triceps na poręczach',
		imgPath: '../../img/photo/exercise/triceps-1.PNG',
		url: 'pompki-na-triceps-na-poręczach',
		muscle1: ['trójgłowy ramienia'],
		muscle2: ['łokciowy'],
		videoUrl: ['https://www.youtube.com/embed/hiAvKCpOWdg'],
	},
	{
		exerciseName: 'Prostowanie przedramion nachwytem z wyciągu górnego',
		imgPath: '../../img/photo/exercise/triceps-2.PNG',
		url: 'prostowanie-przedramion-nachwytem-z-wyciągu-górnego',
		muscle1: ['trójgłowy ramienia', 'łokciowy'],
		videoUrl: ['https://www.youtube.com/embed/WBwvIlLTm00'],
	},
	{
		exerciseName:
			'Prostowanie przedramion ze sztangą łamanąna na ławce płaskiej',
		imgPath: '../../img/photo/exercise/triceps-3.PNG',
		url: 'prostowanie-przedramion-ze-sztangą-łamanąna-na-ławce-płaskiej',
		muscle1: ['trójgłowy ramienia'],
		videoUrl: ['https://www.youtube.com/embed/TJkoGDIdRYk'],
	},

	{
		exerciseName: 'Prostowanie przedramienia w pionie ze sztangielką',
		imgPath: '../../img/photo/exercise/triceps-4.PNG',
		url: 'prostowanie-przedramienia-w-pionie-ze-sztangielką',
		muscle1: ['trójgłowy ramienia'],
		videoUrl: ['https://www.youtube.com/embed/mJf7Q8_nJMk'],
	},
	// Łydki
	{
		exerciseName: 'Wspięcia na palcach stojąc ze sztangą trzymaną na plecach',
		imgPath: '../../img/photo/exercise/calves-1.PNG',
		url: 'wspięcia-na-palcach-stojąc-ze-sztangą-trzymaną-na-plecach',
		muscle1: ['brzuchaty', 'płaszczkowaty', 'strzałkowy długi'],
		videoUrl: ['https://www.youtube.com/embed/46_pPw7WuTY'],
	},
];
export default exercises;
