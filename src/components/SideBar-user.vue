<template>
    <div class="side-bar">
        <BeforeLoginBtn></BeforeLoginBtn>
        <SearchBar></SearchBar>
        <FilterBar></FilterBar>
        <CategoriesList></CategoriesList>
        <SmCards></SmCards>
        <TagsContainer></TagsContainer>
    </div>
</template>

<script>
import BeforeLoginBtn from './BeforeLoginBtn.vue'
import SearchBar from './SearchBar.vue'
import FilterBar from './FilterBar.vue'
import CategoriesList from './CategoriesList.vue'
import SmCards from './SmCards.vue'
import TagsContainer from './TagsContainer.vue'
export default {
    components: {
        BeforeLoginBtn,
        SearchBar,
        FilterBar,
        CategoriesList,
        SmCards,
        TagsContainer
    }
}
</script>

<style>
.side-bar {
    position: relative;
    top: 20px;
    width: 75%;
    margin: auto;
}
</style>