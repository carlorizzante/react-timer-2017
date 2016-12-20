const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const Clock = require("../../components/Clock");

describe("Clock", () => {
  it("should exist", () => {
    expect(Clock).toExist();
  });

  describe("render", () => {
    it("should render clock component", () => {
      const clock = TestUtils.renderIntoDocument(<Clock time={65}/>);
      const $el = $(ReactDOM.findDOMNode(clock));
      const time = $el.find(".clock-content").text();
      expect(time).toBeA("string");
      expect(time).toBe("01:05");
    });

    it("should set property time to 0 if not value", () => {
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      expect(clock.props.time).toBe(0);
    });
  });

  describe("formatTime", () => {
    it("should return correct format mm:ss", () => {
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      expect(clock.formatTime(61)).toBe("01:01");
      expect(clock.formatTime(125)).toBe("02:05");
      expect(clock.formatTime(54)).toBe("00:54");
      expect(clock.formatTime(607)).toBe("10:07");
      expect(clock.formatTime(814)).toBe("13:34");
    });
  });
});
