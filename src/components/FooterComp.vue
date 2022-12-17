<template >
    <div class="footer">
        <div class="footer-menu">
            <ul>
                <li>
                    <a href="">Product</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Resources</a>
                </li>
                <li>
                    <a class="geowisata" href="">GEOWISATA.ID</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Support</a>
                </li>
            </ul>
        </div>

        <div class="divider">
        </div>

        <div class="social-media">
            <a href=""><img src="../assets/Ellipse.svg" alt=""></a>
            <a href=""><img src="../assets/Ellipse.svg" alt=""></a>
            <a href=""><img src="../assets/Ellipse.svg" alt=""></a>
            <a href=""><img src="../assets/Ellipse.svg" alt=""></a>
            <a href=""><img src="../assets/Ellipse.svg" alt=""></a>
        </div>

        <div class="copyright">
            <h4>© 2010-2020</h4>
            <h4>Privacy-Terms</h4>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style >
.footer {
    position: absolute;
    width: 100%;
    height: 417px;
    left: 0px;
    background: #309C9F;
}

.footer-menu {
    display: flex;
    justify-content: center;
}

ul {
    list-style: none;
}

ul li {
    display: inline-block;
    margin: 1rem;
}

ul li a {
    text-decoration: none;
    color: #F3F0EB;
}

.divider {
    border-bottom: 1.5px solid #F3F0EB;
    margin: 0 auto;
    max-width: 75%;
}

.social-media {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}

.social-media a {
    margin: 0 0 0 30px;
    padding: 0 0 0 30px;
}

.social-media a img {
    width: 50px;
}

.geowisata {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;

    color: #F3F0EB;
}

.copyright {
    display: flex;
    justify-content: center;
    margin: 50px 0 50px 0;
}

.copyright h4 {
    margin: 0 0 0 30px;
    padding: 0 0 0 30px;
    color: #F3F0EB;
}
</style>