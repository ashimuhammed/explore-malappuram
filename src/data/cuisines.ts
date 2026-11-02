export interface LocalDelicacy {
  name: string;
  malayalam: string;
  description: string;
  bestLocations: string;
  category: 'Specialty Meal' | 'Snack & Sweet' | 'Beverage' | 'Seafood';
  image: string;
}

export const MALAPPURAM_CUISINE: LocalDelicacy[] = [
  {
    name: "Malabar Dum Biriyani & Kuzhi Mandi",
    malayalam: "മലബാർ ദം ബിരിയാണി & കുഴി മന്തി",
    description: "Fragrant short-grain Khaima/Jeerakasala rice slow-cooked with tender spiced mutton or chicken, fried onions, raisins, and Malabar spices, alongside charcoal-smoked Malappuram-style Arabian Mandi.",
    bestLocations: "Malappuram Town, Kottakkal, Perinthalmanna & Manjeri",
    category: "Specialty Meal",
    image: "/images/cuisine/biriyani.jpg"
  },
  {
    name: "Ponnani Meen Mulakittathu & Porotta",
    malayalam: "പൊന്നാനി മീൻ മുളകിട്ടതും പൊറോട്ടയും",
    description: "Fresh Arabian Sea kingfish or seer fish simmered in a fiery, sour gravy made with Kodampuli (Malabar kokum), shallots, curry leaves, and crushed red chilies, paired with flaky layered Kerala porottas.",
    bestLocations: "Ponnani Port harbor side eateries & Padinharekara beach shacks",
    category: "Seafood",
    image: "/images/cuisine/fish-curry.jpg"
  },
  {
    name: "Unnakaya & Malabar Evening Delights",
    malayalam: "ഉന്നക്കായ & മലബാർ പലഹാരങ്ങൾ",
    description: "Spindle-shaped traditional Malabar fritters made from ripe golden Nendran plantains stuffed with sweetened coconut, cardamom, scrambled egg, and roasted cashews, fried to crispy golden perfection.",
    bestLocations: "Traditional tea shops across Tirur, Kottakkal, and Malappuram Town",
    category: "Snack & Sweet",
    image: "/images/cuisine/unnakaya.jpg"
  },
  {
    name: "Neypathiri with Malappuram Erachi Roast",
    malayalam: "നെയ്പ്പത്തിരി & ഇറച്ചി റോസ്റ്റ്",
    description: "Crispy, golden-fried rice and coconut discs flavored with cumin, served with tender slow-roasted beef or chicken cooked with caramelized shallots and freshly ground black pepper.",
    bestLocations: "Thirurangadi, Tirur, and roadside tea stalls near Kottakunnu",
    category: "Specialty Meal",
    image: "/images/cuisine/neypathiri.jpg"
  },
  {
    name: "Malabar Spiced Sulaimani",
    malayalam: "സുലൈമാനി ചായ",
    description: "Amber-tinted aromatic black tea brewed with fresh mint leaves, crushed cardamom, a hint of cinnamon, and a squeeze of fresh lime juice. Served piping hot after rich feasts to aid digestion.",
    bestLocations: "Every Chayakada (tea stall) across Malappuram district",
    category: "Beverage",
    image: "/images/cuisine/sulaimani.jpg"
  },
  {
    name: "Kallummakkaya Nirachathu (Stuffed Mussels)",
    malayalam: "കല്ലുമ്മക്കായ നിറച്ചത്",
    description: "Plump coastal green mussels stuffed with a spiced rice paste, steam-cooked in their shells, and then shallow-fried in coconut oil with a crispy red chili crust.",
    bestLocations: "Vallikkunnu coastal hamlets & Ponnani beach street food carts",
    category: "Seafood",
    image: "/images/cuisine/mussels.jpg"
  }
];
