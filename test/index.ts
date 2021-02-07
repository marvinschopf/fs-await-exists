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
