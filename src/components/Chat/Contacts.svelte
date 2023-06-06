<script lang="ts">
    type contact = {
        username: string
    }
    const contacts: contact[] = [
        { username: 'Boko' },
        { username: 'DragonMysterieux' },
        { username: 'FFX3' },
    ]
</script>
<div>
    {#each contacts as contact}
        <div class="w-full grid grid-cols-[auto_1fr_auto] bg-surface-500/40  overflow-y-auto">
            <div class="p-4">(o7)</div>
            <div class="p-4">{contact.username}</div>
            <div class="p-4">(*)</div>
        </div>
    {/each}
</div>