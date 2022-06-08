<script context="module" lang="ts">
	import type {Load} from "@sveltejs/kit";
	export const load: Load = async ({fetch}) => {
		const url = "/quotes?limit=3";
		const headers = new Headers({
			Accept: "application/json",
		});
		const response = await fetch(url, {headers});
		if (response.status !== 200 || !response.ok) {
			return {status: response.status};
		}
		const {quotes} = await response.json();
		return {
			status: 200,
			props: {quotes},
		};
	};
</script>

<script lang="ts">
	import Biglink from "$lib/components/buttons/Biglink.svelte";
	import Hero from "$lib/components/Hero/Hero.svelte";
	import QuoteCard from "$lib/components/QuoteCard.svelte";
	import type {Quote} from "$lib/repos/quotesRepo";
	import Header from "$lib/components/Header/Header.svelte";
	export let quotes: Quote[] = [];
</script>

<svelte:head>
	<title>Heo mop's Diary</title>
</svelte:head>

<main>
	<Hero />
	<section>
		<h2 class="text-2xl">Latest quote</h2>
		<ul
			class="flex max-w-prose flex-col gap-4 sm:grid sm:w-full sm:max-w-full sm:grid-cols-12"
		>
			{#each quotes as { emoji, name, description }}
				<li class="sm:col-span-6 xl:col-span-4">
					<QuoteCard {emoji} {name} {description} />
				</li>
			{/each}
		</ul>

		<p class="text-center">
			<Biglink href="/quotes" prefetch={true}>Read more!</Biglink>
		</p>
	</section>
</main>
