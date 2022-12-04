<template>
    <div class="SideBar">
        <ul>
            <li>
                <SearchBar></SearchBar>
            </li>
            <li>
                <CategoriesListVue></CategoriesListVue>
            </li>
            <li>
                <TagsContainerVue></TagsContainerVue>
            </li>
        </ul>
    </div>
</template>
  
<script>
import SearchBar from './SearchBar.vue';
import CategoriesListVue from './CategoriesList.vue';
import TagsContainerVue from './TagsContainer.vue';

export default {
    components: {
        SearchBar,
        CategoriesListVue,
        TagsContainerVue
    }
}
</script>
  
<style>
.SideBar {
    position: absolute;
    z-index: 1;
    margin-left: 60px;
    top: 1700px;
}

.SideBar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 250px;
}

.SideBar li {
    display: block;
    width: 270px;
    text-decoration: none;
}
</style>