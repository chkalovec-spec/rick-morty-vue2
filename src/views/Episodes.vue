<template>
  <ContentBlock>
    <EpisodeBlock />
  </ContentBlock>
</template>

<script>
import EpisodeBlock from '@/components/EpisodeBlock'
import ContentBlock from '@/components/ContentBlock'

export default {
  name: 'Episodes',
  components: {
    EpisodeBlock,
    ContentBlock,
  },
}
</script>
