const elementsData = {
  H: {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: "1.008 u",
    category: "Reactive Nonmetal",
    state: "Gas",
    electronConfig: "1s¹",
    summary: "The lightest and most abundant chemical element in the universe."
  },
  He: {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    atomicMass: "4.0026 u",
    category: "Noble Gas",
    state: "Gas",
    electronConfig: "1s²",
    summary: "A colorless, odorless, inert gas with the lowest boiling point of all elements."
  },
  Li: {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    atomicMass: "6.94 u",
    category: "Alkali Metal",
    state: "Solid",
    electronConfig: "[He] 2s¹",
    summary: "The lightest metal, widely used in rechargeable batteries."
  },
  Be: {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    atomicMass: "9.0122 u",
    category: "Alkaline Earth Metal",
    state: "Solid",
    electronConfig: "[He] 2s²",
    summary: "A light, strong, brittle metal used in aerospace parts and X-ray windows."
  },
  B: {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    atomicMass: "10.81 u",
    category: "Metalloid",
    state: "Solid",
    electronConfig: "[He] 2s² 2p¹",
    summary: "A metalloid used in glass, ceramics, and as an essential plant nutrient."
  },
  C: {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    atomicMass: "12.011 u",
    category: "Reactive Nonmetal",
    state: "Solid",
    electronConfig: "[He] 2s² 2p²",
    summary: "The basis of all known life, found in forms like diamond, graphite, and graphene."
  },
  N: {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    atomicMass: "14.007 u",
    category: "Reactive Nonmetal",
    state: "Gas",
    electronConfig: "[He] 2s² 2p³",
    summary: "Makes up about 78% of Earth's atmosphere and is vital for proteins and DNA."
  },
  O: {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    atomicMass: "15.999 u",
    category: "Reactive Nonmetal",
    state: "Gas",
    electronConfig: "[He] 2s² 2p⁴",
    summary: "Essential for respiration and makes up about 21% of Earth's atmosphere."
  },
  F: {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    atomicMass: "18.998 u",
    category: "Reactive Nonmetal",
    state: "Gas",
    electronConfig: "[He] 2s² 2p⁵",
    summary: "The most electronegative and reactive element, used in toothpaste and nonstick coatings."
  },
  Ne: {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    atomicMass: "20.180 u",
    category: "Noble Gas",
    state: "Gas",
    electronConfig: "[He] 2s² 2p⁶",
    summary: "An inert gas best known for the glowing red-orange light of neon signs."
  },
  Na: {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    atomicMass: "22.990 u",
    category: "Alkali Metal",
    state: "Solid",
    electronConfig: "[Ne] 3s¹",
    summary: "A soft, highly reactive metal and a main component of table salt."
  },
  Mg: {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    atomicMass: "24.305 u",
    category: "Alkaline Earth Metal",
    state: "Solid",
    electronConfig: "[Ne] 3s²",
    summary: "A light metal used in alloys and essential for chlorophyll in plants."
  },
  Al: {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminum",
    atomicMass: "26.982 u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Ne] 3s² 3p¹",
    summary: "A light, corrosion-resistant metal and the most abundant metal in Earth's crust."
  },
  Si: {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicon",
    atomicMass: "28.085 u",
    category: "Metalloid",
    state: "Solid",
    electronConfig: "[Ne] 3s² 3p²",
    summary: "A metalloid at the heart of computer chips and a major component of sand and rock."
  },
  P: {
    atomicNumber: 15,
    symbol: "P",
    name: "Phosphorus",
    atomicMass: "30.974 u",
    category: "Reactive Nonmetal",
    state: "Solid",
    electronConfig: "[Ne] 3s² 3p³",
    summary: "Essential for DNA, ATP, and bones, and widely used in fertilizers."
  },
  S: {
    atomicNumber: 16,
    symbol: "S",
    name: "Sulfur",
    atomicMass: "32.06 u",
    category: "Reactive Nonmetal",
    state: "Solid",
    electronConfig: "[Ne] 3s² 3p⁴",
    summary: "A yellow nonmetal used to make sulfuric acid and found in many proteins."
  },
  Cl: {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Chlorine",
    atomicMass: "35.45 u",
    category: "Reactive Nonmetal",
    state: "Gas",
    electronConfig: "[Ne] 3s² 3p⁵",
    summary: "A toxic yellow-green gas used to disinfect water and make plastics like PVC."
  },
  Ar: {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    atomicMass: "39.95 u",
    category: "Noble Gas",
    state: "Gas",
    electronConfig: "[Ne] 3s² 3p⁶",
    summary: "An inert gas that is the third most abundant gas in Earth's atmosphere."
  },
  K: {
    atomicNumber: 19,
    symbol: "K",
    name: "Potassium",
    atomicMass: "39.098 u",
    category: "Alkali Metal",
    state: "Solid",
    electronConfig: "[Ar] 4s¹",
    summary: "A soft, reactive metal that is essential for nerve and muscle function."
  },
  Ca: {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcium",
    atomicMass: "40.078 u",
    category: "Alkaline Earth Metal",
    state: "Solid",
    electronConfig: "[Ar] 4s²",
    summary: "Vital for bones, teeth, and shells, and one of the most abundant elements in Earth's crust."
  },
  Sc: {
    atomicNumber: 21,
    symbol: "Sc",
    name: "Scandium",
    atomicMass: "44.956 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d¹ 4s²",
    summary: "A light, silvery metal used in aerospace alloys and stadium lighting."
  },
  Ti: {
    atomicNumber: 22,
    symbol: "Ti",
    name: "Titanium",
    atomicMass: "47.867 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d² 4s²",
    summary: "A strong, light, corrosion-resistant metal used in aircraft and medical implants."
  },
  V: {
    atomicNumber: 23,
    symbol: "V",
    name: "Vanadium",
    atomicMass: "50.942 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d³ 4s²",
    summary: "A hard metal mainly used to strengthen steel alloys."
  },
  Cr: {
    atomicNumber: 24,
    symbol: "Cr",
    name: "Chromium",
    atomicMass: "51.996 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d⁵ 4s¹",
    summary: "A shiny, hard metal used in stainless steel and chrome plating."
  },
  Mn: {
    atomicNumber: 25,
    symbol: "Mn",
    name: "Manganese",
    atomicMass: "54.938 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d⁵ 4s²",
    summary: "A metal essential for steel production and for several enzymes in the body."
  },
  Fe: {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Iron",
    atomicMass: "55.845 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d⁶ 4s²",
    summary: "The most widely used metal, central to steel and to hemoglobin in blood."
  },
  Co: {
    atomicNumber: 27,
    symbol: "Co",
    name: "Cobalt",
    atomicMass: "58.933 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d⁷ 4s²",
    summary: "A magnetic metal used in rechargeable batteries and the pigment cobalt blue."
  },
  Ni: {
    atomicNumber: 28,
    symbol: "Ni",
    name: "Nickel",
    atomicMass: "58.693 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d⁸ 4s²",
    summary: "A corrosion-resistant metal used in stainless steel, coins, and batteries."
  },
  Cu: {
    atomicNumber: 29,
    symbol: "Cu",
    name: "Copper",
    atomicMass: "63.546 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d¹⁰ 4s¹",
    summary: "A reddish metal and excellent electrical conductor used in wiring and plumbing."
  },
  Zn: {
    atomicNumber: 30,
    symbol: "Zn",
    name: "Zinc",
    atomicMass: "65.38 u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d¹⁰ 4s²",
    summary: "A bluish-white metal used to galvanize steel and to make brass."
  },
  Ga: {
    atomicNumber: 31,
    symbol: "Ga",
    name: "Gallium",
    atomicMass: "69.723 u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹",
    summary: "A soft metal that melts near room temperature and is used in LEDs and chips."
  },
  Ge: {
    atomicNumber: 32,
    symbol: "Ge",
    name: "Germanium",
    atomicMass: "72.630 u",
    category: "Metalloid",
    state: "Solid",
    electronConfig: "[Ar] 3d¹⁰ 4s² 4p²",
    summary: "A metalloid used in fiber optics, infrared optics, and early transistors."
  },
  As: {
    atomicNumber: 33,
    symbol: "As",
    name: "Arsenic",
    atomicMass: "74.922 u",
    category: "Metalloid",
    state: "Solid",
    electronConfig: "[Ar] 3d¹⁰ 4s² 4p³",
    summary: "A toxic metalloid historically used as a poison and now used in semiconductors."
  },
  Se: {
    atomicNumber: 34,
    symbol: "Se",
    name: "Selenium",
    atomicMass: "78.971 u",
    category: "Reactive Nonmetal",
    state: "Solid",
    electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁴",
    summary: "A nonmetal used in solar cells and glass, and a trace nutrient for the body."
  },
  Br: {
    atomicNumber: 35,
    symbol: "Br",
    name: "Bromine",
    atomicMass: "79.904 u",
    category: "Reactive Nonmetal",
    state: "Liquid",
    electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵",
    summary: "A reddish-brown liquid at room temperature, used in flame retardants."
  },
  Kr: {
    atomicNumber: 36,
    symbol: "Kr",
    name: "Krypton",
    atomicMass: "83.798 u",
    category: "Noble Gas",
    state: "Gas",
    electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁶",
    summary: "A noble gas used in some lighting and photographic flashes."
  },
  Rb: {
    atomicNumber: 37,
    symbol: "Rb",
    name: "Rubidium",
    atomicMass: "85.468 u",
    category: "Alkali Metal",
    state: "Solid",
    electronConfig: "[Kr] 5s¹",
    summary: "A soft, highly reactive metal used in atomic clocks and research."
  },
  Sr: {
    atomicNumber: 38,
    symbol: "Sr",
    name: "Strontium",
    atomicMass: "87.62 u",
    category: "Alkaline Earth Metal",
    state: "Solid",
    electronConfig: "[Kr] 5s²",
    summary: "A soft metal that gives fireworks a bright red color."
  },
  Y: {
    atomicNumber: 39,
    symbol: "Y",
    name: "Yttrium",
    atomicMass: "88.906 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d¹ 5s²",
    summary: "A metal used in LEDs, lasers, and superconductors."
  },
  Zr: {
    atomicNumber: 40,
    symbol: "Zr",
    name: "Zirconium",
    atomicMass: "91.224 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d² 5s²",
    summary: "A highly corrosion-resistant metal used in nuclear reactor fuel cladding."
  },
  Nb: {
    atomicNumber: 41,
    symbol: "Nb",
    name: "Niobium",
    atomicMass: "92.906 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d⁴ 5s¹",
    summary: "A metal used in superconducting magnets and strong steel alloys."
  },
  Mo: {
    atomicNumber: 42,
    symbol: "Mo",
    name: "Molybdenum",
    atomicMass: "95.95 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d⁵ 5s¹",
    summary: "A high-melting-point metal used to strengthen steel alloys."
  },
  Tc: {
    atomicNumber: 43,
    symbol: "Tc",
    name: "Technetium",
    atomicMass: "(98) u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d⁵ 5s²",
    summary: "The lightest element with no stable isotopes, used in medical imaging."
  },
  Ru: {
    atomicNumber: 44,
    symbol: "Ru",
    name: "Ruthenium",
    atomicMass: "101.07 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d⁷ 5s¹",
    summary: "A hard platinum-group metal used in electronics and wear-resistant contacts."
  },
  Rh: {
    atomicNumber: 45,
    symbol: "Rh",
    name: "Rhodium",
    atomicMass: "102.91 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d⁸ 5s¹",
    summary: "A rare, reflective platinum-group metal used in catalytic converters."
  },
  Pd: {
    atomicNumber: 46,
    symbol: "Pd",
    name: "Palladium",
    atomicMass: "106.42 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d¹⁰",
    summary: "A platinum-group metal used in catalytic converters and electronics."
  },
  Ag: {
    atomicNumber: 47,
    symbol: "Ag",
    name: "Silver",
    atomicMass: "107.87 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d¹⁰ 5s¹",
    summary: "A shiny metal with the highest electrical conductivity of all metals."
  },
  Cd: {
    atomicNumber: 48,
    symbol: "Cd",
    name: "Cadmium",
    atomicMass: "112.41 u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d¹⁰ 5s²",
    summary: "A toxic, soft metal used in rechargeable batteries and pigments."
  },
  In: {
    atomicNumber: 49,
    symbol: "In",
    name: "Indium",
    atomicMass: "114.82 u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d¹⁰ 5s² 5p¹",
    summary: "A soft metal used in touchscreens as indium tin oxide."
  },
  Sn: {
    atomicNumber: 50,
    symbol: "Sn",
    name: "Tin",
    atomicMass: "118.71 u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Kr] 4d¹⁰ 5s² 5p²",
    summary: "A soft metal used in solder and for coating steel cans."
  },
  Sb: {
    atomicNumber: 51,
    symbol: "Sb",
    name: "Antimony",
    atomicMass: "121.76 u",
    category: "Metalloid",
    state: "Solid",
    electronConfig: "[Kr] 4d¹⁰ 5s² 5p³",
    summary: "A metalloid used in flame retardants and to harden lead alloys."
  },
  Te: {
    atomicNumber: 52,
    symbol: "Te",
    name: "Tellurium",
    atomicMass: "127.60 u",
    category: "Metalloid",
    state: "Solid",
    electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁴",
    summary: "A brittle metalloid used in solar panels and metal alloys."
  },
  I: {
    atomicNumber: 53,
    symbol: "I",
    name: "Iodine",
    atomicMass: "126.90 u",
    category: "Reactive Nonmetal",
    state: "Solid",
    electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵",
    summary: "A nonmetal essential for thyroid hormones and used as an antiseptic."
  },
  Xe: {
    atomicNumber: 54,
    symbol: "Xe",
    name: "Xenon",
    atomicMass: "131.29 u",
    category: "Noble Gas",
    state: "Gas",
    electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁶",
    summary: "A heavy noble gas used in camera flashes and ion thrusters."
  },
  Cs: {
    atomicNumber: 55,
    symbol: "Cs",
    name: "Caesium",
    atomicMass: "132.91 u",
    category: "Alkali Metal",
    state: "Solid",
    electronConfig: "[Xe] 6s¹",
    summary: "A very soft, highly reactive metal used in the atomic clocks that define the second."
  },
  Ba: {
    atomicNumber: 56,
    symbol: "Ba",
    name: "Barium",
    atomicMass: "137.33 u",
    category: "Alkaline Earth Metal",
    state: "Solid",
    electronConfig: "[Xe] 6s²",
    summary: "A soft metal whose compounds are used in X-ray imaging and fireworks."
  },
  La: {
    atomicNumber: 57,
    symbol: "La",
    name: "Lanthanum",
    atomicMass: "138.91 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 5d¹ 6s²",
    summary: "A soft rare earth metal used in camera lenses and hybrid-car batteries."
  },
  Ce: {
    atomicNumber: 58,
    symbol: "Ce",
    name: "Cerium",
    atomicMass: "140.12 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f¹ 5d¹ 6s²",
    summary: "The most abundant rare earth, used in catalytic converters and glass polishing."
  },
  Pr: {
    atomicNumber: 59,
    symbol: "Pr",
    name: "Praseodymium",
    atomicMass: "140.91 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f³ 6s²",
    summary: "A rare earth used in strong magnets and to color glass and ceramics yellow-green."
  },
  Nd: {
    atomicNumber: 60,
    symbol: "Nd",
    name: "Neodymium",
    atomicMass: "144.24 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f⁴ 6s²",
    summary: "A rare earth used in the strongest permanent magnets, found in headphones and motors."
  },
  Pm: {
    atomicNumber: 61,
    symbol: "Pm",
    name: "Promethium",
    atomicMass: "(145) u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f⁵ 6s²",
    summary: "A radioactive rare earth with no stable isotopes, used in luminous paints."
  },
  Sm: {
    atomicNumber: 62,
    symbol: "Sm",
    name: "Samarium",
    atomicMass: "150.36 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f⁶ 6s²",
    summary: "A rare earth used in strong samarium-cobalt magnets."
  },
  Eu: {
    atomicNumber: 63,
    symbol: "Eu",
    name: "Europium",
    atomicMass: "151.96 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f⁷ 6s²",
    summary: "A rare earth used in red phosphors for screens and in euro banknote security features."
  },
  Gd: {
    atomicNumber: 64,
    symbol: "Gd",
    name: "Gadolinium",
    atomicMass: "157.25 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f⁷ 5d¹ 6s²",
    summary: "A rare earth used as a contrast agent in MRI scans."
  },
  Tb: {
    atomicNumber: 65,
    symbol: "Tb",
    name: "Terbium",
    atomicMass: "158.93 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f⁹ 6s²",
    summary: "A rare earth used in green phosphors and solid-state devices."
  },
  Dy: {
    atomicNumber: 66,
    symbol: "Dy",
    name: "Dysprosium",
    atomicMass: "162.50 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁰ 6s²",
    summary: "A rare earth added to magnets so they resist heat."
  },
  Ho: {
    atomicNumber: 67,
    symbol: "Ho",
    name: "Holmium",
    atomicMass: "164.93 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f¹¹ 6s²",
    summary: "A rare earth with the highest magnetic moment of any naturally occurring element."
  },
  Er: {
    atomicNumber: 68,
    symbol: "Er",
    name: "Erbium",
    atomicMass: "167.26 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f¹² 6s²",
    summary: "A rare earth used to amplify signals in fiber-optic cables."
  },
  Tm: {
    atomicNumber: 69,
    symbol: "Tm",
    name: "Thulium",
    atomicMass: "168.93 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f¹³ 6s²",
    summary: "One of the rarest rare earth elements, used in portable X-ray devices and lasers."
  },
  Yb: {
    atomicNumber: 70,
    symbol: "Yb",
    name: "Ytterbium",
    atomicMass: "173.05 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 6s²",
    summary: "A rare earth used in atomic clocks and some lasers."
  },
  Lu: {
    atomicNumber: 71,
    symbol: "Lu",
    name: "Lutetium",
    atomicMass: "174.97 u",
    category: "Lanthanide",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d¹ 6s²",
    summary: "The densest and hardest rare earth, used in PET scan detectors."
  },
  Hf: {
    atomicNumber: 72,
    symbol: "Hf",
    name: "Hafnium",
    atomicMass: "178.49 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d² 6s²",
    summary: "A metal used in nuclear control rods and microchip transistors."
  },
  Ta: {
    atomicNumber: 73,
    symbol: "Ta",
    name: "Tantalum",
    atomicMass: "180.95 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d³ 6s²",
    summary: "A corrosion-resistant metal used in capacitors for phones and computers."
  },
  W: {
    atomicNumber: 74,
    symbol: "W",
    name: "Tungsten",
    atomicMass: "183.84 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d⁴ 6s²",
    summary: "The metal with the highest melting point, used in light bulb filaments."
  },
  Re: {
    atomicNumber: 75,
    symbol: "Re",
    name: "Rhenium",
    atomicMass: "186.21 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d⁵ 6s²",
    summary: "One of the rarest metals, used in jet engine alloys."
  },
  Os: {
    atomicNumber: 76,
    symbol: "Os",
    name: "Osmium",
    atomicMass: "190.23 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d⁶ 6s²",
    summary: "The densest naturally occurring element, used in pen tips and electrical contacts."
  },
  Ir: {
    atomicNumber: 77,
    symbol: "Ir",
    name: "Iridium",
    atomicMass: "192.22 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d⁷ 6s²",
    summary: "A very dense, corrosion-resistant metal used in spark plugs and crucibles."
  },
  Pt: {
    atomicNumber: 78,
    symbol: "Pt",
    name: "Platinum",
    atomicMass: "195.08 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
    summary: "A rare, corrosion-resistant metal used in jewelry and catalytic converters."
  },
  Au: {
    atomicNumber: 79,
    symbol: "Au",
    name: "Gold",
    atomicMass: "196.97 u",
    category: "Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    summary: "A dense, soft, unreactive metal valued for jewelry, currency, and electronics."
  },
  Hg: {
    atomicNumber: 80,
    symbol: "Hg",
    name: "Mercury",
    atomicMass: "200.59 u",
    category: "Post-Transition Metal",
    state: "Liquid",
    electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    summary: "A heavy metal that is liquid at room temperature, once common in thermometers."
  },
  Tl: {
    atomicNumber: 81,
    symbol: "Tl",
    name: "Thallium",
    atomicMass: "204.38 u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
    summary: "A soft, highly toxic metal once used in rat poison."
  },
  Pb: {
    atomicNumber: 82,
    symbol: "Pb",
    name: "Lead",
    atomicMass: "207.2 u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    summary: "A dense, soft, toxic metal used in batteries and radiation shielding."
  },
  Bi: {
    atomicNumber: 83,
    symbol: "Bi",
    name: "Bismuth",
    atomicMass: "208.98 u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
    summary: "A brittle, pinkish metal used in stomach remedies and low-melting alloys."
  },
  Po: {
    atomicNumber: 84,
    symbol: "Po",
    name: "Polonium",
    atomicMass: "(209) u",
    category: "Post-Transition Metal",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
    summary: "A highly radioactive element discovered by Marie and Pierre Curie."
  },
  At: {
    atomicNumber: 85,
    symbol: "At",
    name: "Astatine",
    atomicMass: "(210) u",
    category: "Metalloid",
    state: "Solid",
    electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    summary: "One of the rarest naturally occurring elements and highly radioactive."
  },
  Rn: {
    atomicNumber: 86,
    symbol: "Rn",
    name: "Radon",
    atomicMass: "(222) u",
    category: "Noble Gas",
    state: "Gas",
    electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
    summary: "A radioactive noble gas that can build up in basements from natural uranium decay."
  },
  Fr: {
    atomicNumber: 87,
    symbol: "Fr",
    name: "Francium",
    atomicMass: "(223) u",
    category: "Alkali Metal",
    state: "Solid",
    electronConfig: "[Rn] 7s¹",
    summary: "An extremely rare and unstable alkali metal."
  },
  Ra: {
    atomicNumber: 88,
    symbol: "Ra",
    name: "Radium",
    atomicMass: "(226) u",
    category: "Alkaline Earth Metal",
    state: "Solid",
    electronConfig: "[Rn] 7s²",
    summary: "A radioactive metal discovered by the Curies, once used in glow-in-the-dark paint."
  },
  Ac: {
    atomicNumber: 89,
    symbol: "Ac",
    name: "Actinium",
    atomicMass: "(227) u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 6d¹ 7s²",
    summary: "A radioactive metal that glows faintly blue in the dark."
  },
  Th: {
    atomicNumber: 90,
    symbol: "Th",
    name: "Thorium",
    atomicMass: "232.04 u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 6d² 7s²",
    summary: "A weakly radioactive metal that is a potential nuclear fuel."
  },
  Pa: {
    atomicNumber: 91,
    symbol: "Pa",
    name: "Protactinium",
    atomicMass: "231.04 u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 5f² 6d¹ 7s²",
    summary: "A rare, radioactive metal found in uranium ores."
  },
  U: {
    atomicNumber: 92,
    symbol: "U",
    name: "Uranium",
    atomicMass: "238.03 u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 5f³ 6d¹ 7s²",
    summary: "A heavy radioactive metal used as fuel in nuclear power plants."
  },
  Np: {
    atomicNumber: 93,
    symbol: "Np",
    name: "Neptunium",
    atomicMass: "(237) u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 5f⁴ 6d¹ 7s²",
    summary: "The first synthetic transuranium element, produced in 1940."
  },
  Pu: {
    atomicNumber: 94,
    symbol: "Pu",
    name: "Plutonium",
    atomicMass: "(244) u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 5f⁶ 7s²",
    summary: "A radioactive metal used in nuclear weapons and spacecraft power sources."
  },
  Am: {
    atomicNumber: 95,
    symbol: "Am",
    name: "Americium",
    atomicMass: "(243) u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 5f⁷ 7s²",
    summary: "A synthetic element used in household smoke detectors."
  },
  Cm: {
    atomicNumber: 96,
    symbol: "Cm",
    name: "Curium",
    atomicMass: "(247) u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 5f⁷ 6d¹ 7s²",
    summary: "A synthetic radioactive element named after Marie and Pierre Curie."
  },
  Bk: {
    atomicNumber: 97,
    symbol: "Bk",
    name: "Berkelium",
    atomicMass: "(247) u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 5f⁹ 7s²",
    summary: "A synthetic radioactive element named after Berkeley, California."
  },
  Cf: {
    atomicNumber: 98,
    symbol: "Cf",
    name: "Californium",
    atomicMass: "(251) u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 5f¹⁰ 7s²",
    summary: "A synthetic element used as a strong neutron source."
  },
  Es: {
    atomicNumber: 99,
    symbol: "Es",
    name: "Einsteinium",
    atomicMass: "(252) u",
    category: "Actinide",
    state: "Solid",
    electronConfig: "[Rn] 5f¹¹ 7s²",
    summary: "A synthetic element first found in the debris of a hydrogen bomb test."
  },
  Fm: {
    atomicNumber: 100,
    symbol: "Fm",
    name: "Fermium",
    atomicMass: "(257) u",
    category: "Actinide",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹² 7s²",
    summary: "A synthetic element also first found in hydrogen bomb test debris."
  },
  Md: {
    atomicNumber: 101,
    symbol: "Md",
    name: "Mendelevium",
    atomicMass: "(258) u",
    category: "Actinide",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹³ 7s²",
    summary: "A synthetic element named in honor of Dmitri Mendeleev."
  },
  No: {
    atomicNumber: 102,
    symbol: "No",
    name: "Nobelium",
    atomicMass: "(259) u",
    category: "Actinide",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 7s²",
    summary: "A synthetic element named after Alfred Nobel."
  },
  Lr: {
    atomicNumber: 103,
    symbol: "Lr",
    name: "Lawrencium",
    atomicMass: "(266) u",
    category: "Actinide",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 7s² 7p¹",
    summary: "A synthetic element named after Ernest Lawrence, inventor of the cyclotron."
  },
  Rf: {
    atomicNumber: 104,
    symbol: "Rf",
    name: "Rutherfordium",
    atomicMass: "(267) u",
    category: "Transition Metal",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d² 7s²",
    summary: "A synthetic element named after Ernest Rutherford."
  },
  Db: {
    atomicNumber: 105,
    symbol: "Db",
    name: "Dubnium",
    atomicMass: "(268) u",
    category: "Transition Metal",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d³ 7s²",
    summary: "A synthetic element named after the Russian town of Dubna."
  },
  Sg: {
    atomicNumber: 106,
    symbol: "Sg",
    name: "Seaborgium",
    atomicMass: "(269) u",
    category: "Transition Metal",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d⁴ 7s²",
    summary: "A synthetic element named after Glenn Seaborg."
  },
  Bh: {
    atomicNumber: 107,
    symbol: "Bh",
    name: "Bohrium",
    atomicMass: "(270) u",
    category: "Transition Metal",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d⁵ 7s²",
    summary: "A synthetic element named after Niels Bohr."
  },
  Hs: {
    atomicNumber: 108,
    symbol: "Hs",
    name: "Hassium",
    atomicMass: "(277) u",
    category: "Transition Metal",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d⁶ 7s²",
    summary: "A synthetic element named after the German state of Hesse."
  },
  Mt: {
    atomicNumber: 109,
    symbol: "Mt",
    name: "Meitnerium",
    atomicMass: "(278) u",
    category: "Unknown Properties",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d⁷ 7s²",
    summary: "A synthetic element named after Lise Meitner."
  },
  Ds: {
    atomicNumber: 110,
    symbol: "Ds",
    name: "Darmstadtium",
    atomicMass: "(281) u",
    category: "Unknown Properties",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d⁸ 7s²",
    summary: "A synthetic element named after Darmstadt, Germany."
  },
  Rg: {
    atomicNumber: 111,
    symbol: "Rg",
    name: "Roentgenium",
    atomicMass: "(282) u",
    category: "Unknown Properties",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d⁹ 7s²",
    summary: "A synthetic element named after Wilhelm Röntgen, discoverer of X-rays."
  },
  Cn: {
    atomicNumber: 112,
    symbol: "Cn",
    name: "Copernicium",
    atomicMass: "(285) u",
    category: "Post-Transition Metal",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    summary: "A synthetic element named after Nicolaus Copernicus."
  },
  Nh: {
    atomicNumber: 113,
    symbol: "Nh",
    name: "Nihonium",
    atomicMass: "(286) u",
    category: "Unknown Properties",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    summary: "The first element discovered in Asia, named after Japan."
  },
  Fl: {
    atomicNumber: 114,
    symbol: "Fl",
    name: "Flerovium",
    atomicMass: "(289) u",
    category: "Unknown Properties",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    summary: "A synthetic element named after the Flerov Laboratory in Russia."
  },
  Mc: {
    atomicNumber: 115,
    symbol: "Mc",
    name: "Moscovium",
    atomicMass: "(290) u",
    category: "Unknown Properties",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    summary: "A synthetic element named after Moscow."
  },
  Lv: {
    atomicNumber: 116,
    symbol: "Lv",
    name: "Livermorium",
    atomicMass: "(293) u",
    category: "Unknown Properties",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    summary: "A synthetic element named after Lawrence Livermore National Laboratory."
  },
  Ts: {
    atomicNumber: 117,
    symbol: "Ts",
    name: "Tennessine",
    atomicMass: "(294) u",
    category: "Unknown Properties",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    summary: "A synthetic element named after Tennessee."
  },
  Og: {
    atomicNumber: 118,
    symbol: "Og",
    name: "Oganesson",
    atomicMass: "(294) u",
    category: "Unknown Properties",
    state: "Unknown",
    electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    summary: "The heaviest known element, named after Yuri Oganessian."
  }
};


const cells = document.querySelectorAll("td");


for (const cell of cells) {
  const lines = cell.innerText.trim().split("\n");
  const symbol = lines[1]?.trim();
  const el = elementsData[symbol];


  if (!el) continue;


  cell.style.cursor = "pointer";
  cell.title = `Click for ${el.name} info`;


  cell.addEventListener("click", () => {
    alert(
      `${el.atomicNumber} ${el.name} (${el.symbol})\n\n` +
      `Atomic Mass: ${el.atomicMass}\n` +
      `Category: ${el.category}\n` +
      `State: ${el.state}\n` +
      `Electron Configuration: ${el.electronConfig}\n\n` +
      `${el.summary}`
    );
  });
}