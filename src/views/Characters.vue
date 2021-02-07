<template>
  <ContentBlock>
    <CharacterBlock />
  </ContentBlock>
</template>

<script>
import CharacterBlock from '@/components/CharacterBlock'
import ContentBlock from '@/components/ContentBlock'

export default {
  name: 'Characters',
  components: {
    CharacterBlock,
    ContentBlock,
  },
}
</script>
