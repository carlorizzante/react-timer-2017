const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const TimerStart = require("../../components/TimerStart");

describe("TimerStart", () => {
  it("should exist", () => {
    expect(TimerStart).toExist();
  });

  describe("render", () => {
    it("should render TimerStart component", () => {
      const timerstart = TestUtils.renderIntoDocument(<TimerStart/>);
      const $el = $(ReactDOM.findDOMNode(timerstart));
      const form_time = $el.find("#timer-form");
      const form_btn_start = $el.find("#form-btn-start");
      expect(form_time).toExist();
      expect(form_btn_start).toExist();
    });
  });

  describe("onStartTimer", () => {
    it("should start the timer", () => {
      const spy = expect.createSpy();
      const timerstart = TestUtils.renderIntoDocument(<TimerStart onStartTimer={spy}/>);
      const $el = $(ReactDOM.findDOMNode(timerstart));
      TestUtils.Simulate.submit($el.find("form")[0]); // find and submit first form element
      expect(spy).toHaveBeenCalled();
    });
  });
});
