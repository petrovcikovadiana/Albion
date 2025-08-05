const gearOptions = {
  helmet: {
    categories: [
      {
        name: "Cloth Cowl",
        image: "T3_HEAD_CLOTH_SET1",
        items: [
          { id: "T8_HEAD_CLOTH_SET1", name: "Scholar Cowl" },
          { id: "T8_HEAD_CLOTH_SET2", name: "Cleric Cowl" },
          { id: "T8_HEAD_CLOTH_SET3", name: "Mage Cowl" },
          { id: "T8_HEAD_CLOTH_ROYAL", name: "Royal Cowl" },
          { id: "T8_HEAD_CLOTH_KEEPER", name: "Druid Cowl" },
          { id: "T8_HEAD_CLOTH_HELL", name: "Fiend Cowl" },
          { id: "T8_HEAD_CLOTH_MORGANA", name: "Cultist Cowl" },
          { id: "T8_HEAD_CLOTH_FEY", name: "Feyscale Cowl" },
          { id: "T8_HEAD_CLOTH_AVALON", name: "Cowl of Purity" },
        ],
      },
      {
        name: "Leather Hood",
        image: "T3_HEAD_LEATHER_SET1",
        items: [
          { id: "T8_HEAD_LEATHER_SET1", name: "Mercenary Hood" },
          { id: "T8_HEAD_LEATHER_SET2", name: "Hunter Hood" },
          { id: "T8_HEAD_LEATHER_SET3", name: "Assassin Hood" },
          { id: "T8_HEAD_LEATHER_ROYAL", name: "Royal Hood" },
          { id: "T8_HEAD_LEATHER_MORGANA", name: "Stalker Hood" },
          { id: "T8_HEAD_LEATHER_HELL", name: "Hellion Hood" },
          { id: "T8_HEAD_LEATHER_UNDEAD", name: "Specter Hood" },
          { id: "T8_HEAD_LEATHER_FEY", name: "Mistwalker Hood" },
          { id: "T8_HEAD_LEATHER_AVALON", name: "Hood of Tenacity" },
        ],
      },
      {
        name: "Plate Helmet",
        image: "T3_HEAD_PLATE_SET1",
        items: [
          { id: "T8_HEAD_PLATE_SET1", name: "Soldier Helmet" },
          { id: "T8_HEAD_PLATE_SET2", name: "Knight Helmet" },
          { id: "T8_HEAD_PLATE_SET3", name: "Guardian Helmet" },
          { id: "T8_HEAD_PLATE_ROYAL", name: "Royal Helmet" },
          { id: "T8_HEAD_PLATE_UNDEAD", name: "Graveguard Helmet" },
          { id: "T8_HEAD_PLATE_HELL", name: "Demon Helmet" },
          { id: "T8_HEAD_PLATE_KEEPER", name: "Judicator Helmet" },
          { id: "T8_HEAD_PLATE_FEY", name: "Duskweaver Helmet" },
          { id: "T8_HEAD_PLATE_AVALON", name: "Helmet of Valor" },
        ],
      },
    ],
  },

  cape: {
    items: [
      { id: "T8_CAPE", name: "Standard Cape" },
      { id: "T8_CAPEITEM_FW_BRIDGEWATCH", name: "Bridgewatch Cape" },
      { id: "T8_CAPEITEM_FW_FORTSTERLING", name: "Fort Sterling Cape" },
      { id: "T8_CAPEITEM_FW_LYMHURST", name: "Lymhurst Cape" },
      { id: "T8_CAPEITEM_FW_MARTLOCK", name: "Martlock Cape" },
      { id: "T8_CAPEITEM_FW_THETFORD", name: "Thetford Cape" },
      { id: "T8_CAPEITEM_FW_CAERLEON", name: "Caerleon Cape" },
      { id: "T8_CAPEITEM_FW_BRECILIEN", name: "Brecilien Cape" },
      { id: "T8_CAPEITEM_AVALON", name: "Avalonian Cape" },
      { id: "T8_CAPEITEM_SMUGGLER", name: "Smuggler Cape" },
      { id: "T8_CAPEITEM_HERETIC", name: "Heretic Cape" },
      { id: "T8_CAPEITEM_UNDEAD", name: "Undead Cape" },
      { id: "T8_CAPEITEM_KEEPER", name: "Keeper Cape" },
      { id: "T8_CAPEITEM_MORGANA", name: "Morgana Cape" },
      { id: "T8_CAPEITEM_DEMON", name: "Demon Cape" },
    ],
  },

  potion: {
    items: [
      { id: "T6_POTION_HEAL", name: "Major Healing Potion" },
      { id: "T6_POTION_ENERGY", name: "Major Energy Potion" },
      { id: "T7_POTION_REVIVE", name: "Major Gigantify Potion" },
      { id: "T7_POTION_STONESKIN", name: "Major Resistance Potion" },
      { id: "T7_POTION_SLOWFIELD", name: "Major Sticky Potion" },
      { id: "T8_POTION_COOLDOWN", name: "Major Poison Potion" },
      { id: "T8_POTION_CLEANSE", name: " Invisibility Potion" },
      { id: "T7_POTION_MOB_RESET", name: "Major Calming Potion" },
      { id: "T7_POTION_CLEANSE2", name: "Major Cleansing Potion" },
      { id: "T7_POTION_ACID", name: "Major Acid Potion" },
      { id: "T8_POTION_BERSERK", name: "Major Berserk Potion" },
      { id: "T8_POTION_LAVA", name: "Major Hellfire Potion" },
      { id: "T8_POTION_GATHER", name: "Major Gathering Potion" },
      { id: "T8_POTION_TORNADO", name: "Major Tornado in a Bottle" },
    ],
  },

  food: {
    items: [
      { id: "T5_MEAL_SOUP", name: "Cabbage Soup" },
      { id: "T5_MEAL_SOUP_FISH", name: "Blackbog Clam Soup" },
      { id: "T6_MEAL_SALAD", name: "Potato Salad" },
      { id: "T6_MEAL_SALAD_FISH", name: "Deepwater Kraken Salad" },
      { id: "T7_MEAL_PIE", name: "Pork Pie" },
      { id: "T7_MEAL_PIE_FISH", name: "Frostpeak Deadeye Pie" },
      { id: "T7_MEAL_OMELETTE", name: "Pork Omelette" },
      { id: "T7_MEAL_OMELETTE_FISH", name: "Dushthole Crab Omelette" },
      { id: "T7_MEAL_OMELETTE_AVALON", name: "Avalonian Pork Omelette" },
      { id: "T8_MEAL_STEW", name: "Beef Stew" },
      { id: "T8_MEAL_STEW_FISH", name: "Deadwater Eel Stew" },
      { id: "T8_MEAL_STEW_AVALON", name: "Avalonian Beef Stew" },
      { id: "T8_MEAL_SANDWICH", name: "Beef Sandwich" },
      { id: "T8_MEAL_SANDWICH_FISH", name: "Thunderfall Lurcher Sandwich" },
      { id: "T8_MEAL_SANDWICH_AVALON", name: "Avalonian Beef Sandwich" },
      { id: "T7_MEAL_ROAST", name: "Roast Pork" },
      { id: "T7_MEAL_ROAST_FISH", name: "Roasted Puremist Snapper" },
      {
        id: "T7_FISH_FRESHWATER_ALL_COMMON",
        name: "Danglemouth Catfish",
      },
      {
        id: "T8_FISH_FRESHWATER_ALL_COMMON",
        name: "River Sturgeon",
      },
      { id: "T7_FISH_SALTWATER_ALL_COMMON", name: "Bluefin Tuna" },
      { id: "T8_FISH_SALTWATER_ALL_COMMON", name: "Steelscale Swordfish" },
      { id: "T7_FISH_FRESHWATER_FOREST_RARE", name: "Deadwater Eel" },
      { id: "T7_FISH_FRESHWATER_MOUNTAIN_RARE", name: "Frostpeak Deadeye" },
      {
        id: "T7_FISH_FRESHWATER_HIGHLANDS_RARE",
        name: "Thunderfall Lurcher",
      },
      { id: "T7_FISH_FRESHWATER_STEPPE_RARE", name: "Dusthole Crab" },
      { id: "T7_FISH_FRESHWATER_SWAMP_RARE", name: "Blackbog Clam" },
      { id: "T7_FISH_SALTWATER_ALL_RARE", name: "Deepwater Kraken" },
      { id: "T7_FISH_FRESHWATER_AVALON_RARE", name: "Puremist Snapper" },
    ],
  },

  mount: {
    items: [
      { id: "T8_MOUNT_HORSE", name: "Riding Horse" },
      { id: "T8_MOUNT_ARMORED_HORSE", name: " Armored Horse" },
      { id: "T8_MOUNT_OX", name: "Transport Ox" },
      { id: "T4_MOUNT_GIANTSTAG", name: "Giant Stag" },
      { id: "T5_MOUNT_COUGAR_KEEPER", name: "Swiftclaw" },
      { id: "T6_MOUNT_GIANTSTAG_MOOSE", name: "Moose" },
      { id: "T6_MOUNT_DIREWOLF", name: "Direwolf" },
      { id: "T7_MOUNT_DIREBOAR", name: "Saddled Direboar" },
      { id: "T7_MOUNT_SWAMPDRAGON", name: "Saddled Swamp Dragon" },
      { id: "T7_MOUNT_SWAMPDRAGON_AVALON_BASILISK", name: "Basilisk" },
      { id: "T8_MOUNT_DIREBEAR", name: "Saddled Direbear" },
      { id: "T8_MOUNT_MAMMOTH_TRANSPORT", name: "Transport Mammoth" },
      { id: "T8_MOUNT_HORSE_UNDEAD", name: "Spectral Bonehorse" },
      { id: "T8_MOUNT_COUGAR_KEEPER", name: "Rageclaw" },
      { id: "T8_MOUNT_ARMORED_HORSE_MORGANA", name: "Morgana Nightmare" },
      { id: "T8_MOUNT_RABBIT_EASTER", name: "Spring Cottontail" },
      { id: "T8_MOUNT_RABBIT_EASTER_DARK", name: "Caerleon Cottontail" },
      { id: "UNIQUE_MOUNT_DIVINE_OWL_ADC", name: "Divine Owl" },
      { id: "T6_MOUNT_FROSTRAM_ADC", name: "Frost Ram" },
      { id: "UNIQUE_MOUNT_HERETIC_MULE_ADC", name: "Heretic Combat Mule" },
      { id: "UNIQUE_MOUNT_MORGANA_RAVEN_ADC", name: "Morgana Raven" },
      { id: "UNIQUE_MOUNT_GIANT_HORSE_ADC", name: "Gallant Horse" },
      { id: "UNIQUE_MOUNT_BEAR_KEEPER_ADC", name: "Grizzly Bear" },
      { id: "T7_MOUNT_MONITORLIZARD_ADC", name: "Pest Lizard" },
      { id: "T7_MOUNT_HUSKY_ADC", name: " Snow Husky" },
      { id: "UNIQUE_MOUNT_BAT_PERSONAL", name: " Spectral Bat " },
      {
        id: "UNIQUE_MOUNT_UNDEAD_DIREBOAR_ADC",
        name: " Spectral Direboar",
      },
      { id: "T7_MOUNT_TERRORBIRD_ADC", name: "Saddled Terrorbird" },
      { id: "UNIQUE_MOUNT_BLACK_PANTHER_ADC", name: "Black Panther" },
      {
        id: "T8_MOUNT_MOABIRD_FW_BRIDGEWATCH_ELITE",
        name: "Elite Terrorbird",
      },
      {
        id: "T8_MOUNT_DIREBEAR_FW_FORTSTERLING_ELITE",
        name: "Elite Winter Bear",
      },
      {
        id: "T8_MOUNT_DIREBOAR_FW_LYMHURST_ELITE",
        name: "Elite Wild Boar",
      },
      { id: "T8_MOUNT_RAM_FW_MARTLOCK_ELITE", name: "Elite Bighorn Ram" },
      {
        id: "T8_MOUNT_SWAMPDRAGON_FW_THETFORD_ELITE",
        name: "Elite Swamp Salamander",
      },
      {
        id: "T8_MOUNT_GREYWOLF_FW_CAERLEON_ELITE",
        name: "Elite Greywolf",
      },
      { id: "T8_MOUNT_OWL_FW_BRECILIEN_ELITE", name: "Elite Mystic Owl" },
      { id: "T6_MOUNT_SIEGE_BALLISTA", name: "Siege Ballista" },
      { id: "T7_MOUNT_SWAMPDRAGON_BATTLE", name: "Flame Basilisk" },
      { id: "T8_MOUNT_MAMMOTH_BATTLE", name: "Command Mammoth" },
      { id: "T8_MOUNT_ARMORED_HORSE_SKIN_01", name: "Warhorse" },
      { id: "UNIQUE_MOUNT_RHINO_SEASON_CRYSTAL", name: "Crystal Battle Rhino" },
      {
        id: "UNIQUE_MOUNT_TOWER_CHARIOT_CRYSTAL",
        name: "Crystal Tower Chariot",
      },
      {
        id: "UNIQUE_MOUNT_ARMORED_EAGLE_CRYSTAL",
        name: "Crystal Battle Eagle",
      },
      { id: "UNIQUE_MOUNT_BEETLE_CRYSTAL", name: "Crystal Colossus Beetle" },
      { id: "UNIQUE_MOUNT_BEHEMOTH_CRYSTAL", name: "Crystal Behemoth" },
      { id: "UNIQUE_MOUNT_ENT_CRYSTAL", name: "Crystal Ancient Ent" },
      {
        id: "UNIQUE_MOUNT_BATTLESPIDER_CRYSTAL",
        name: "Crystal Goliath Horseeater",
      },
      { id: "UNIQUE_MOUNT_BASTION_CRYSTAL", name: "Crystal Roving Bastion" },
      { id: "UNIQUE_MOUNT_JUGGERNAUT_CRYSTAL", name: "Crystal Juggernaut" },
      { id: "UNIQUE_MOUNT_TANKBEETLE_CRYSTAL", name: "Crystal Phalanx Beetle" },
    ],
  },
  armor: {
    categories: [
      {
        name: "Cloth Robe",
        image: "T3_ARMOR_CLOTH_SET1",
        items: [
          { id: "T8_ARMOR_CLOTH_SET1", name: "Scholar Robe" },
          { id: "T8_ARMOR_CLOTH_SET2", name: "Cleric Robe" },
          { id: "T8_ARMOR_CLOTH_SET3", name: "Mage Robe" },
          { id: "T8_ARMOR_CLOTH_ROYAL", name: "Royal Robe" },
          { id: "T8_ARMOR_CLOTH_KEEPER", name: "Druid Robe" },
          { id: "T8_ARMOR_CLOTH_HELL", name: "Fiend Robe" },
          { id: "T8_ARMOR_CLOTH_MORGANA", name: "Cultist Robe" },
          { id: "T8_ARMOR_CLOTH_FEY", name: "Feyscale Robe" },
          { id: "T8_ARMOR_CLOTH_AVALON", name: "Robe of Purity" },
        ],
      },
      {
        name: "Leather Jacket",
        image: "T3_ARMOR_LEATHER_SET1",
        items: [
          { id: "T8_ARMOR_LEATHER_SET1", name: "Mercenary Jacket" },
          { id: "T8_ARMOR_LEATHER_SET2", name: "Hunter Jacket" },
          { id: "T8_ARMOR_LEATHER_SET3", name: "Assassin Jacket" },
          { id: "T8_ARMOR_LEATHER_ROYAL", name: "Royal Jacket" },
          { id: "T8_ARMOR_LEATHER_MORGANA", name: "Stalker Jacket" },
          { id: "T8_ARMOR_LEATHER_HELL", name: "Hellion Jacket" },
          { id: "T8_ARMOR_LEATHER_UNDEAD", name: "Specter Jacket" },
          { id: "T8_ARMOR_LEATHER_FEY", name: "Mistwalker Jacket" },
          { id: "T8_ARMOR_LEATHER_AVALON", name: "Jacket of Tenacity" },
        ],
      },
      {
        name: "Plate Armor",
        image: "T3_ARMOR_PLATE_SET1",
        items: [
          { id: "T8_ARMOR_PLATE_SET1", name: "Soldier Armor" },
          { id: "T8_ARMOR_PLATE_SET2", name: "Knight Armor" },
          { id: "T8_ARMOR_PLATE_SET3", name: "Guardian Armor" },
          { id: "T8_ARMOR_PLATE_ROYAL", name: "Royal Armor" },
          { id: "T8_ARMOR_PLATE_UNDEAD", name: "Graveguard Armor" },
          { id: "T8_ARMOR_PLATE_HELL", name: "Demon Armor" },
          { id: "T8_ARMOR_PLATE_KEEPER", name: "Judicator Armor" },
          { id: "T8_ARMOR_PLATE_FEY", name: "Duskweaver Armor" },
          { id: "T8_ARMOR_PLATE_AVALON", name: " Armor of Valor" },
        ],
      },
    ],
  },

  right: {
    categories: [
      {
        name: "Tome of Spells",
        image: "T3_OFF_BOOK",
        items: [
          { id: "T8_OFF_BOOK", name: "Diary" },
          { id: "T8_OFF_ORB_MORGANA", name: "Eye of secrets" },
          { id: "T8_OFF_DEMONSKULL_HELL", name: "Muisak" },
          { id: "T8_OFF_TOTEM_KEEPER", name: "Taproot" },
          { id: "T8_OFF_CENSER_AVALON", name: "Celestial Censer" },
        ],
      },
      {
        name: "Torch",
        image: "T3_OFF_TORCH",
        items: [
          { id: "T8_OFF_TORCH", name: "Torch" },
          { id: "T8_OFF_HORN_KEEPER", name: "Mistcaller" },
          { id: "T8_OFF_TALISMAN_AVALON", name: "Sacred Scepter" },
          { id: "T8_OFF_LAMP_UNDEAD", name: "Cryptcandle" },
          { id: "T8_OFF_JESTERCANE_HELL", name: "Leering Cane" },
        ],
      },
      {
        name: "Shield",
        image: "T3_OFF_SHIELD",
        items: [
          { id: "T8_OFF_SHIELD", name: "Shield" },
          { id: "T8_OFF_TOWERSHIELD_UNDEAD", name: "Sarcophagus" },
          { id: "T8_OFF_SHIELD_HELL", name: "Caitiff Shield" },
          { id: "T8_OFF_SPIKEDSHIELD_MORGANA", name: "Facebreaker" },
          { id: "T8_OFF_SHIELD_AVALON", name: "Astral Aegis" },
        ],
      },
    ],
  },

  boots: {
    categories: [
      {
        name: "Cloth Sandals",
        image: "T3_SHOES_CLOTH_SET1",
        items: [
          { id: "T8_SHOES_CLOTH_SET1", name: "Scholar Sandals" },
          { id: "T8_SHOES_CLOTH_SET2", name: "Cleric Sandals" },
          { id: "T8_SHOES_CLOTH_SET3", name: "Mage Sandals" },
          { id: "T8_SHOES_CLOTH_ROYAL", name: "Royal Sandals" },
          { id: "T8_SHOES_CLOTH_KEEPER", name: "Druid Sandals" },
          { id: "T8_SHOES_CLOTH_HELL", name: "Fiend Sandals" },
          { id: "T8_SHOES_CLOTH_MORGANA", name: "Cultist Sandals" },
          { id: "T8_SHOES_CLOTH_FEY", name: "Feyscale Sandals" },
          { id: "T8_SHOES_CLOTH_AVALON", name: "Sandals of Purity" },
        ],
      },
      {
        name: "Leather Shoes",
        image: "T3_SHOES_LEATHER_SET1",
        items: [
          { id: "T8_SHOES_LEATHER_SET1", name: "Mercenary Shoes" },
          { id: "T8_SHOES_LEATHER_SET2", name: "Hunter Shoes" },
          { id: "T8_SHOES_LEATHER_SET3", name: "Assassin Shoes" },
          { id: "T8_SHOES_LEATHER_ROYAL", name: "Royal Shoes" },
          { id: "T8_SHOES_LEATHER_MORGANA", name: "Stalker Shoes" },
          { id: "T8_SHOES_LEATHER_UNDEAD", name: "Hellion Shoes" },
          { id: "T8_SHOES_LEATHER_HELL", name: "Specter Shoes" },

          { id: "T8_SHOES_LEATHER_FEY", name: "Mistwalker Shoes" },
          { id: "T8_SHOES_LEATHER_AVALON", name: "Shoes of Tenacity" },
        ],
      },
      {
        name: "Plate Boots",
        image: "T3_SHOES_PLATE_SET1",
        items: [
          { id: "T8_SHOES_PLATE_SET1", name: "Soldier Boots" },
          { id: "T8_SHOES_PLATE_SET2", name: "Knight Boots" },
          { id: "T8_SHOES_PLATE_SET3", name: "Guardian Boots" },
          { id: "T8_SHOES_PLATE_ROYAL", name: "Royal Boots" },
          { id: "T8_SHOES_PLATE_UNDEAD", name: "Graveguard Boots" },
          { id: "T8_SHOES_PLATE_HELL", name: "Demon Boots" },
          { id: "T8_SHOES_PLATE_KEEPER", name: "Judicator Boots" },
          { id: "T8_SHOES_PLATE_FEY", name: "Duskweaver Boots" },
          { id: "T8_SHOES_PLATE_AVALON", name: "Boots of Valor" },
        ],
      },
    ],
  },
  offhand: {
    categories: [
      {
        name: "Mage",
        image: "T2_MAIN_FIRESTAFF",
        subcategories: [
          {
            name: "Fire staff",
            image: "T3_MAIN_FIRESTAFF",
            items: [
              {
                id: "T8_MAIN_FIRESTAFF",
                twoHanded: false,
                name: "Fire Staff",
              },
              {
                id: "T8_2H_FIRESTAFF",
                twoHanded: true,
                name: "Wrath",
              },
              {
                id: "T8_2H_INFERNOSTAFF",
                twoHanded: true,
                name: "Infernal Staff",
              },
              {
                id: "T8_MAIN_FIRESTAFF_KEEPER",
                twoHanded: false,
                name: "Wildfire Staff",
              },
              {
                id: "T8_2H_FIRESTAFF_HELL",
                twoHanded: true,
                name: "Brimstone Staff",
              },
              {
                id: "T8_2H_INFERNOSTAFF_MORGANA",
                twoHanded: true,
                name: "Blazing Staff",
              },
              {
                id: "T8_2H_FIRE_RINGPAIR_AVALON",
                twoHanded: true,
                name: "Dawnsong",
              },
              {
                id: "T8_MAIN_FIRESTAFF_CRYSTAL",
                twoHanded: false,
                name: "Flamewalker Staff",
              },
            ],
          },
          {
            name: "Holy Staff",
            image: "T3_MAIN_HOLYSTAFF",
            items: [
              { id: "T8_MAIN_HOLYSTAFF", twoHanded: false, name: "Holy Staff" },
              {
                id: "T8_2H_HOLYSTAFF",
                twoHanded: true,
                name: "Great Holy Staff",
              },
              {
                id: "T8_2H_DIVINESTAFF",
                twoHanded: true,
                name: "Divine Staff",
              },
              {
                id: "T8_MAIN_HOLYSTAFF_MORGANA",
                twoHanded: false,
                name: "Lifetouch Staff",
              },
              {
                id: "T8_2H_HOLYSTAFF_HELL",
                twoHanded: true,
                name: "Fallen Staff",
              },
              {
                id: "T8_2H_HOLYSTAFF_UNDEAD",
                twoHanded: true,
                name: "Redemption Staff",
              },
              {
                id: "T8_MAIN_HOLYSTAFF_AVALON",
                twoHanded: false,
                name: "Hallowfall",
              },
              {
                id: "T8_2H_HOLYSTAFF_CRYSTAL",
                twoHanded: true,
                name: "Exalted Staff",
              },
            ],
          },
          {
            name: "Arcane Staff",
            image: "T3_MAIN_ARCANESTAFF",
            items: [
              {
                id: "T8_MAIN_ARCANESTAFF",
                twoHanded: false,
                name: "Arcane Staff",
              },
              {
                id: "T8_2H_ARCANESTAFF",
                twoHanded: true,
                name: "Great Arcane Staff",
              },
              {
                id: "T8_2H_ENIGMATICSTAFF",
                twoHanded: true,
                name: "Enigmatic Staff",
              },
              {
                id: "T8_MAIN_ARCANESTAFF_UNDEAD",
                twoHanded: false,
                name: "Witchwork Staff",
              },
              {
                id: "T8_2H_ARCANESTAFF_HELL",
                twoHanded: true,
                name: "Occult Staff",
              },
              {
                id: "T8_2H_ENIGMATICORB_MORGANA",
                twoHanded: true,
                name: "Malevolent Locus",
              },
              {
                id: "T8_2H_ARCANE_RINGPAIR_AVALON",
                twoHanded: true,
                name: "Evensong",
              },
              {
                id: "T8_2H_ARCANESTAFF_CRYSTAL",
                twoHanded: true,
                name: "Astral Staff",
              },
            ],
          },
          {
            name: "Frost Staff",
            image: "T3_MAIN_FROSTSTAFF",
            items: [
              {
                id: "T8_MAIN_FROSTSTAFF",
                twoHanded: false,
                name: "Frost Staff",
              },
              {
                id: "T8_2H_FROSTSTAFF",
                twoHanded: true,
                name: "Great Frost Staff",
              },
              {
                id: "T8_2H_GLACIALSTAFF",
                twoHanded: true,
                name: "Glacial Staff",
              },
              {
                id: "T8_MAIN_FROSTSTAFF_KEEPER",
                twoHanded: false,
                name: "Hoarfrost Staff",
              },
              {
                id: "T8_2H_ICEGAUNTLETS_HELL",
                twoHanded: true,
                name: "Icicle Staff",
              },
              {
                id: "T8_2H_ICECRYSTAL_UNDEAD",
                twoHanded: true,
                name: "Permafrost Prism",
              },
              {
                id: "T8_MAIN_FROSTSTAFF_AVALON",
                twoHanded: false,
                name: "Chillhowl",
              },
              {
                id: "T8_2H_FROSTSTAFF_CRYSTAL",
                twoHanded: true,
                name: "Arctic Staff",
              },
            ],
          },
          {
            name: "Cursed Staff",
            image: "T3_MAIN_CURSEDSTAFF",
            items: [
              {
                id: "T8_MAIN_CURSEDSTAFF",
                twoHanded: false,
                name: "Cursed Staff",
              },
              {
                id: "T8_2H_CURSEDSTAFF",
                twoHanded: true,
                name: "Great Cursed Staff",
              },
              {
                id: "T8_2H_DEMONICSTAFF",
                twoHanded: true,
                name: "Demonic Staff",
              },
              {
                id: "T8_MAIN_CURSEDSTAFF_UNDEAD",
                twoHanded: false,
                name: "Lifecurse Staff",
              },
              {
                id: "T8_2H_SKULLORB_HELL",
                twoHanded: true,
                name: "Cursed Skull",
              },
              {
                id: "T8_2H_CURSEDSTAFF_MORGANA",
                twoHanded: true,
                name: "Damnation Staff",
              },
              {
                id: "T8_MAIN_CURSEDSTAFF_AVALON",
                twoHanded: false,
                name: "Shadowcaller",
              },
              {
                id: "T8_MAIN_CURSEDSTAFF_CRYSTAL",
                twoHanded: false,
                name: "Rotcaller Staff",
              },
            ],
          },
        ],
      },
      {
        name: "Hunter",
        image: "T2_2H_BOW",
        subcategories: [
          {
            name: "Bows",
            image: "Bow",
            items: [
              { id: "T8_2H_BOW", twoHanded: true, name: "Bow" },
              { id: "T8_2H_WARBOW", twoHanded: true, name: "Warbow" },
              { id: "T8_2H_LONGBOW", twoHanded: true, name: "Longbow" },
              {
                id: "T8_2H_LONGBOW_UNDEAD",
                twoHanded: true,
                name: "Whispering Bow",
              },
              { id: "T8_2H_BOW_HELL", twoHanded: true, name: "Wailing Bow" },
              { id: "T8_2H_BOW_KEEPER", twoHanded: true, name: "Bow of Badon" },
              { id: "T8_2H_BOW_AVALON", twoHanded: true, name: "Mistpiercer" },
              {
                id: "T8_2H_BOW_CRYSTAL",
                twoHanded: true,
                name: "Skystrider Bow",
              },
            ],
          },
          {
            name: "Daggers",
            image: "T3_MAIN_DAGGER",
            items: [
              { id: "T8_MAIN_DAGGER", twoHanded: false, name: "Dagger" },
              { id: "T8_2H_DAGGERPAIR", twoHanded: true, name: "Dagger Pair" },
              { id: "T8_2H_CLAWPAIR", twoHanded: true, name: "Claws" },
              {
                id: "T8_MAIN_RAPIER_MORGANA",
                twoHanded: false,
                name: "Bloodletter",
              },
              {
                id: "T8_MAIN_DAGGER_HELL",
                twoHanded: false,
                name: "Demonfang",
              },
              {
                id: "T8_2H_DUALSICKLE_UNDEAD",
                twoHanded: true,
                name: "Deathgivers",
              },
              {
                id: "T8_2H_DAGGER_KATAR_AVALON",
                twoHanded: true,
                name: "Bridled Fury",
              },
              {
                id: "T8_2H_DAGGERPAIR_CRYSTAL",
                twoHanded: true,
                name: "Twin Slayers",
              },
            ],
          },
          {
            name: "Spears",
            image: "T3_MAIN_SPEAR",
            items: [
              { id: "T8_MAIN_SPEAR", twoHanded: false, name: "Spear" },
              { id: "T8_2H_SPEAR", twoHanded: true, name: "Pike" },
              { id: "T8_2H_GLAIVE", twoHanded: true, name: "Glaive" },
              {
                id: "T8_MAIN_SPEAR_KEEPER",
                twoHanded: false,
                name: "Heron Spear",
              },
              {
                id: "T8_2H_HARPOON_HELL",
                twoHanded: true,
                name: "Spirithunter",
              },
              {
                id: "T8_2H_TRIDENT_UNDEAD",
                twoHanded: true,
                name: "Trinity Spear",
              },
              {
                id: "T8_MAIN_SPEAR_LANCE_AVALON",
                twoHanded: false,
                name: "Daybreaker",
              },
              {
                id: "T8_2H_GLAIVE_CRYSTAL",
                twoHanded: true,
                name: "Rift Glaive",
              },
            ],
          },
          {
            name: "Quarterstaff",
            image: "T3_2H_QUARTERSTAFF",
            items: [
              {
                id: "T8_2H_QUARTERSTAFF",
                twoHanded: true,
                name: "Quarterstaff",
              },
              {
                id: "T8_2H_IRONCLADEDSTAFF",
                twoHanded: true,
                name: "Iron-Clad Staff",
              },
              {
                id: "T8_2H_DOUBLEBLADEDSTAFF",
                twoHanded: true,
                name: "Double Bladed Staff",
              },
              {
                id: "T8_2H_COMBATSTAFF_MORGANA",
                twoHanded: true,
                name: "Black Monk Staff",
              },
              {
                id: "T8_2H_TWINSCYTHE_HELL",
                twoHanded: true,
                name: "Soulscythe",
              },
              {
                id: "T8_2H_ROCKSTAFF_KEEPER",
                twoHanded: true,
                name: "Staff of Balance",
              },
              {
                id: "T8_2H_QUARTERSTAFF_AVALON",
                twoHanded: true,
                name: "Grailseeker",
              },
              {
                id: "T8_2H_DOUBLEBLADEDSTAFF_CRYSTAL",
                twoHanded: true,
                name: "Phantom Twinblade",
              },
            ],
          },
          {
            name: "Prowling Staff",
            image: "T8_2H_SHAPESHIFTER_SET1",
            items: [
              {
                id: "T8_2H_SHAPESHIFTER_SET1",
                twoHanded: true,
                name: "Prowling Staff",
              },
              {
                id: "T8_2H_SHAPESHIFTER_SET2",
                twoHanded: true,
                name: "Rootbound Staff",
              },
              {
                id: "T8_2H_SHAPESHIFTER_SET3",
                twoHanded: true,
                name: "Primal Staff",
              },
              {
                id: "T8_2H_SHAPESHIFTER_MORGANA",
                twoHanded: true,
                name: "Bloodmoon Staff",
              },
              {
                id: "T8_2H_SHAPESHIFTER_HELL",
                twoHanded: true,
                name: "Hellspawn Staff",
              },
              {
                id: "T8_2H_SHAPESHIFTER_KEEPER",
                twoHanded: true,
                name: "Earthrune Staff",
              },
              {
                id: "T8_2H_SHAPESHIFTER_AVALON",
                twoHanded: true,
                name: "Lightcaller Staff",
              },
              {
                id: "T8_2H_SHAPESHIFTER_CRYSTAL",
                twoHanded: true,
                name: "Stillgaze Staff",
              },
            ],
          },
          {
            name: "Nature Staff",
            image: "T3_MAIN_NATURESTAFF",
            items: [
              {
                id: "T8_MAIN_NATURESTAFF",
                twoHanded: false,
                name: "Nature Staff",
              },
              {
                id: "T8_2H_NATURESTAFF",
                twoHanded: true,
                name: "Great Nature Staff",
              },
              { id: "T8_2H_WILDSTAFF", twoHanded: true, name: "Wild Staff" },
              {
                id: "T8_MAIN_NATURESTAFF_KEEPER",
                twoHanded: false,
                name: "Druidic Staff",
              },
              {
                id: "T8_2H_NATURESTAFF_HELL",
                twoHanded: true,
                name: "Blight Staff",
              },
              {
                id: "T8_2H_NATURESTAFF_KEEPER",
                twoHanded: true,
                name: "Rampant Staff",
              },
              {
                id: "T8_MAIN_NATURESTAFF_AVALON",
                twoHanded: false,
                name: "Ironroot Staff",
              },
              {
                id: "T8_MAIN_NATURESTAFF_CRYSTAL",
                twoHanded: false,
                name: "Forgebark Staff",
              },
            ],
          },
        ],
      },
      {
        name: "Warrior",
        image: "T2_MAIN_SWORD",
        subcategories: [
          {
            name: "Sword",
            image: "T3_MAIN_SWORD",
            items: [
              { id: "T8_MAIN_SWORD", twoHanded: false, name: "Broadsword" },
              { id: "T8_2H_CLAYMORE", twoHanded: true, name: "Claymore" },
              { id: "T8_2H_DUALSWORD", twoHanded: true, name: "Dual Swords" },
              {
                id: "T8_MAIN_SCIMITAR_MORGANA",
                twoHanded: false,
                name: "Clarent Blade",
              },
              {
                id: "T8_2H_CLEAVER_HELL",
                twoHanded: true,
                name: "Carving Sword",
              },
              {
                id: "T8_2H_DUALSCIMITAR_UNDEAD",
                twoHanded: true,
                name: " Galatine Pair",
              },
              {
                id: "T8_2H_CLAYMORE_AVALON",
                twoHanded: true,
                name: "Kingmaker",
              },
              {
                id: "T8_MAIN_SWORD_CRYSTAL",
                twoHanded: false,
                name: "Infinity Blade",
              },
            ],
          },
          {
            name: "Battleaxe",
            image: "T3_MAIN_AXE",
            items: [
              { id: "T8_MAIN_AXE", twoHanded: false, name: "Battleaxe" },
              {
                id: "T8_2H_AXE",
                twoHanded: true,
                name: "The Hand of Khor",
              },
              { id: "T8_2H_HALBERD", twoHanded: true, name: "Halberd" },
              {
                id: "T8_2H_HALBERD_MORGANA",
                twoHanded: true,
                name: "Carrioncaller",
              },
              {
                id: "T8_2H_SCYTHE_HELL",
                twoHanded: true,
                name: "Infernal Scythe",
              },
              {
                id: "T8_2H_DUALAXE_KEEPER",
                twoHanded: true,
                name: "Bear Paws",
              },
              { id: "T8_2H_AXE_AVALON", twoHanded: true, name: "Realmbreaker" },
              {
                id: "T8_2H_SCYTHE_CRYSTAL",
                twoHanded: true,
                name: "Crystal Reaper",
              },
            ],
          },
          {
            name: "Mace",
            image: "T3_MAIN_MACE",
            items: [
              { id: "T8_MAIN_MACE", twoHanded: false, name: "Mace" },
              { id: "T8_2H_MACE", twoHanded: true, name: "Heavy Mace" },
              { id: "T8_2H_FLAIL", twoHanded: true, name: "Morning Star" },
              {
                id: "T8_MAIN_ROCKMACE_KEEPER",
                twoHanded: false,
                name: "Bedrock Mace",
              },
              {
                id: "T8_MAIN_MACE_HELL",
                twoHanded: false,
                name: "Incubus Mace",
              },
              {
                id: "T8_2H_MACE_MORGANA",
                twoHanded: true,
                name: "Camlann Mace",
              },
              {
                id: "T8_2H_DUALMACE_AVALON",
                twoHanded: true,
                name: "Oathkeepers",
              },
              {
                id: "T8_MAIN_MACE_CRYSTAL",
                twoHanded: false,
                name: "Dreadstorm Monarch",
              },
            ],
          },
          {
            name: "Hammer",
            image: "T3_MAIN_HAMMER",
            items: [
              { id: "T8_MAIN_HAMMER", twoHanded: false, name: "Hammer" },
              { id: "T8_2H_POLEHAMMER", twoHanded: true, name: "Polehammer" },
              { id: "T8_2H_HAMMER", twoHanded: true, name: "Great Hammer" },
              {
                id: "T8_2H_HAMMER_UNDEAD",
                twoHanded: true,
                name: "Tombhammer",
              },
              {
                id: "T8_2H_DUALHAMMER_HELL",
                twoHanded: true,
                name: "Forge Hammers",
              },
              { id: "T8_2H_RAM_KEEPER", twoHanded: true, name: "Grovekeeper" },
              {
                id: "T8_2H_HAMMER_AVALON",
                twoHanded: true,
                name: "Hand of Justice",
              },
              {
                id: "T8_2H_HAMMER_CRYSTAL",
                twoHanded: true,
                name: "Truebolt Hammer",
              },
            ],
          },
          {
            name: "Brawler Gloves",
            image: "T3_2H_KNUCKLES_SET1",
            items: [
              {
                id: "T8_2H_KNUCKLES_SET1",
                twoHanded: true,
                name: "Brawler Gloves",
              },
              {
                id: "T8_2H_KNUCKLES_SET2",
                twoHanded: true,
                name: "Battle Bracers ",
              },
              {
                id: "T8_2H_KNUCKLES_SET3",
                twoHanded: true,
                name: "Spiked Gauntlets ",
              },
              {
                id: "T8_2H_KNUCKLES_KEEPER",
                twoHanded: true,
                name: "Ursine Maulers",
              },
              {
                id: "T8_2H_KNUCKLES_HELL",
                twoHanded: true,
                name: "Hellfire Hands",
              },
              {
                id: "T8_2H_KNUCKLES_MORGANA",
                twoHanded: true,
                name: "Ravenstrike Cestus",
              },
              {
                id: "T8_2H_KNUCKLES_AVALON",
                twoHanded: true,
                name: " Fists of Avalon",
              },
              {
                id: "T8_2H_KNUCKLES_CRYSTAL",
                twoHanded: true,
                name: "Forcepulse Bracers",
              },
            ],
          },
          {
            name: "Crossbow",
            image: "T3_2H_CROSSBOW",
            items: [
              { id: "T8_2H_CROSSBOW", twoHanded: true, name: "Crossbow" },
              {
                id: "T8_2H_CROSSBOWLARGE",
                twoHanded: true,
                name: "Heavy Crossbow",
              },
              {
                id: "T8_MAIN_1HCROSSBOW",
                twoHanded: false,
                name: "Light Crossbow",
              },
              {
                id: "T8_2H_REPEATINGCROSSBOW_UNDEAD",
                twoHanded: true,
                name: "Weeping Repeater",
              },
              {
                id: "T8_2H_DUALCROSSBOW_HELL",
                twoHanded: true,
                name: "Boltcasters",
              },
              {
                id: "T8_2H_CROSSBOWLARGE_MORGANA",
                twoHanded: true,
                name: "Siegebow",
              },
              {
                id: "T8_2H_CROSSBOW_CANNON_AVALON",
                twoHanded: true,
                name: "Energy Shaper",
              },
              {
                id: "T8_2H_DUALCROSSBOW_CRYSTAL",
                twoHanded: true,
                name: "Arclight Blasters",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default gearOptions;
