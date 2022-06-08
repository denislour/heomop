<script lang="ts">
	import type {Quote} from "$lib/repos/quotesRepo";

	export let quotes: Quote[];
</script>

<section>
	<ul>
		{#each quotes as { name }}
			<li>{name}</li>
		{/each}
	</ul>
</section>
