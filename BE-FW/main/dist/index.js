"use strict";
/**
 * ==============================
 * LESSON: Decorators
 * ==============================
 * 1. Là một class được đóng gói
 * ==============================
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Frozen(Ctor) {
    Object.freeze(Ctor.prototype);
    console.log(`[Frozen] Applied to: ${Ctor.name}`);
    return Ctor;
}
let UserA = class UserA {
    constructor(name) {
        this.name = name;
    }
    hello() {
        return `Hello ${this.name}`;
    }
};
UserA = __decorate([
    Frozen
], UserA);
