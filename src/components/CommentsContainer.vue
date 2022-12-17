<template>
    <div class="container">
        <div class="d-flex justify-content-start mt-5">
            <p class="fs-6 fw-bolder">Comments</p>
            <p class="fs-6 fw-bolder">(</p>
            <p class="fs-6 fw-bolder"></p>
            <p class="fs-6 fw-bolder">)</p>
        </div>
        <div class="input-group mb-3 boxinput">
            <span class="input-group-text left-comment px-1 rounded-0"></span>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="write something..." />
                <label for="floatingInputGroup1">write something...</label>
            </div>
        </div>
        <!-- comments -->
        <div class="row">
            <div class="d-flex align-items-center py-3 px-3 mt-2">
                <div class="image-replay d-inline-flex align-items-center">
                    <img class="mx-auto d-block w-auto" src="../assets/empty-pic.png" alt="" />
                </div>
                <div class="px-3">
                    <p class="mb-0 fw-bolder">Someone</p>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet,consectur adispiscing elit. Amet,
                        vierra mauris sociis velit egetnon
                    </p>
                    <button type="button" class="btn btn-link text-decoration-none p-0 text-dark">
                        Reply
                    </button>
                </div>
            </div>
            <!-- reply -->
            <div class="d-flex align-items-center py-3 reply-line">
                <div class="image-replay d-inline-flex align-items-center">
                    <img class="mx-auto d-block w-auto" src="../assets/empty-pic.png" alt="" />
                </div>
                <div class="px-3 comment-reply">
                    <p class="mb-0 fw-bolder">Someone</p>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet,consectur adispiscing elit. Amet,
                        vierra mauris sociis velit egetnon
                    </p>
                    <button type="button" class="btn btn-link text-decoration-none p-0 text-dark">
                        Reply
                    </button>
                    <hr class="hr" />
                </div>
            </div>
            <div class="d-flex align-items-center py-3 reply-line">
                <div class="image-replay d-inline-flex align-items-center">
                    <img class="mx-auto d-block w-auto" src="../assets/empty-pic.png" alt="" />
                </div>
                <div class="px-3 comment-reply">
                    <p class="mb-0 fw-bolder">Someone</p>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet,consectur adispiscing elit. Amet,
                        vierra mauris sociis velit egetnon
                    </p>
                    <button type="button" class="btn btn-link text-decoration-none p-0 text-dark">
                        Reply
                    </button>
                    <hr class="hr" />
                </div>
            </div>
            <div class="row mx-5">
                <div class="align-items-center more-replies py-4 mb-3">
                    <a href="" class="text-decoration-none">Show More Replies</a>
                </div>
            </div>
            <div class="d-flex align-items-center py-3 px-3">
                <div class="image-replay d-inline-flex align-items-center">
                    <img class="mx-auto d-block w-auto" src="../assets/empty-pic.png" alt="" />
                </div>
                <div class="px-3">
                    <p class="mb-0 fw-bolder">Someone</p>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet,consectur adispiscing elit. Amet,
                        vierra mauris sociis velit egetnon sectur adispiscing elit. Amet,
                        vierra mau...
                    </p>
                    <a href="" class="text-decoration-none">Read More...</a>
                    <div>
                        <button type="button" class="btn btn-link text-decoration-none p-0 text-dark mt-1">
                            Reply
                        </button>
                    </div>
                    <hr class="hr" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.hr {
    margin-top: 16px;
    margin-bottom: 0;
}

.image-replay {
    width: 45px;
    height: 45px;
    background-color: #ced4da;
    border-radius: 50%;
}

.boxinput {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.left-comment {
    background-color: #309c9f;
}

.more-replies {
    color: none;
    margin-left: 15px;
    border-left: 1px solid rgb(182, 181, 181);
    /* border-bottom: 1px solid rgb(182, 181, 181); */
}

.reply-line {
    margin-left: 75px;
    border-left: 1px solid rgb(182, 181, 181);
}
</style>