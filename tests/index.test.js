"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
test('adds 1 + 2 to equal 3', () => {
    expect((0, index_1.add)(1, 2)).toBe(3);
});
