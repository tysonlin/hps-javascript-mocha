describe('Can be configured', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
  });

  it('Display settings', function () {
    // Tags: priority:medium
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I switch to settings mode
    this.actionwords.iSwitchToSettingsMode();
    // Then displayed message is:
    this.actionwords.displayedMessageIs("Settings:\n - 1: water hardness\n - 2: grinder");
  });

  it('Default settings', function () {
    // Tags: priority:high
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I switch to settings mode
    this.actionwords.iSwitchToSettingsMode();
    // Then settings should be:
    this.actionwords.settingsShouldBe("| water hardness | 2      |\n| grinder        | medium |");
  });
});
