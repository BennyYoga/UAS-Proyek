<template>
    <div class="container text-center d-block mt-4 mb-3">
        <div class="row">
            <div class="btn filter-bar">
                <span>
                    Filter
                    <a class="float-end" data-bs-toggle="collapse" data-bs-target="#collapseFilter"
                        aria-expanded="false" aria-controls="collapseFilter">
                        <img src="../assets/filter.svg" style="width:20px">
                    </a>
                </span>
                <div class="collapse" id="collapseFilter">
                    <div class="separator"></div>
                    <div class="card card-body">
                        <fieldset>
                            Sort by <br>
                            <input class="filter-arg" type="radio" id="sort-id">Date
                            <input class="filter-arg" type="radio" id="sort-id">Popular
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.filter-bar {
    border-radius: 15px;
    border-style: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #ECECEC;
    width: 100%;
    text-align: left;
}

.filter-bar:hover {
    border-style: none;
    background: #ECECEC;
}

.filter-bar:active {
    border-style: none;
    background: #ECECEC;
}

.filter-bar>span {
    padding-left: 20px;
}

.filter-bar>span>a {
    padding-right: 20px;
}

.card {
    margin: 10px 10px;
    padding: 0;
    background: #ECECEC;
    border-style: none;
}

.card-body>fieldset {
    padding-left: 10px;
}

.separator {
    margin: 10px auto;
    width: 85%;
    border-bottom: solid 1px black;
}

.collapse {
    height: 200px;
}

.filter-arg {
    margin: 10px 0 10px 3px;
}
</style>