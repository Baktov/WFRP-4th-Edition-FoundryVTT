Hooks.on("updateCombat", (combat) => {
    if (game.user.isGM && combat.data.round != 0 && combat.turns && combat.data.active)
    {
      let turn = combat.turns.find(t => t.tokenId == combat.current.tokenId)
  
      if (game.settings.get("wfrp4e", "displayRoundSummary") && combat.current.turn == 0 && combat.current.round != 1)
        WFRP_Utility.displayRoundSummary(combat)

      if (game.settings.get("wfrp4e", "statusOnTurnStart"))
        WFRP_Utility.displayStatus(turn.token.id, combat.data.round);
  
      if (game.settings.get("wfrp4e", "focusOnTurnStart"))
      {
        canvas.tokens.get(turn.token.id).control();
        canvas.tokens.cycleTokens(1, true);  
      }
    }
  })