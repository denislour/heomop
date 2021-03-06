/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
	import type {Theme} from "./types";

	interface Locals {
		theme: Theme | null;
	}

	interface Platform {}

	interface Session {
		theme: Theme | null;
	}

	interface Stuff {}
}

declare module "*.md" {
	export const attributes: {title: string; videoUrl: string; date: string};

	export const html: string;
}
