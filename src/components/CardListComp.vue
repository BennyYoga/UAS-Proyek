<template>
    <div>
        <CardCompVue />
        <div class="showmore">
            <button class="btn-showmore">Show More</button>
        </div>
    </div>
</template>
<script>
import CardCompVue from './CardComp.vue';
export default {
    name: 'ListCard',
    components: {
        CardCompVue
    },

}
</script>
<style>
.btn-showmore {
    padding: 9px 13px;
    border: 0px solid transparent;
    border-radius: 15px;
    background-color: #309C9F;
    margin: 0px 0px 90px 950px;
}

.btn-showmore:hover {
    padding: 11px 16px;
    border-color: #000000;
    border: 1px solid #309C9F;
    border-radius: 15px;
    margin: 0px 0px 90px 948px;
    background-color: transparent;
}
</style>