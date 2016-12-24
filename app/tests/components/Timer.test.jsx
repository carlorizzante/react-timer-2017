const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const Timer = require("../../components/Timer");

describe("Timer", () => {
  it("should exist", () => {
    expect(Timer).toExist();
  });

  describe("render", () => {
    it("should render Timer component", () => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      const $el = $(ReactDOM.findDOMNode(timer));
      expect($el.find("#timer")).toExist();
    });
  });

  describe("handleStartTimer", () => {
    it("should start timer from zero", () => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStartTimer();
      expect(timer.state.time).toBe(0);
      expect(timer.state.timer_status).toBe("run");
    });

    it("should properly count by seconds", done => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStartTimer();
      expect(timer.state.time).toBe(0);
      setTimeout(() => {
        expect(timer.state.time).toBe(1);
        expect(timer.state.timer_status).toBe("run");
        done();
      }, 1010);
    });
  });

  describe("handleStatusChange", () => {
    it("should pause the count", done => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      const time = 3;
      const delay = 2;
      timer.state.time = time;
      timer.handleStartTimer();
      timer.handleStatusChange("pause");
      setTimeout(() => {
        expect(timer.state.time).toBe(time);
        expect(timer.state.timer_status).toBe("pause");
        done();
      }, 1010 * delay);
    });

    it("should restart the count", done => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      const time = 3;
      const delay = 2;
      timer.state.time = time;
      timer.handleStartTimer();
      timer.handleStatusChange("pause");
      timer.handleStatusChange("run");
      setTimeout(() => {
        expect(timer.state.time).toBe(time + delay);
        expect(timer.state.timer_status).toBe("run");
        done();
      }, 1010 * delay);
    });

    it("should clear the count", done => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      const time = 3;
      const delay = 2
      timer.state.time = time;
      timer.handleStartTimer();
      timer.handleStatusChange("stop");
      setTimeout(() => {
        expect(timer.state.time).toBe(0);
        expect(timer.state.timer_status).toBe("stop");
        done();
      }, 1010 * delay);
    });
  });
});
