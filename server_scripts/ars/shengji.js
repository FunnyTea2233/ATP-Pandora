//法术书模板
onEvent('recipes', event => {
	event.custom(
		{
			"type": "ars_nouveau:book_upgrade",
			"pattern":
			[
			  "   ",
			  " y ",
			  "   "
			],
			"key": {
			  "y": {
				"item": "ars_nouveau:spell_book"
			  }
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
			  },
			  {
				"item": "kubejs:shuru"
			  },
			  {
				"item": "kubejs:shuru"
			  }
			],
			"result":
			{
			  "item": "ars_nouveau:apprentice_spell_book"
			}
		  }
	)
})