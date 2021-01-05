Hooks.once("init", () => {
  game.settings.register("Flirtatious-Foundry", "Description", {
    name: "Flirtatious Foundry",
    hint: "This module is a compilation of information Ive gathered from official and non offical sources.  All copyrights are reserved by their respective owners.",
    scope: "world",
	 config: true,
	 default: true,
	 type: Boolean
  });
});