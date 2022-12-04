<template>

    <div class="card">
        <div class="card-body d-flex ">
            <img class="preview-pict" src="../assets/image.svg" alt="">
            <div class="flex-item">
                <h6 class="card-title">
                    <span>
                        <img src="../assets/creator.png" alt="">
                    </span>
                    Creator Name
                    <span style="float : right">
                        <img src="../assets/save.svg" alt="">
                        <img src="../assets/delete.svg" alt="">
                    </span>
                </h6>
                <h4 class="card-subtitle mb-2">Article Title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                    veroquos, saepe atque quae nostrum numquam sequi quis minus laboriosam, repellat, ipsum
                    voluptatem laudantium perspiciatis facilis. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                    Esse, nesciunt vitae nemo doloremque reprehenderit eaque quos numquam iste et quam dolores
                    totam,
                    modi doloribus assumenda delectus velit facilis vel accusamus.
                </p>
                <p href="#" class="card-info">
                    <span class="publish-date">
                        Okt 2016
                    </span>
                    <span class="category">
                        Category
                    </span>
                    <span class="icons">
                        <span>
                            <img src="../assets/views.svg" alt=""> 0
                        </span>
                        <span>
                            <img src="../assets/comment.svg" alt=""> 0
                        </span>

                    </span>
                </p>
            </div>
        </div>
    </div>

</template>

<style scoped>
a {
    color: black;
    text-decoration: none;
}

.card {
    z-index: 1;
    border-radius: 0;
    border: 0 0 1px 1px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px, rgba(0, 0, 0, 0.23) 0px 3px 6px 0px;
    margin: 0px 10px 0px 0px;
    background: rgba(255, 255, 255, 1);
    transition: 400ms;
    width: 950px;
    left: 490px;
}

.card:hover {
    scale: 1.03;
}

.card-body {
    height: 200px;
}

.card-text {
    max-height: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
}

.flex-item {
    margin-left: 30px;
}

.preview-pict {
    width: 120px;
    margin: 10px 25px;
}

.card-info {
    font-size: 14px;
}

.publish-date {
    font-size: 14px;

}

.category {
    margin-left: 25px;
    background-color: rgba(184, 184, 184, 1);
    ;
    padding: 0 12px;
    border-radius: 15px;
}

.icons {
    float: right;
    margin-right: 25px;
}

@media only screen and (max-width: 600px) {
    .preview-pict {
        width: 70px;
    }
}
</style>