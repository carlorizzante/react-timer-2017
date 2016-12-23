const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const Countdown = require("../../components/Countdown");

describe("Countdown", () => {
  it("should exist", () => {
    expect(Countdown).toExist();
  });

  describe("render", () => {
    it("should render Countdown component", () => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      const $el = $(ReactDOM.findDOMNode(countdown));
      expect($el.find("#countdown")).toExist();
    });
  });

  describe("handleSetCountdown", () => {
    it("should start timer with proper time", () => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      const time = 3;
      countdown.handleSetCountdown(time);
      expect(countdown.state.time).toBe(time);
      expect(countdown.state.timer_status).toBe("run");
    });

    it("should properly count down by seconds", done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      const time = 3;
      countdown.handleSetCountdown(time);
      setTimeout(() => {
        expect(countdown.state.time).toBe(time - 1);
        expect(countdown.state.timer_status).toBe("run");
        done();
      }, 1000);
    });

    it("should properly count to zero", done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      const time = 3;
      countdown.handleSetCountdown(time);
      setTimeout(() => {
        expect(countdown.state.time).toBe(0);
        done();
      }, 1010 * time);
    });

    it("should stop the count at zero", done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      const time = 3;
      countdown.handleSetCountdown(time);
      setTimeout(() => {
        expect(countdown.state.time).toBe(0);
        expect(countdown.state.timer_status).toBe("stop");
        done();
      }, 1010 * (time + 1));
    });
  });

  describe("handleStatusChange", () => {
    it("should pause the count", done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      const time = 3;
      countdown.handleSetCountdown(time);
      countdown.handleStatusChange("pause");
      setTimeout(() => {
        expect(countdown.state.time).toBe(time);
        expect(countdown.state.timer_status).toBe("pause");
        done();
      }, 0);
    });

    it("should restart the count", done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      const time = 3;
      countdown.handleSetCountdown(time);
      countdown.handleStatusChange("pause");
      countdown.handleStatusChange("run");
      setTimeout(() => {
        expect(countdown.state.time).toBe(time - 1);
        expect(countdown.state.timer_status).toBe("run");
        done();
      }, 1010);
    });

    it("should clear the count", done => {
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      const time = 3;
      countdown.handleSetCountdown(time);
      countdown.handleStatusChange("stop");
      setTimeout(() => {
        expect(countdown.state.time).toBe(0);
        expect(countdown.state.timer_status).toBe("stop");
        done();
      }, 0);
    });
  });
});
