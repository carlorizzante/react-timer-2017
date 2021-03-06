const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const Controls = require("../../components/Controls");

describe("Controls", () => {
  it("should exist", () => {
    expect(Controls).toExist();
  });

  const dummyFn = () => {};

  describe("render", () => {
    it("should render Controls component", () => {
      const controls = TestUtils.renderIntoDocument(<Controls timer_status="" updateStatus={dummyFn}/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      expect($el.find("#controls")).toExist();
    });

    it("should render pause btn if timer_status is run", () => {
      const controls = TestUtils.renderIntoDocument(<Controls timer_status="run" updateStatus={dummyFn}/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      expect($el.find("#control-pause-btn")).toExist();
      expect($el.find("button:contains(Pause)").length).toBe(1);
      expect($el.find("button").length).toBe(2);
    });

    it("should render start btn if timer_status is pause", () => {
      const controls = TestUtils.renderIntoDocument(<Controls timer_status="pause" updateStatus={dummyFn}/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      expect($el.find("#control-start-btn")).toExist();
      expect($el.find("button:contains(Start)").length).toBe(1);
      expect($el.find("button").length).toBe(2);
    });

    it("should always render clear btn", () => {
      const controls = TestUtils.renderIntoDocument(<Controls timer_status="" updateStatus={dummyFn}/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      expect($el.find("#control-clear-btn")).toExist();
      expect($el.find("button:contains(Clear)").length).toBe(1);
    });
  });
});
