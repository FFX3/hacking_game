<script lang="ts">
    let messageFeed = [
        {
            id: 0,
            host: true,
            avatar: 48,
            name: 'Jane',
            timestamp: 'Yesterday @ 2:30pm',
            message: 'Some message text.',
            color: 'variant-soft-primary'
        },
        {
            id: 1,
            host: false,
            avatar: 14,
            name: 'Michael',
            timestamp: 'Yesterday @ 2:45pm',
            message: 'Some message text.',
            color: 'variant-soft-primary'
        }
    ];
</script>

<section class="w-full p-4 overflow-y-auto space-y-4">
	{#each messageFeed as bubble, i}
		{#if bubble.host === true}
			<!-- Host Message Bubble -->
            <div class="grid grid-cols-[auto_1fr] gap-2">
                <div>avatar</div>
                <div class="card p-4 variant-soft rounded-tl-none space-y-2">
                    <header class="flex justify-between items-center">
                        <p class="font-bold">{bubble.name}</p>
                        <small class="opacity-50">{bubble.timestamp}</small>
                    </header>
                    <p>{bubble.message}</p>
                </div>
            </div>
		{:else}
			<!-- Guest Message Bubble -->
            <div class="grid grid-cols-[1fr_auto] gap-2">
                <div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
                    <header class="flex justify-between items-center">
                        <p class="font-bold">{bubble.name}</p>
                        <small class="opacity-50">{bubble.timestamp}</small>
                    </header>
                    <p>{bubble.message}</p>
                </div>
                <div>avatar</div>
            </div>
		{/if}
	{/each}
</section>
					