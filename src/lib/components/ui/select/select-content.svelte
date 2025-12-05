<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import { scale, fly } from "svelte/transition";

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 4,
		children,
		...restProps
	}: SelectPrimitive.ContentProps = $props();
</script>

<SelectPrimitive.Portal>
	<SelectPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(
			"relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
			className
		)}
		{...restProps}
	>
		<div
			class="p-1"
			in:scale={{ duration: 150, start: 0.95 }}
			out:fly={{ duration: 100, y: -4 }}
		>
			{@render children?.()}
		</div>
	</SelectPrimitive.Content>
</SelectPrimitive.Portal>
