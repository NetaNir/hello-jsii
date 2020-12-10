


export class Hello {

  /** @internal */
  public _hidden = "not_here"
  public sayHello() {
    return 'hello!';
  }

  /**
   * @internal
   */
  public _hide() {
    return 'Im not here';
  }
}

/** @internal */
export interface _HiddenInterface {

}