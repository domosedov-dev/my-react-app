import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus cpmponent", () => {

  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status={"hello!"}/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("hello!")
  });

  test("One span", () => {
    const component = create(<ProfileStatus status={"hello!"}/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children.length).toBe(1);
  });

  test("SPan inner Text", () => {
    const component = create(<ProfileStatus status={"hello!"}/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("hello!");
  });

});
