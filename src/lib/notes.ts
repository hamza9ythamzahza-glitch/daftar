import { practiceSections } from "./study-pack";

export type Example = { es: string; dar: string };
export type Line = { es: string; ar: string };
export type Check = { id: string; text: string };
export type LinkItem = { label: string; href: string; note: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "checks"; items: Check[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "links"; items: LinkItem[] }
  | { type: "examples"; items: Example[] }
  | { type: "pairs"; caption?: string; items: Line[] }
  | { type: "dialogue"; title: string; lines: { who: string; es: string; ar: string }[] }
  | { type: "reading"; level: string; title: string; es: string; ar: string };

export type Section = {
  id: string;
  nav: string;
  kicker: string;
  title: string;
  lede: string;
  blocks: Block[];
};

const core: Section[] = [
  {
    id: "tariq",
    nav: "الطريق",
    kicker: "من الصفر",
    title: "ما تبدا حتى بـ B1",
    lede: "الطريق واحد: A1 مزيان، من بعد A2 مزيان، من بعد B1. إلى خلطيهم غادي توقف فالأزمنة.",
    blocks: [
      {
        type: "p",
        text: "الهدف حتى B1 ماشي تهضر بحال الإسبان. الهدف: تفهم ناس كيهضرو بوضوح، تروي قصة فالماضي، تعطي رأي مع السبب، وتكتب إيميل عادي بلا ما تترجم كلمة بكلمة.",
      },
      {
        type: "callout",
        title: "قاعدة الكوتش",
        text: "ما تدخلش لـ subjuntivo حتى تقدر تروي حكاية فيها fui و era بلا ما تفكر. وإلى قدرت دير اختبار المستوى بصوت عالي بلا ورقة، سدّي وطلع.",
      },
      {
        type: "table",
        caption: "شنو كيسدّي كل مستوى",
        headers: ["المستوى", "كتقدر", "المدة إلى داومتي"],
        rows: [
          ["A1", "تعيش نهار بسيط: سلام، راسك، الدار، الماكلة، الروتين", "≈ 3 شهور"],
          ["A2", "تحكي شنو وقع، تقارن، تشري، وتعطي تعليمات", "≈ 3 حتى 4 شهور"],
          ["B1", "تناقش، تعطي رأي، وتفرّق الماضي، وتستعمل المستقبل والشرط", "≈ 4 حتى 6 شهور"],
        ],
      },
      {
        type: "p",
        text: "المجموع الواقعي من الصفر حتى B1 ثابت: 10 حتى 12 شهر، 45 حتى 70 دقيقة فالنهار. 6 شهور كيوصلو لـ A2 مزيان أو بداية B1، ماشي طلاقا.",
      },
      {
        type: "h",
        text: "علاش هاد اللهجة",
      },
      {
        type: "p",
        text: "اختار إسبانية إسبانيا. قريبة منك، وهي اللي كيخدم بها Instituto Cervantes وامتداد DELE. z و c قبل e/i كينطقو بحال th فالإنجليزية (think). أمريكا اللاتينية كتنطقهم s. ما تخلطش الجوج فنفس الجملة.",
      },
      {
        type: "h",
        text: "الفرنسية تعاون وتخدع",
      },
      {
        type: "examples",
        items: [
          { es: "familia, importante, posible", dar: "قراب للفرنسية. استغلهم." },
          { es: "embarazada", dar: "حامل. ماشي محرجة." },
          { es: "constipado", dar: "مزكوم. ماشي إمساك." },
          { es: "largo", dar: "طويل. ماشي كبير." },
          { es: "soportar", dar: "يتحمّل. ماشي غير «يدعم»." },
        ],
      },
      {
        type: "checks",
        items: [
          { id: "t1", text: "قررت نكمّل A1 قبل ما نحل A2" },
          { id: "t2", text: "غادي نخدم إسبانية إسبانيا، ما نخلطهاش" },
          { id: "t3", text: "45 دقيقة على الأقل، كل نهار، حتى الأحد" },
        ],
      },
    ],
  },
  {
    id: "a1",
    nav: "A1",
    kicker: "Acceso",
    title: "A1 — تعيش نهار بسيط",
    lede: "تفهم وتقول جمل قصيرة، ببطء، على راسك وعلى اللي حواليك. إلى ما قدرتيش التقديم فدقيقة بلا ورقة، مازال ما سدّيتيش A1.",
    blocks: [
      { type: "h", text: "النطق، من النهار الأول" },
      {
        type: "p",
        text: "الحروف الخمسة a e i o u صافيّين وقصار. ما تطوّلهمش بحال العربية. الـ p خاصك تخرجها بالشفتين: العربية ما عندهاش هاد الصوت. الـ rr مكررة طويلة، أصعب حاجة.",
      },
      {
        type: "table",
        caption: "الأصوات اللي كيطيحو فيها العرب",
        headers: ["الحرف", "النطق", "مثال"],
        rows: [
          ["h", "ما كتنطقش", "hola = أولا"],
          ["j / ge / gi", "خ، ماشي ج", "jamón, gente"],
          ["ñ", "ني", "España, niño"],
          ["ll", "ي فإسبانيا", "calle, me llamo"],
          ["r", "ر خفيفة", "pero"],
          ["rr أو r فالأول", "ر مكررة", "perro, rosa"],
          ["z / ce / ci", "th (إسبانيا)", "zapato, cena, cinco"],
          ["p", "ب شفوية", "papá, España"],
          ["v", "بحال b", "vivir, Valencia"],
          ["qu", "ك", "queso, quién"],
        ],
      },
      {
        type: "checks",
        items: [
          { id: "a1p1", text: "نطق hola, jamón, España, perro, zapato بصوت عالي" },
          { id: "a1p2", text: "فرّقت r خفيفة و rr مكررة" },
          { id: "a1p3", text: "p فـ papá خارجة بالشفتين" },
        ],
      },
      { type: "h", text: "الاسم، الجندر، والأدوات" },
      {
        type: "examples",
        items: [
          { es: "el libro / los libros", dar: "مذكر مفرد / جمع" },
          { es: "la mesa / las mesas", dar: "مؤنث مفرد / جمع" },
          { es: "un café / una casa", dar: "تنكير: شي قهوة / شي دار" },
          { es: "una casa grande", dar: "الصفة من بعد الاسم وكتوافق" },
          { es: "el problema, el día, la mano", dar: "استثناءات. احفظهم ما تخمّمش" },
        ],
      },
      {
        type: "p",
        text: "الأداة كتلف مع الحرف: a + el = al، de + el = del. Voy al mercado. Vengo del trabajo.",
      },
      { type: "h", text: "ser ولا estar" },
      {
        type: "callout",
        title: "الفخ رقم 1",
        text: "ser للهوية والمهنة والوقت والأصل. estar للبلاصة والحالة المؤقتة. إلى ترددتي: «شنو هو؟» = ser. «فين هو ولا كيفاش دابا؟» = estar.",
      },
      {
        type: "table",
        headers: ["ser", "estar"],
        rows: [
          ["Soy marroquí.", "Estoy en Beni Mellal."],
          ["Soy estudiante.", "Estoy cansado."],
          ["Es médico.", "Está en casa."],
          ["Son las tres.", "Está nublado."],
          ["La casa es grande.", "La tienda está cerrada."],
        ],
      },
      {
        type: "table",
        caption: "تصريف ser و estar",
        headers: ["", "ser", "estar"],
        rows: [
          ["yo", "soy", "estoy"],
          ["tú", "eres", "estás"],
          ["él / ella", "es", "está"],
          ["nosotros", "somos", "estamos"],
          ["vosotros", "sois", "estáis"],
          ["ellos", "son", "están"],
        ],
      },
      { type: "h", text: "الحاضر العادي" },
      {
        type: "table",
        caption: "النهايات. احفظ السطر، ما تحفظش كل فعل بوحدو.",
        headers: ["", "-ar hablar", "-er comer", "-ir vivir"],
        rows: [
          ["yo", "hablo", "como", "vivo"],
          ["tú", "hablas", "comes", "vives"],
          ["él", "habla", "come", "vive"],
          ["nosotros", "hablamos", "comemos", "vivimos"],
          ["vosotros", "habláis", "coméis", "vivís"],
          ["ellos", "hablan", "comen", "viven"],
        ],
      },
      {
        type: "p",
        text: "yo ما تاخدش s. tú كاتاخد s. vosotros غير فإسبانيا، خليه حيت اختارينا هاد اللهجة. النفي ساهل: no قبل الفعل. No hablo francés.",
      },
      { type: "h", text: "أفعال A1 اللي ما تتسناش" },
      {
        type: "table",
        caption: "yo / tú / él / nosotros",
        headers: ["الفعل", "التصريف", "المعنى"],
        rows: [
          ["tener", "tengo, tienes, tiene, tenemos", "عندي / عندو"],
          ["ir", "voy, vas, va, vamos", "يمشي"],
          ["hacer", "hago, haces, hace, hacemos", "يدير"],
          ["poder", "puedo, puedes, puede", "يقدر"],
          ["querer", "quiero, quieres, quiere", "يبغي"],
          ["venir", "vengo, vienes, viene", "يجي"],
          ["decir", "digo, dices, dice", "يقول"],
          ["salir", "salgo, sales, sale", "يخرج"],
          ["poner", "pongo, pones, pone", "يحط"],
          ["ver", "veo, ves, ve", "يشوف"],
          ["dar", "doy, das, da", "يعطي"],
          ["hay", "hay", "كاين"],
        ],
      },
      {
        type: "examples",
        items: [
          { es: "Tengo 25 años.", dar: "عندي 25 عام." },
          { es: "Voy al trabajo.", dar: "غانمشي للخدمة." },
          { es: "No puedo hoy.", dar: "ما نقدرش اليوم." },
          { es: "Quiero un café.", dar: "بغيت قهوة." },
          { es: "Hay un banco allí.", dar: "كاين بنك تمّا." },
          { es: "Voy a estudiar.", dar: "غادي نقرا. ir a + فعل = المستقبل القريب." },
        ],
      },
      { type: "h", text: "gustar ماشي «أنا كنبغي»" },
      {
        type: "p",
        text: "اللي كيعجب كيكون هو الفاعل. نتا غير كتاخد me / te / le. مفرد إلى كانت حاجة واحدة أو فعل، جمع إلى كانوا جوج ولا كثر.",
      },
      {
        type: "examples",
        items: [
          { es: "Me gusta el café.", dar: "كتعجبني القهوة." },
          { es: "Me gustan los libros.", dar: "كتعجبني الكتب." },
          { es: "No me gusta madrugar.", dar: "ما كتعجبنيش البكورة." },
          { es: "¿Te gusta esta ciudad?", dar: "واش كتعجبك هاد المدينة؟" },
        ],
      },
      { type: "h", text: "الأسئلة والملك والإشارة" },
      {
        type: "table",
        headers: ["السؤال", "مثال"],
        rows: [
          ["qué", "¿Qué haces?"],
          ["quién", "¿Quién es?"],
          ["dónde", "¿Dónde vives?"],
          ["cuándo", "¿Cuándo es la clase?"],
          ["cómo", "¿Cómo estás?"],
          ["cuánto", "¿Cuánto cuesta?"],
          ["por qué / porque", "¿Por qué? Porque trabajo."],
        ],
      },
      {
        type: "examples",
        items: [
          { es: "mi casa, tu número, su nombre", dar: "ديالي، ديالك، ديالو/ديالها" },
          { es: "este libro / esta mesa", dar: "هاد الكتاب / هاد الطابلة" },
          { es: "Me llamo Hamza.", dar: "سميتي حمزة. llamarse" },
        ],
      },
      { type: "h", text: "الوقت، النهار، والأرقام" },
      {
        type: "list",
        items: [
          "0–15: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince.",
          "16–19: dieciséis, diecisiete, dieciocho, diecinueve.",
          "20–29: veinte, veintiuno, veintidós… veintinueve. من 30: treinta y uno.",
          "40 cuarenta, 50 cincuenta, 60 sesenta, 70 setenta, 80 ochenta, 90 noventa, 100 cien, 1000 mil.",
          "الوقت: Es la una. Son las tres. Son las tres y cuarto. Son las tres y media. Son las tres menos cuarto.",
          "الأيام: lunes, martes, miércoles, jueves, viernes, sábado, domingo.",
          "الشهور: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.",
        ],
      },
      { type: "h", text: "كلمات تخدم بيها دابا" },
      {
        type: "table",
        headers: ["الموضوع", "الكلمات"],
        rows: [
          ["سلام", "hola, buenos días, buenas tardes, buenas noches, adiós, hasta luego, por favor, gracias, de nada, perdón"],
          ["راسك", "me llamo, soy, tengo … años, vivo en, trabajo, estudio, de Marruecos"],
          ["العائلة", "madre, padre, hermano, hermana, hijo, hija, abuelo, abuela"],
          ["الدار", "casa, piso, habitación, cocina, baño, salón, cama, mesa, silla"],
          ["المدينة", "calle, plaza, estación, autobús, derecha, izquierda, todo recto, cerca, lejos"],
          ["الماكلة", "agua, café, té, pan, carne, pescado, fruta, la cuenta, la carta"],
          ["الروتين", "levantarse, ducharse, desayunar, trabajar, comer, volver, cenar, acostarse"],
        ],
      },
      {
        type: "examples",
        items: [
          { es: "Me levanto a las siete.", dar: "كنفيق فالسبعة." },
          { es: "¿Dónde está la estación?", dar: "فين هي المحطة؟" },
          { es: "Todo recto y a la derecha.", dar: "نيشان ومن بعد لليمين." },
          { es: "La cuenta, por favor.", dar: "الحساب، عفاك." },
        ],
      },
      {
        type: "callout",
        title: "اختبار A1",
        text: "سجّل دقيقة بلا ورقة: سميتك، منين نتا، شنو كتدير، وين كتسكن، شنو كيعجبك، وشنو غادي دير غدا. إلى وقفتي تترجم، عاود الأسبوع، ما تطلعش.",
      },
      {
        type: "checks",
        items: [
          { id: "a1g1", text: "ser و estar: 10 جمل بلا غلط" },
          { id: "a1g2", text: "الحاضر -ar -er -ir مكتوب بلا جدول" },
          { id: "a1g3", text: "tengo / voy / hago / quiero / puedo خرجو وحدهم" },
          { id: "a1g4", text: "gustar: مفرد وجمع" },
          { id: "a1g5", text: "الأرقام حتى 100 والساعة" },
          { id: "a1g6", text: "تقديم دقيقة مسجّل ومسموع" },
        ],
      },
    ],
  },
  {
    id: "a2",
    nav: "A2",
    kicker: "Plataforma",
    title: "A2 — تحكي شنو وقع",
    lede: "هنا كتبدا الإسبانية الحقيقية: الماضي، المقارنة، الضمائر، والأمر. A1 باقي تحتك، ما تدفنوش.",
    blocks: [
      { type: "h", text: "Pretérito indefinido — الحدث اللي تسالى" },
      {
        type: "p",
        text: "بارح، العام اللي فات، فـ 2020، مرة واحدة وتسالات. النهايات العادية: -é, -aste, -ó, -amos, -asteis, -aron للأفعال -ar. و -í, -iste, -ió, -imos, -isteis, -ieron لـ -er و -ir.",
      },
      {
        type: "examples",
        items: [
          { es: "Ayer trabajé.", dar: "البارح خدمت." },
          { es: "Ella comió tarde.", dar: "كلات معطل." },
          { es: "Vivimos en Rabat en 2019.", dar: "عشنا فالرباط فـ 2019." },
        ],
      },
      {
        type: "table",
        caption: "الماضي الشاذ. احفظ العمود ديال yo و él.",
        headers: ["الفعل", "yo", "él / ella", "ellos"],
        rows: [
          ["ir / ser", "fui", "fue", "fueron"],
          ["tener", "tuve", "tuvo", "tuvieron"],
          ["hacer", "hice", "hizo", "hicieron"],
          ["estar", "estuve", "estuvo", "estuvieron"],
          ["poder", "pude", "pudo", "pudieron"],
          ["poner", "puse", "puso", "pusieron"],
          ["querer", "quise", "quiso", "quisieron"],
          ["venir", "vine", "vino", "vinieron"],
          ["decir", "dije", "dijo", "dijeron"],
          ["dar / ver", "di / vi", "dio / vio", "dieron / vieron"],
        ],
      },
      { type: "h", text: "Imperfecto — الوصف والعادة" },
      {
        type: "p",
        text: "ماشي «شنو وقع مرة»، ولكن «كيفاش كان» ولا «شنو كنت كندير عادة». -ar: -aba. -er/-ir: -ía. غير ser و ir شاذين: era و iba.",
      },
      {
        type: "examples",
        items: [
          { es: "De pequeño vivía aquí.", dar: "وأنا صغير كنت كنسكن هنا." },
          { es: "Era alto y tenía un coche rojo.", dar: "كان طويل وعندو طوموبيل حمرا." },
          { es: "Todos los días iba al colegio.", dar: "كل نهار كان كيمشي للمدرسة." },
          { es: "Eran las cinco y llovía.", dar: "كانت الخمسة وكانت كتشتي." },
        ],
      },
      { type: "h", text: "Pretérito perfecto — التجربة و«هاد الفترة»" },
      {
        type: "p",
        text: "he / has / ha / hemos / habéis / han + التصريف الثالث. العادي: -ado و -ido. الشاذ اللي كيتكرر: hecho, dicho, visto, puesto, escrito, vuelto, roto, abierto.",
      },
      {
        type: "examples",
        items: [
          { es: "Hoy he comido tarde.", dar: "اليوم كليت معطل." },
          { es: "¿Has estado en España?", dar: "واش عمرك كنتي فإسبانيا؟" },
          { es: "Nunca he visto ese pueblo.", dar: "عمرني ما شفت ديك القرية." },
        ],
      },
      {
        type: "callout",
        title: "ما تخلطهمش دابا",
        text: "A2: indefinido للحدث المسدود (ayer fui). imperfecto للعادة والوصف (iba, era). perfecto للي مربوط بدابا (hoy he ido, alguna vez he ido). الحكاية الكاملة اللي فيهم بجوج غادي تجي فـ B1.",
      },
      { type: "h", text: "الأمر ديال tú" },
      {
        type: "list",
        items: [
          "المثبت ديال -ar كيسالي بـ a: habla. ديال -er/-ir كيسالي بـ e: come, vive.",
          "المنفي كيرجع لشكل آخر: no hables, no comas, no vivas.",
          "شاذ فالمثبت، احفظ الجملة: di, haz, ve, pon, sal, ten, ven, sé.",
          "المنفي ديالهم عادي: no digas, no hagas, no vayas, no pongas, no salgas.",
        ],
      },
      {
        type: "examples",
        items: [
          { es: "Habla más despacio, por favor.", dar: "هضر بشوية، عفاك." },
          { es: "No hables así.", dar: "ما تهضرش هكا." },
          { es: "Ven aquí. No vengas tarde.", dar: "اجي لهنا. ما تجيش معطل." },
        ],
      },
      { type: "h", text: "الضمائر و a الشخصية" },
      {
        type: "examples",
        items: [
          { es: "Veo a María.", dar: "كنشوف ماريا. a قبل الشخص." },
          { es: "La veo.", dar: "كنشوفها. la = هي كالمفعول." },
          { es: "Le doy el libro.", dar: "كنعطيو الكتاب. le = ليه." },
          { es: "Se lo doy.", dar: "كنعطيو ليه. se بدل le قبل lo." },
          { es: "Me levanto a las siete.", dar: "كنفيق. الضمير قبل الفعل المصرف." },
        ],
      },
      { type: "h", text: "المقارنة، الواجب، ودابا" },
      {
        type: "examples",
        items: [
          { es: "Madrid es más grande que Fez.", dar: "مدريد كبيرة على فاس." },
          { es: "Este es menos caro.", dar: "هادشي رخص." },
          { es: "Es tan alto como su hermano.", dar: "طويل قد خوه." },
          { es: "Tengo que trabajar.", dar: "خاصني نخدم." },
          { es: "Hay que estudiar.", dar: "خاص المذاكرة. عام، بلا شخص." },
          { es: "Estoy estudiando.", dar: "راني كنقري دابا. estar + gerundio." },
        ],
      },
      { type: "h", text: "مواضيع A2" },
      {
        type: "list",
        items: [
          "التسوق واللبس والثمن والشكوى الخفيفة: Es muy caro. ¿Tiene otra talla?",
          "الصحة: me duele la cabeza, estoy enfermo, necesito una farmacia.",
          "السفر: el tren, el billete, la reserva, el hotel, la maleta.",
          "الدعوة والاعتذار: ¿Quieres venir? Lo siento, no puedo.",
          "النصيحة البسيطة: Puedes ir en autobús. Tienes que descansar.",
        ],
      },
      {
        type: "callout",
        title: "اختبار A2",
        text: "90 ثانية على نهار البارح: شنو وقع (fui, comí, hice) وكيفاش كان الجو والمكان (era, hacía, estaba). من بعد قارن جوج مدن بـ más… que.",
      },
      {
        type: "checks",
        items: [
          { id: "a2c1", text: "10 أفعال عاديين فـ indefinido بلا جدول" },
          { id: "a2c2", text: "fui, tuve, hice, estuve, dije خرجو وحدهم" },
          { id: "a2c3", text: "جملة عادة بـ imperfecto وجملة حدث بـ indefinido" },
          { id: "a2c4", text: "he estado / he hecho / he visto" },
          { id: "a2c5", text: "أمر tú مثبت ومنفي، مع ven و no vengas" },
          { id: "a2c6", text: "مقارنة جوج بلايص بصوت عالي" },
        ],
      },
    ],
  },
  {
    id: "b1",
    nav: "B1",
    kicker: "Umbral",
    title: "B1 — تناقش وتعطي رأي",
    lede: "كتفهم النص الواضح على الخدمة والسفر والأخبار الخفيفة. كتروي، كتعطي سبب، وكتمنى حاجة على شخص آخر.",
    blocks: [
      { type: "h", text: "الحكاية: indefinido مع imperfecto" },
      {
        type: "p",
        text: "الديكور والعادة = imperfecto. الحدث اللي قطعها = indefinido. هذا هو الفرق اللي كيسدّي B1 فالماضي.",
      },
      {
        type: "examples",
        items: [
          {
            es: "Cuando era pequeño, vivía en un pueblo. Un día fui al mercado con mi padre y compré pan.",
            dar: "الوصف بـ era/vivía. الحدث بـ fui/compré.",
          },
          {
            es: "Llovía y no tenía paraguas. Entré en un café.",
            dar: "كانت كتشتي (وصف). دخلت (حدث).",
          },
          {
            es: "Mientras estudiaba, sonó el teléfono.",
            dar: "كنت كنقري، ومن بعد التليفون رنّ.",
          },
        ],
      },
      { type: "h", text: "المستقبل والشرطي" },
      {
        type: "p",
        text: "المستقبل كيتزاد على المصدر: é, ás, á, emos, éis, án. الشرطي: ía, ías, ía, íamos, íais, ían. الشاذ كيتبدل الجدر وهو هو فالجوج: tendr-, har-, podr-, saldr-, vendr-, dir-, pondr-, querr-, sabr-, habr-.",
      },
      {
        type: "examples",
        items: [
          { es: "Mañana trabajaré.", dar: "غدا غادي نخدم. مستقبل بسيط." },
          { es: "Me gustaría vivir en España.", dar: "تمنيت / بغيت نعيش. مهذب." },
          { es: "Podría ayudarte.", dar: "نقدر نعاونك. احتمال مهذب." },
          { es: "Tendré tiempo el viernes.", dar: "غادي يكون عندي الوقت الجمعة." },
        ],
      },
      { type: "h", text: "Subjuntivo الحاضر — غير الاستعمال اليومي" },
      {
        type: "p",
        text: "ما تحفظوش كجدول ميت. احفظ الجمل. الشكل: -ar كياخد e (hable)، -er/-ir كياخدو a (coma, viva). الشاذ الضروري: sea, esté, tenga, vaya, haga, pueda, quiera, sepa, venga, diga, ponga, salga, duerma.",
      },
      {
        type: "table",
        caption: "فين كتستعملو فـ B1",
        headers: ["الحالة", "الجملة"],
        rows: [
          ["بغيت شخص آخر يدير حاجة", "Quiero que vengas."],
          ["نصيحة", "Es importante que estudies."],
          ["شك", "No creo que sea verdad."],
          ["تمنّي", "Ojalá tenga tiempo."],
          ["إحساس", "Me alegra que estés bien."],
          ["رأي مؤكد = indicativo", "Creo que es verdad. ما فيهاش subjuntivo."],
        ],
      },
      {
        type: "callout",
        title: "الغلطة اللي كتقول بلي مازال A2",
        text: "Quiero que vienes غلط. Quiero que vengas صح. إلى الفاعل هو نتا بنفسك، المصدر: Quiero venir. إلى الفاعل شخص آخر، que + subjuntivo.",
      },
      { type: "h", text: "por ولا para" },
      {
        type: "table",
        headers: ["por", "para"],
        rows: [
          ["السبب: Estoy aquí por el trabajo.", "الهدف: Estudio para trabajar."],
          ["عبر: Caminamos por el parque.", "الوجهة: Salgo para casa."],
          ["المدة التقريبية: Viajé por dos semanas.", "الحد الزمني: Es para el lunes."],
          ["التبادل: Gracias por tu ayuda.", "لمن: Este regalo es para ti."],
        ],
      },
      { type: "h", text: "الروابط اللي كتخلي الكلام B1" },
      {
        type: "examples",
        items: [
          { es: "porque / por eso", dar: "حيت / لهذا" },
          { es: "aunque", dar: "وخا" },
          { es: "sin embargo", dar: "ولكن مع ذلك" },
          { es: "mientras", dar: "فوقت ما" },
          { es: "cuando + حاضر", dar: "منين… فالعادة ولا المستقبل القريب" },
          { es: "antes de / después de + مصدر", dar: "قبل ما / من بعد ما. Antes de salir." },
          { es: "Si tengo tiempo, iré.", dar: "إلى كان عندي الوقت، غادي نمشي." },
          { es: "Se habla español aquí.", dar: "كيهضرو الإسبانية هنا. se عام." },
        ],
      },
      { type: "h", text: "شنو تهضر عليه" },
      {
        type: "list",
        items: [
          "الخدمة والدراسة: horario, jefe, compañeros, experiencia, curriculum.",
          "العلاقات والمشاكل: discutir, estar de acuerdo, proponer, solucionar.",
          "الأخبار الخفيفة: según el artículo, el problema es que…",
          "إيميل: Estimado/a… Le escribo para… Un saludo. / غير رسمي: Hola… Un abrazo.",
        ],
      },
      {
        type: "callout",
        title: "اختبار B1",
        text: "دقيقتين رأي على موضوع كتعرفو. خاص يكون فيه: ماضي (غير قصة قصيرة)، رأي بـ creo que، سبب بـ porque، اعتراض بـ aunque، وأمنية بـ quiero que أو ojalá + subjuntivo. من بعد لخّص نص قصير بكلامك، ما تقرأهش.",
      },
      {
        type: "checks",
        items: [
          { id: "b1c1", text: "حكاية فيها era/llovía و fui/entré" },
          { id: "b1c2", text: "trabajaré و me gustaría بلا خلط" },
          { id: "b1c3", text: "Quiero que vengas و Quiero venir بجوج صحاح" },
          { id: "b1c4", text: "5 أشكال شاذة: sea, tenga, vaya, haga, pueda" },
          { id: "b1c5", text: "جملتين por وجملتين para" },
          { id: "b1c6", text: "رأي دقيقتين مسجّل" },
        ],
      },
    ],
  },
  {
    id: "af3al",
    nav: "الأفعال",
    kicker: "احفظ هادو",
    title: "لائحة الأفعال بالترتيب",
    lede: "ما تحفظش 500 فعل. احفظ هادو مزيان، والباقي غادي يجي من السمع.",
    blocks: [
      {
        type: "table",
        caption: "A1 — حاضر",
        headers: ["الفعل", "المعنى", "ملاحظة"],
        rows: [
          ["ser", "يكون (هوية)", "soy, eres, es"],
          ["estar", "يكون (حالة/بلاصة)", "estoy, estás, está"],
          ["tener", "عندو", "tengo, tienes"],
          ["ir", "يمشي", "voy, vas, va"],
          ["hacer", "يدير", "hago"],
          ["haber", "كاين", "hay"],
          ["poder", "يقدر", "puedo"],
          ["querer", "يبغي", "quiero"],
          ["venir", "يجي", "vengo"],
          ["decir", "يقول", "digo, dices"],
          ["salir", "يخرج", "salgo"],
          ["poner", "يحط", "pongo"],
          ["ver", "يشوف", "veo"],
          ["dar", "يعطي", "doy"],
          ["hablar / vivir / trabajar / estudiar", "يهضر / يعيش / يخدم / يقرا", "عاديين"],
          ["llamarse / gustar", "يتسمى / يعجب", "مع ضمير"],
        ],
      },
      {
        type: "table",
        caption: "A2 — زيد الماضي والأمر",
        headers: ["الفعل", "indefinido", "ملاحظة"],
        rows: [
          ["ir / ser", "fui, fue", "نفس الشكل"],
          ["tener", "tuve, tuvo", ""],
          ["hacer", "hice, hizo", "hizo بـ z"],
          ["estar", "estuve, estuvo", ""],
          ["decir", "dije, dijo", ""],
          ["poner", "puse, puso", ""],
          ["poder / querer", "pude / quise", ""],
          ["venir", "vine, vino", ""],
          ["imperfecto", "hablaba / comía / era / iba", "الوصف"],
          ["perfecto", "he hablado, he hecho, he visto", "اليوم والتجربة"],
        ],
      },
      {
        type: "table",
        caption: "B1 — زيد هاد الأشكال فقط",
        headers: ["الشكل", "مثال"],
        rows: [
          ["المستقبل", "hablaré, tendré, haré, podré"],
          ["الشرطي", "hablaría, me gustaría, podría"],
          ["subjuntivo", "hable, sea, esté, tenga, vaya, haga"],
          ["الشرط", "Si tengo tiempo, iré."],
        ],
      },
      {
        type: "links",
        items: [
          {
            label: "Conjuguemos",
            href: "https://conjuguemos.com",
            note: "صرّف فعل واحد كل نهار. 5 دقائق.",
          },
          {
            label: "StudySpanish — الأفعال",
            href: "https://studyspanish.com",
            note: "دروس مجانية مع الصوت.",
          },
          {
            label: "SpanishDict — التصريف",
            href: "https://www.spanishdict.com",
            note: "كتب أي فعل وشوف كل الأزمنة.",
          },
        ],
      },
    ],
  },
  {
    id: "masadir",
    nav: "الروابط",
    kicker: "المصادر بالضبط",
    title: "فين تقرا كل حاجة",
    lede: "ما تستعملش عشرة تطبيقات. هاد اللائحة هي الطريق. كل رابط عندو خدمة واحدة.",
    blocks: [
      {
        type: "callout",
        title: "الستة اللي كافيين",
        text: "Language Transfer للقواعد. Dreaming Spanish للسمع. ¿Cómo se dice…? الكتاب اللي فيه العربية. SpanishDict للقاموس. StudySpanish و Conjuguemos للتمارين. DELE باش تعرف واش سدّيتي المستوى.",
      },
      {
        type: "links",
        items: [
          {
            label: "Language Transfer — Complete Spanish",
            href: "https://www.languagetransfer.org/complete-spanish",
            note: "90 درس صوتي مجاني. من الصفر. وقف وجاوب بصوت عالي. هذا هو كتاب القواعد ديالك.",
          },
          {
            label: "Dreaming Spanish — Superbeginner",
            href: "https://www.youtube.com/playlist?list=PLlpPf-YgbU7GbOHc3siOGQ5KmVSngZucl",
            note: "السمع من الصفر. فيديو كامل بالإسبانية مع الرسم. إلى ما فهمتيش حوالي 70٪، رجع لفيديو أسهل.",
          },
          {
            label: "Dreaming Spanish — الموقع",
            href: "https://www.dreaming.com",
            note: "نفس المحتوى مرتب بالمستوى. المجاني كافي فالبداية.",
          },
          {
            label: "¿Cómo se dice…? A1 و A2",
            href: "https://todoele.net/manuales-editoriales/fundacion-montemadrid",
            note: "كتاب Fundación Montemadrid. مستوى A1 فيه ترجمة للعربية، وكاين A2. texte كامل وأوديو من الفهرس.",
          },
          {
            label: "SpanishDict",
            href: "https://www.spanishdict.com",
            note: "قاموس، نطق، أمثلة، وتصريف. استعملو كل نهار.",
          },
          {
            label: "SpanishDict — دليل القواعد",
            href: "https://www.spanishdict.com/guide",
            note: "شرح القواعد بالترتيب، مع تمارين.",
          },
          {
            label: "StudySpanish",
            href: "https://studyspanish.com",
            note: "دروس قواعد ونطق وأفعال، بالمجان.",
          },
          {
            label: "Conjuguemos",
            href: "https://conjuguemos.com",
            note: "تدريب التصريف. فعل واحد فالنهار أحسن من 40 مرة فالشهر.",
          },
          {
            label: "Plan curricular — Instituto Cervantes",
            href: "https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/plan.htm",
            note: "الخريطة الرسمية. للأساتذة، ماشي كتاب تلميذ. رجع ليها إلى بغيتي تعرف واش الموضوع داخل المستوى.",
          },
          {
            label: "نماذج DELE A1 A2 B1",
            href: "https://examenes.cervantes.es/es/dele/preparar-prueba",
            note: "الامتحان الرسمي. حلّ نموذج A1 غير من بعد ما تسدّي A1، بحالها A2 و B1.",
          },
          {
            label: "WordReference",
            href: "https://www.wordreference.com",
            note: "قاموس ثاني، والمنتدى مزيان إلى كلمة عندها جوج معاني.",
          },
          {
            label: "قاموس RAE",
            href: "https://dle.rae.es",
            note: "القاموس الرسمي. من B1 طالع. دابا بكري عليه.",
          },
          {
            label: "Easy Spanish",
            href: "https://www.youtube.com/@EasySpanish",
            note: "حوارات فالزنقة. ابدأها من A2، ماشي من النهار الأول.",
          },
          {
            label: "Instituto Cervantes Casablanca",
            href: "https://casablanca.cervantes.es",
            note: "إلى بغيتي قسم حضوري. كاينين مراكز أخرى فالمغرب. بني ملال ما فيهاش مركز.",
          },
        ],
      },
      { type: "h", text: "كتاب ورق واحد، إلى بغيتي" },
      {
        type: "p",
        text: "Gramática de uso del español A1-A2 ديال Luis Aragonés و Ramón Palencia، Editorial SM. من بعدو الجزء B1-B2. هذا اللي كيستعملوه الأساتذة. ما تشريش عشرة كتب. الباقي كله مجاني فالروابط لفوق.",
      },
      {
        type: "list",
        items: [
          "YouTube من A2: Butterfly Spanish إلى بغيتي الشرح بالإنجليزية.",
          "من B1: Español con Juan، إسبانية إسبانيا، مهضورة بوضوح.",
          "Anki إلا بغيتي البطاقات. سطح «Spanish 5000» الأكثر تكرارا. 10 بطاقات جديدة فالنهار، ماشي 50.",
        ],
      },
    ],
  },
  {
    id: "program",
    nav: "البرنامج",
    kicker: "كل نهار",
    title: "45 حتى 70 دقيقة",
    lede: "نفس الروتين حتى يولي عادة. التبديل ديال التطبيقات هو اللي كيقتل التقدم.",
    blocks: [
      {
        type: "table",
        caption: "النهار الثابت",
        headers: ["الوقت", "شنو", "فين"],
        rows: [
          ["20 د", "درس واحد. وقف وجاوب بصوت عالي. ما تسمعش ونتا ساكت.", "Language Transfer"],
          ["15 د", "فيديو تفهم منو الأغلبية بلا ترجمة.", "Dreaming Spanish"],
          ["15 د", "درس من الكتاب ولا SpanishDict، وكتب 5 جمل على نهارك ونطقهم.", "¿Cómo se dice…?"],
          ["5 د", "صرّف فعل واحد. اليوم حاضر، من بعد ماضي.", "Conjuguemos"],
        ],
      },
      {
        type: "p",
        text: "كل أحد: سجّل راسك دقيقة وسمعها. هذا هو التصحيح. إلى نطقك ما كيتفهمش، رجع للنطق ما تزيدش قواعد.",
      },
      { type: "h", text: "الأسبوع 1، نهار بنهار" },
      {
        type: "checks",
        items: [
          { id: "w1d1", text: "النهار 1: h j ñ rr p + 10 تحيات بصوت عالي" },
          { id: "w1d2", text: "النهار 2: soy / eres / es + الجنسية والسمية. 8 جمل" },
          { id: "w1d3", text: "النهار 3: estoy en… والدار والمدينة" },
          { id: "w1d4", text: "النهار 4: el/la و 20 اسم مع الصفة من بعدهم" },
          { id: "w1d5", text: "النهار 5: الأرقام حتى 100 و Tengo … años" },
          { id: "w1d6", text: "النهار 6: hablar, estudiar, trabajar فالحاضر" },
          { id: "w1d7", text: "النهار 7: تسجيل 45 ثانية تقديم + 15 د سمع" },
        ],
      },
      { type: "h", text: "من بعد الأسبوع 1" },
      {
        type: "list",
        items: [
          "الأسبوع 2: comer و vivir، و tener و hacer.",
          "الأسبوع 3: ir, querer, poder, gustar, voy a.",
          "الأسبوع 4: الوقت، الاتجاهات، والدار.",
          "الأسبوع 5: الماكلة والمطعم والروتين مع me levanto.",
          "الأسبوع 6: أسئلة كاملة ونص قصير على راسك. شوف نموذج قراءة DELE A1 بلا ما تحلّو كامل.",
          "الأسابيع 7–8: ثبت A1. عاود Language Transfer من الأول بسرعة. اختبار الدقيقة.",
          "A2: شهر على indefinido، شهر على imperfecto و perfecto، أسبوعين على الأمر والضمائر.",
          "B1: ما تدخلوش حتى اختبار A2 يخرج مزيان. شهر حكايات، شهر مستقبل وشرطي، شهر subjuntivo اليومي.",
        ],
      },
      {
        type: "checks",
        items: [
          { id: "p1", text: "حطيت Language Transfer فالتليفون" },
          { id: "p2", text: "حطيت لائحة Superbeginner" },
          { id: "p3", text: "حليت فهرس ¿Cómo se dice…?" },
          { id: "p4", text: "الأحد عندو تسجيل، ماشي راحة كاملة" },
        ],
      },
    ],
  },
  {
    id: "imtihan",
    nav: "الاختبار",
    kicker: "بلا ورقة",
    title: "عرف واش سدّيتي",
    lede: "الامتحان ماشي هو الدراسة. كتدوزو غير فاللخر باش تشوف الثقب.",
    blocks: [
      {
        type: "table",
        headers: ["من بعد", "دير هادشي بصوت عالي", "من بعد حل"],
        rows: [
          ["A1", "تقديم دقيقة: سمية، بلاد، خدمة، سكنى، ذوق، غدا", "نموذج DELE A1"],
          ["A2", "90 ثانية على البارح + مقارنة مدينتين", "نموذج DELE A2"],
          ["B1", "دقيقتين رأي مع porque و aunque و quiero que", "نموذج DELE B1"],
        ],
      },
      {
        type: "links",
        items: [
          {
            label: "نماذج الامتحان والأوديو",
            href: "https://examenes.cervantes.es/es/dele/preparar-prueba",
            note: "من Instituto Cervantes. قراءة، سمع، كتابة، وهضرة. مع التصحيح.",
          },
        ],
      },
      {
        type: "list",
        items: [
          "الكتابة: 60 حتى 80 كلمة فـ A2، وحوالي 120–150 فـ B1. اكتبها بلا مترجم، من بعد صحح 5 غلطات فقط.",
          "السمع: مرة بلا نص، مرة مع النص، مرة ثالثة بلا نص. ما تقرا النص أولا.",
          "إلى طحت تحت النص، ما تعاودش المستوى كامل. رجع غير للثقب: غالبا الأزمنة ولا الضمائر.",
        ],
      },
      {
        type: "callout",
        title: "علامة بلي مازال ما وصلتيش",
        text: "إلى كتفكر بالدارجة ومن بعد تترجم، مازال. الجملة اللي خرجات وحدها، حتى إلى فيها غلط صغير، أحسن من جملة مترجمة كاملة. الغلط الصغير كيتصلح. الترجمة كتحبسك.",
      },
    ],
  },
];

export const sections: Section[] = [
  ...core.slice(0, 4),
  ...practiceSections,
  ...core.slice(4),
];

export function allChecks(): Check[] {
  const out: Check[] = [];
  for (const section of sections) {
    for (const block of section.blocks) {
      if (block.type === "checks") out.push(...block.items);
    }
  }
  return out;
}
