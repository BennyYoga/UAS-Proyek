<template>
    <div class="side-bar">
        <BeforeLoginBtn></BeforeLoginBtn>
        <SpeechBtn :articleData="articleData"></SpeechBtn>
        <div class="circle img-container bg-grey" style="width: 75px; height:75px">
            <img src="../assets/empty-pic.png" alt="" />
        </div>
        <div class=" flex-item">
            <h6 class="card-title d-flex justify-content-between mt-4">
                <h5 class="card-subtitle mb-2">{{ userData.nama_lengkap }}</h5>
                <span style="float: right">
                    <img src="../assets/report.svg" alt="" />
                </span>
            </h6>
            <h6 class="d-flex justify-content-start text-secondary">
                {{ userData.username }}
            </h6>
            <p class="card-text mt-3 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                veroquos, saepe atque quae nostrum numquam sequi quis minus
            </p>
        </div>
        <div class="row text-center">
            <div class="col-md-6 p-0 subscription">
                <p class="m-0">10</p>
                <p class="m-0">Subscription</p>
            </div>
            <div class="col-md-6 p-0 subscriber">
                <p class="m-0">15k</p>
                <p class="m-0">Subscriber</p>
            </div>
        </div>
        <div class="row my-3">
            <button class="btn btn-tosca btn-45 text-center ms-3 mt-2" type="button" style="height: 30px;">
                Unsubscribe
            </button>
        </div>
        <SmCards></SmCards>
    </div>
</template>

<script>
import BeforeLoginBtn from './BeforeLoginBtn.vue'
import SpeechBtn from './TxtSpeechBtn.vue'
//import FilterBar from './FilterBar.vue'
//import CategoriesList from './CategoriesList.vue'
import SmCards from './SmCards.vue'
//import TagsContainer from './TagsContainer.vue'

export default {
    components: {
        BeforeLoginBtn,
        SmCards,
        SpeechBtn
        /*
        SearchBar,
        FilterBar,
        CategoriesList,
        TagsContainer
        */
    },
    props: ['articleData', 'userData']
}
</script>

<style scoped>
.gambar {
    margin-top: 24px;
}

.side-bar {
    position: relative;
    top: 20px;
    width: 75%;
    margin: auto;
}

.btn {
    padding: 3px 2px;
    border-radius: 15px;
    font-size: 12px;
}

.btn-tosca {
    background: #309C9F;
    border-color: #309C9F;
    color: white;
}

.btn-45 {
    width: 45%;
}

.btn-tosca:active {
    border-color: #309C9F;
}

.btn-tosca:hover {
    color: black;
    border-color: black;
    background-color: white;
}

.circle {
    border-radius: 50%;
}

.bg-grey {
    background-color: rgba(217, 217, 217, 1);
}

.img-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.subscription {
    border-right: solid rgba(217, 217, 217, 1) 1px;
}

.subscriber {
    border-left: solid rgba(217, 217, 217, 1) 1px;
}
</style>