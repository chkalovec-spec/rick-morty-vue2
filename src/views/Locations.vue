<template>
  <ContentBlock>
    <LocationBlock />
  </ContentBlock>
</template>

<script>
import LocationBlock from '@/components/LocationBlock'
import ContentBlock from '@/components/ContentBlock'

export default {
  name: 'Locations',
  components: {
    LocationBlock,
    ContentBlock,
  },
}
</script>
