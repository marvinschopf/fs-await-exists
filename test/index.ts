/**
 * fs-await-exists
 * Copyright (c) 2021 Marvin Schopf
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * @copyright 2021 Marvin Schopf
 * @license Apache-2.0
 * 
 */

import { randomBytes } from "crypto";
import { resolve } from "path";
import test from "ava";
import exists from "./../src/index";

test(resolve(__dirname, "..", ".gitignore"), async function (t) {
	t.is(await exists(resolve(__dirname, "..", ".gitignore")), true);
});

test(resolve(__dirname, ".gitignore"), async function (t) {
	t.is(await exists(resolve(__dirname, ".gitignore")), false);
});

test(resolve(__dirname, "..", "src"), async function (t) {
	t.is(await exists(resolve(__dirname, "..", "src")), true);
});

const randomString1: string = randomBytes(16).toString("hex");

test(resolve(__dirname, "..", randomString1), async function (t) {
	t.is(await exists(resolve(__dirname, "..", randomString1)), false);
});

test("/", async function (t) {
	t.is(await exists("/"), true);
});
