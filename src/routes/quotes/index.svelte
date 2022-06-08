<script lang="ts">
	import PageHeading from "$lib/components/PageHeading.svelte";
	import QuoteCard from "$lib/components/QuoteCard.svelte";
	import type {Quote} from "$lib/repos/quotesRepo";

	export let quotes: Quote[];
</script>

<section>
	<PageHeading>Latest Heomop quote</PageHeading>
	<ul class="flex max-w-prose flex-col gap-4">
		{#each quotes as { emoji, name, description }}
			<QuoteCard {emoji} {name} {description} />
		{/each}
	</ul>
</section>
