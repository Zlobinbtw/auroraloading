/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "AURORA";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/fond1.jpg",
	"backgrounds/images/fond2.jpg",
	"backgrounds/images/fond3.jpg",
	"backgrounds/images/fond4.jpg",
	"backgrounds/images/fond5.jpg",
	"backgrounds/images/fond6.jpg",
	"backgrounds/images/fond7.jpg",
	"backgrounds/images/fond8.jpg",
	"backgrounds/images/fond9.jpg",
	"backgrounds/images/fond10.jpg",
	"backgrounds/images/fond11.jpg",
	"backgrounds/images/fond12.jpg",
	"backgrounds/images/fond13.jpg",
	"backgrounds/images/fond14.jpg",
	"backgrounds/images/fond15.jpg",
	"backgrounds/images/fond16.jpg",
	"backgrounds/images/fond17.jpg",
	"backgrounds/images/fond18.jpg",
	"backgrounds/images/fond19.jpg",
	"backgrounds/images/fond20.jpg",
	"backgrounds/images/fond21.jpg",
	"backgrounds/images/fond22.jpg",
	"backgrounds/images/fond23.jpg",
	"backgrounds/images/fond24.jpg",
	"backgrounds/images/fond25.jpg",
	"backgrounds/images/fond26.jpg",
	"backgrounds/images/fond27.jpg",
	"backgrounds/images/fond28.jpg"
]

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
"songs/song.ogg",
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Введите // перед вашим сообщением, чтобы написать в общий чат (ООС)",
"Введите .// или [[ перед вашим сообщением, чтобы писать в локальный чат (LOOC)",
"Зажмите F1 чтобы получить краткую информацию о своем персонаже.",
"Герои долго не живут.",
"В этой жизни всё вовращается бумерангом.",
"Не стоит бесцельно бродить и искать RP. Создавайте RP сами, а Администрация - поможет вам!",
"Альянс сильно изменился с их первого правления. Держите это в голове.",
"Процент выжить намного больше, когда все в отряде имеют хорошее снаряжение. Делитесь снаряжением.",
"Иногда выпрыгнуть из машины и использовать ее как укрытие - Лучшая стратегия.",
"«Чтобы пролитая нами кровь не была напрасной, нам не остается ничего, кроме как пролить ещё больше.» (с) Джостер Крим",
"«Галактика. Триллионы звезд ждут, чтобы их исследовали. Где чудесные творения смешиваются с желаниями и встречами с неизвестным. Где стремление выйти за рамки и определить свою судьбу универсально. Где из пепла разрушений может взойти новый рассвет, открывающий более глубокое понимание. И эта кажущаяся бесконечной галактика все еще существует; она медлит, ожидая нашего следующего шага, зная, что ее величайшая история все еще впереди.» (c) Керсси Д'ванна",
"«Лицо врага поражает меня тогда, когда я замечаю, как оно похоже на моё.» (c) Станислав Лец",
"«И пусть эта война закончится либо победой, либо смертью. Мы больше не допустим компромисса.» (с) Керсси Д'Ванна",
"«Под развесистым каштаном продали средь бела дня — Я тебя, а ты - меня...»",
"Сакура - Одна из самых влиятельных корпораций на данный момент. Рыночный лидер в области корпоративной безопасности, банковского дела и производства, оружейный гигант и производитель высокотехнологичного оружия высшей ценовой категории.",
"CombTech -  мегакорпорация, одна из самых влиятельных компаний мира, которая специализируется на производстве и разработке боевого огнестрельного оружия средней ценовой категории, военной экипировки и транспорта военного назначения для вооруженных сил, частных организаций и локальных полицейских формирований, предоставлении охранных и военных услуг оборонительного и наступательного характера, разработке и производстве огнестрельного оружия, дронов, боевых имплантов, а также военной техники для боевых действий.",
"Озутный Наркс - представляет из себя смесь районов, где самые важные - у воды. Наркс относится к территории Коннектикута, и являются самостоятельным сектором, который живет лишь одним портом и торговлей.",
'После перестройки Альянса центром всей деятельности на земле стал Штат Коннектикут. Бывшие города Альянса, которые остались в целостности - продолжили работу как индустриальные города, города-лоялисты, и тюремные поселения.'
];


/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 10000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 2000;