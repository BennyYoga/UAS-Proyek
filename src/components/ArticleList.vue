<template>
    <div class="container article-list justify-content-start" style="width: fit-content">
        <ul>
            <li>
                <PublishedCard></PublishedCard>
            </li>
            <li>
                <PublishedCard></PublishedCard>
            </li>
            <li>
                <PublishedCard></PublishedCard>
            </li>
            <li>
                <PublishedCard></PublishedCard>
            </li>
            <li>
                <PublishedCard></PublishedCard>
            </li>
        </ul>
    </div>
</template>

<script>
import PublishedCard from './PublishedCard.vue'
import DraftCard from './DraftCard.vue'
import ArchivedCard from './ArchivedCard.vue'
import SavedCard from './SavedCard.vue'

export default {
    name: 'App',
    components: {
        PublishedCard,
        DraftCard,
        ArchivedCard,
        SavedCard
    }
}
</script>

<style>
.article-list {
    display: flex;
    margin-right: 30px;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>