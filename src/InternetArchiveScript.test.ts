//#region imports
import { describe, test } from "node:test"
import assert from "node:assert"
// initializes global state
import "@kaidelorenzo/grayjay-polyfill"

import { parseRuntime } from "./InternetArchiveScript.js"
//#endregion

describe("Internet Archive script module", { skip: false }, () => {
    test("test runtime parsing", { skip: false }, () => {
        assert.strictEqual(parseRuntime("01:02:03"), 3600 + 2 * 60 + 3)
        assert.strictEqual(parseRuntime("02:03"), 2 * 60 + 3)
        assert.strictEqual(parseRuntime("120"), 120 * 60)
        assert.strictEqual(parseRuntime(""), null)
    })
})
