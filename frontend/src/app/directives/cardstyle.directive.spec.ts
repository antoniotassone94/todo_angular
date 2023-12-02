import {ElementRef} from "@angular/core";
import {CardStyleDirective} from "./cardstyle.directive";

describe("CardStyleDirective", () => {
  it("should create an instance", () => {
    const directive = new CardStyleDirective(new ElementRef(undefined));
    expect(directive).toBeTruthy();
  });
});
