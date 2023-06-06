<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
    import 'xterm/css/xterm.css'
	import Terminal from '../components/Terminal/Terminal.svelte';
    let currentTile = 0
</script>

<AppShell>
	<svelte:fragment slot="header"><div class="text-center w-full flex justify-center p-4 bg-surface-800">Header</div></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">

        <AppRail class="variant-glass-primary bg-surface-300">
            <svelte:fragment slot="lead">
                <AppRailAnchor href="/" >(icon)</AppRailAnchor>
            </svelte:fragment>
            <!-- --- -->
            <AppRailTile bind:group={currentTile} name="tile-1" value={0}>
                <svelte:fragment slot="lead">(icon)</svelte:fragment>
                <span>Tile 1</span>
            </AppRailTile>
            <AppRailTile bind:group={currentTile} name="tile-2" value={1}>
                <svelte:fragment slot="lead">(icon)</svelte:fragment>
                <span>Tile 2</span>
            </AppRailTile>
            <AppRailTile bind:group={currentTile} name="tile-3" value={2}>
                <svelte:fragment slot="lead">(icon)</svelte:fragment>
                <span>Tile 3</span>
            </AppRailTile>
            <!-- --- -->
            <svelte:fragment slot="trail">
                <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
            </svelte:fragment>
        </AppRail>

    </svelte:fragment>
	<svelte:fragment slot="sidebarRight">
        <div class="p-5 h-full">
            <div class="card variant-glass-primary h-full p-5">
                Processes
            </div>
        </div>
    </svelte:fragment>
	<!-- Router Slot -->
    <div class="flex flex-row h-full">
        <div class="p-5 grow">
            <div class="card p-5 variant-glass-primary h-full">Main</div>
        </div>
        <div class="flex flex-col p-5 h-full">
            <div class="h-min">
                <Terminal />
            </div>
            <div class="mt-5 flex-1">
                <div class="card variant-glass-primary h-full p-5">
                    Nodes
                </div>
            </div>
        </div>
    </div>
	<!-- ---- / ---- -->
</AppShell>