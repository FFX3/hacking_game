<script>
	import Contacts from "./Contacts.svelte";
	import MessageFeed from "./MessageFeed.svelte";
	import Prompt from "./Prompt.svelte";
</script>

<div class="flex flex-row h-full">
    <div class="h-full bg-surface-500/60 grid grid-rows-[auto_1fr_auto]">
        <div class="bg-surface-500/30 p-4">(search)</div>
        <div class="h-full grow">
            <Contacts />
        </div>
    </div>
    <div class="h-full flex-1 grid grid-rows-[1fr_auto]">
        <div class="bg-surface-500/30 p-4 overflow-y-auto"><MessageFeed /></div>
        <div class="bg-surface-500/30 p-4"><Prompt /></div>
    </div>
</div>
					