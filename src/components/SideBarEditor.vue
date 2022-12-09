<template>
    <div>
        <aside class="sidebar">
            <div class="sidebar-start">
                <div class="sidebar-head">
                    <a href="/" class="logo-wrapper" title="Home">
                        <!-- <img src="assets/img/avatar/logo.png" class="imglogo" aria-hidden="true"/> -->
                    </a>
                    <div class="Logo-text">
                        <span class="Title-Geowisata" aria-hidden="true">GEOWISATA</span>
                    </div> 
                    <button class="sidebar-toggle transparent-btn" title="Menu" type="button">
                        <span class="sr-only">Toggle menu</span>
                        <span class="icon menu-toggle" aria-hidden="true"></span>
                    </button>
                </div>
                <div class="sidebar-body">
                    <ul class="sidebar-body-menu">
                        <li>
                            <a class="active" href="/"><span class="icon home" aria-hidden="true"></span>Home</a>
                        </li>
                        <li>
                            <a class="show-cat-btn" href="##">
                                <span class="icon document" aria-hidden="true"></span>Artikel
                                <span class="category__btn transparent-btn" title="Open list">
                                    <span class="sr-only">Open list</span>
                                    <span class="icon arrow-down" aria-hidden="true"></span>
                                </span>
                            </a>
                            <ul class="cat-sub-menu">
                                <li>
                                    <a href="#">Menunggu Review</a>
                                </li>
                                <li>
                                    <a href="#">Publish</a>
                                </li>
                                <li>
                                    <a href="#">Dikembalikan</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                 </div>
            </div>
            <div class="sidebar-footer">
             </div>
        </aside>
    </div>
</template>

<script>

export default {
    
}
</script>

<style>
    .sidebar-body-menu a {
    position: relative;
    padding: 8px 0;
    opacity: 0.6;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    }

    .sidebar{
        width: 200px;
    }

    ul li {
    display: inline-block;
    margin: 0.5rem;
}

.Title-Geowisata{
    font-weight: bolder;
    font-size: large;
    color: white;
}
</style>