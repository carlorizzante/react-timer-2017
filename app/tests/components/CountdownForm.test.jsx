const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const CountdownForm = require("../../components/CountdownForm");

describe("CountdownForm", () => {
  it("should exist", () => {
    expect(CountdownForm).toExist();
  });

  describe("render", () => {
    it("should render CountdownForm component", () => {
      const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={() => null}/>);
      const $el = $(ReactDOM.findDOMNode(countdownForm));
      const form_time = $el.find("#countdown-form");
      const form_btn_start = $el.find("#form-btn-start");
      expect(form_time).toExist();
      expect(form_btn_start).toExist();
    });
  });

  describe("onSetCountdown", () => {
    it("should call onSetCountdown with valid argument", () => {
      const spy = expect.createSpy();
      const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      const $el = $(ReactDOM.findDOMNode(countdownForm));
      countdownForm.refs.time.value = "109";
      TestUtils.Simulate.submit($el.find("form")[0]); // find and submit first form element
      expect(spy).toHaveBeenCalledWith(109);
    });

    it("should not call onSetCountdown if invalid argument", () => {
      const spy = expect.createSpy();
      const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      const $el = $(ReactDOM.findDOMNode(countdownForm));
      countdownForm.refs.time.value = "abc";
      TestUtils.Simulate.submit($el.find("form")[0]); // find and submit first form element
      expect(spy).toNotHaveBeenCalled();
    });

    it("should not call onSetCountdown if no argument", () => {
      const spy = expect.createSpy();
      const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      const $el = $(ReactDOM.findDOMNode(countdownForm));
      countdownForm.refs.time.value = "";
      TestUtils.Simulate.submit($el.find("form")[0]);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});
