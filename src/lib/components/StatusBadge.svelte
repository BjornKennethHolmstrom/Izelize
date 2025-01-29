<!-- src/lib/components/StatusBadge.svelte -->
<script lang="ts">
  import type { ProjectStatus } from '$lib/types';
  import { language } from '$lib/stores';
  
  export let status: ProjectStatus;
  
  const statusConfig = {
    launched: {
      bg: "bg-green-500",
      text: {
        en: "Launched",
        sv: "Lanserad"
      }
    },
    "in-progress": {
      bg: "bg-yellow-500",
      text: {
        en: "In Progress",
        sv: "Pågående"
      }
    },
    upcoming: {
      bg: "bg-blue-500",
      text: {
        en: "Upcoming",
        sv: "Kommande"
      }
    }
  };
</script>

<span class="{statusConfig[status].bg} text-white text-sm px-3 py-1 rounded-full font-medium">
  {statusConfig[status].text[$language]}
</span>
