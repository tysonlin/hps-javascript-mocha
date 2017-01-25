describe('Can be configured', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
  });

  it('Display settings', function () {
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I switch to settings mode
    this.actionwords.iSwitchToSettingsMode();
    // Then displayed message is:
    this.actionwords.displayedMessageIs("Settings:\n - 1: water hardness\n - 2: grinder");
  });

  it('Default settings', function () {
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I switch to settings mode
    this.actionwords.iSwitchToSettingsMode();
    // Then settings should be: "| water hardness | 2      |
    // | grinder        | medium |"
    this.actionwords.settingsShouldBe("| water hardness | 2      |\n| grinder        | medium |");
  });
});
