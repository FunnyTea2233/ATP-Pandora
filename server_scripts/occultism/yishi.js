//神秘仪式模板
// "pentacle.occultism.craft_afrit": "塞维拉永囚咒",
// "pentacle.occultism.craft_djinni": "斯特里格高等束缚",
// "pentacle.occultism.craft_foliot": "埃兹维斯灵体强迫",
// "pentacle.occultism.craft_marid": "修菲斯倒转之塔",
// "pentacle.occultism.possess_afrit": "阿巴拉斯强令召唤术",
// "pentacle.occultism.possess_djinni": "伊哈根奴役术",
// "pentacle.occultism.possess_foliot": "海德林诱惑术",
// "pentacle.occultism.summon_afrit": "阿巴拉斯召唤术",
// "pentacle.occultism.summon_djinni": "欧菲克斯的呼唤",
// "pentacle.occultism.summon_foliot": "阿维亚之环",
// "pentacle.occultism.summon_wild_afrit": "阿巴拉斯开环召唤术",
// "pentacle.occultism.summon_marid": "法特玛极效引诱",
// "pentacle.occultism.summon_wild_greater_spirit": "奥索林的无约束呼唤",
onEvent('recipes', event => {
	event.custom(
		{
			"type": "occultism:ritual",
			"ritual_type": "occultism:summon",
			"activation_item": {
			  "item": "kubejs:shuru"
			},
			"pentacle_id": "occultism:possess_djinni",
			"duration": 30,
			"entity_to_sacrifice": {
			  "tag": "occultism:humans",
			  "display_name":"custom.kubejs.demo"
			},
			"entity_to_summon": "minecraft:pig",
			"ritual_dummy": {
			  "item": "kubejs:shuchu"
			},
			"ingredients": [
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuin"
			  },
			  {
				"item": "kubejs:shuin"
			  },
			  {
				"item": "kubejs:shuin"
			  },
			  {
				"item": "kubejs:shuin"
			  }
			],
			"result": {
			  "item": "occultism:jei_dummy/none"
			}
		  }
	)
})

onEvent('recipes', event => {
	event.custom(
		{
			"type": "occultism:ritual",
			"ritual_type": "occultism:craft",
			"activation_item": {
			  "item": "kubejs:shuru"
			},
			"pentacle_id": "occultism:craft_djinni",
			"duration": 240,
			"ritual_dummy": {
			  "item": "kubejs:shuin"
			},
			"ingredients": [
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  }
			],
			"result": {
			  "item": "kubejs:shuchu"
			}
		  }
	)
})