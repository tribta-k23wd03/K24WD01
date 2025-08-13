/**
 * ==============================
 * LESSON: Decorators
 * ==============================
 * 1. Là một class được đóng gói
 * ==============================
 */

function Frozen<T extends { new (...arg: any[]): {} }>(Ctor: T) {
  Object.freeze(Ctor.prototype);
  console.log(`[Frozen] Applied to: ${Ctor.name}`);
  return Ctor;
}

@Frozen
class UserA {
  constructor(public name: string) {}
  hello() {
    return `Hello ${this.name}`;
  }
}
