const hindiBadwords = [
  "aad",
  "aand",
  "bahenchod",
  "behenchod",
  "bhenchod",
  "bhenchodd",
  "b.c.",
  "bc",
  "bakchod",
  "bakchodd",
  "bakchodi",
  "bevda",
  "bewda",
  "bevdey",
  "bewday",
  "bevakoof",
  "bevkoof",
  "bevkuf",
  "bewakoof",
  "bewkoof",
  "bewkuf",
  "bhadua",
  "bhaduaa",
  "bhadva",
  "bhadvaa",
  "bhadwa",
  "bhadwaa",
  "bhosada",
  "bhosda",
  "bhosdaa",
  "bhosdike",
  "bhonsdike",
  "bhosdiki",
  "bhosdiwala",
  "bhosdiwale",
  "babbe",
  "babbey",
  "bube",
  "bubey",
  "bur",
  "burr",
  "buurr",
  "buur",
  "charsi",
  "chooche",
  "choochi",
  "chuchi",
  "chhod",
  "chod",
  "chodd",
  "chudne",
  "chudney",
  "chudwa",
  "chudwaa",
  "chudwane",
  "chudwaane",
  "chaat",
  "choot",
  "chut",
  "chute",
  "chutia",
  "chutiya",
  "chutiye",
  "dalaal",
  "dalal",
  "dalle",
  "dalley",
  "fattu",
  "gadha",
  "gadhe",
  "gadhalund",
  "gaand",
  "gand",
  "gandu",
  "gandfat",
  "gandfut",
  "gandiya",
  "gandiye",
  "goo",
  "gu",
  "gote",
  "gotey",
  "gotte",
  "hag",
  "haggu",
  "hagne",
  "hagney",
  "harami",
  "haramjada",
  "haraamjaada",
  "haramzyada",
  "haraamzyaada",
  "haraamjaade",
  "haraamzaade",
  "haraamkhor",
  "haramkhor",
  "jhat",
  "jhaat",
  "jhaatu",
  "jhatu",
  "kutta",
  "kutte",
  "kuttey",
  "kutia",
  "kutiya",
  "kuttiya",
  "kutti",
  "landi",
  "landy",
  "laude",
  "laudey",
  "laura",
  "lora",
  "lauda",
  "ling",
  "loda",
  "lode",
  "lund",
  "launda",
  "lounde",
  "laundey",
  "laundi",
  "loundi",
  "laundiya",
  "loundiya",
  "lulli",
  "maar",
  "maro",
  "marunga",
  "madarchod",
  "madarchodd",
  "madarchood",
  "madarchoot",
  "madarchut",
  "m.c.",
  "mc",
  "mamme",
  "mammey",
  "moot",
  "mut",
  "muth",
  "mootne",
  "mutne",
  "mooth",
  "muth",
  "nunni",
  "nunnu",
  "paaji",
  "paji",
  "pesaab",
  "pesab",
  "peshaab",
  "peshab",
  "pilla",
  "pillay",
  "pille",
  "pilley",
  "pisaab",
  "pisab",
  "pkmkb",
  "porkistan",
  "raand",
  "rand",
  "randi",
  "randy",
  "suar",
  "tatte",
  "tatti",
  "tatty",
  "ullu",

  "आंड़",
  "आंड",
  "आँड",
  "bahenchod",
  "behenchod",
  "बेहेनचोद",
  "भेनचोद",
  "बकचोद",
  "बकचोदी",
  "bevda",
  "bewda",
  "बेवड़ा",
  "बेवड़े",
  "bevakoof",
  "बेवकूफ",
  "भड़ुआ",
  "भड़वा",
  "भोसड़ा",
  "भोसड़ीके",
  "भोसड़ीकी",
  "भोसड़ीवाला",
  "भोसड़ीवाले",
  "बब्बे",
  "बूबे",
  "बुर",
  "चरसी",
  "चूचे",
  "चूची",
  "चुची",
  "चोद",
  "चुदने",
  "चुदवा",
  "चुदवाने",
  "चाट",
  "चूत",
  "चूतिया",
  "चुटिया",
  "चूतिये",
  "दलाल",
  "दलले",
  "फट्टू",
  "गधा",
  "गधे",
  "गधालंड",
  "गांड",
  "गांडू",
  "गंडफट",
  "गंडिया",
  "गंडिये",
  "गू",
  "गोटे",
  "हग",
  "हग्गू",
  "हगने",
  "हरामी",
  "हरामजादा",
  "हरामज़ादा",
  "हरामजादे",
  "हरामज़ादे",
  "हरामखोर",
  "झाट",
  "झाटू",
  "कुत्ता",
  "कुत्ते",
  "कुतिया",
  "कुत्ती",
  "लेंडी",
  "लोड़े",
  "लौड़े",
  "लौड़ा",
  "लोड़ा",
  "लौडा",
  "लिंग",
  "लोडा",
  "लोडे",
  "लंड",
  "लौंडा",
  "लौंडे",
  "लौंडी",
  "लौंडिया",
  "लुल्ली",
  "मार",
  "मारो",
  "मारूंगा",
  "मादरचोद",
  "मादरचूत",
  "मादरचुत",
  "मम्मे",
  "मूत",
  "मुत",
  "मूतने",
  "मुतने",
  "मूठ",
  "मुठ",
  "नुननी",
  "नुननु",
  "पाजी",
  "पेसाब",
  "पेशाब",
  "पिल्ला",
  "पिल्ले",
  "पिसाब",
  "पोरकिस्तान",
  "रांड",
  "रंडी",
  "सुअर",
  "सूअर",
  "टट्टे",
  "टट्टी",
  "उल्लू",
];
module.exports = hindiBadwords;
