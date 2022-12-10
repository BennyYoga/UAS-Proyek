<template >
    <nav class="main-nav--bg">
        <div class="container main-nav">
            <div class="main-nav-start">
            <h2>Review</h2>
            </div>
            <div class="main-nav-end">
            <button class="sidebar-toggle transparent-btn" title="Menu" type="button">
                <span class="sr-only">Toggle menu</span>
                <span class="icon menu-toggle--gray" aria-hidden="true"></span>
            </button>
            <div class="nav-user-wrapper">
                <button href="##" class="nav-user-btn dropdown-btn" title="My profile" type="button">
                <span class="sr-only">My profile</span>
                <span class="nav-user-img">
                    <picture><source srcset="assets/img/avatar/profile 1.webp" type="image/webp"><img src="assets/img/avatar/profile 1.png" alt="User name"></picture>
                </span>
                </button>
                <ul class="users-item-dropdown nav-user-dropdown dropdown">
                <li><a href="##">
                    <i data-feather="user" aria-hidden="true"></i>
                    <span>Profile</span>
                    </a></li>
                <li><a href="##">
                    <i data-feather="settings" aria-hidden="true"></i>
                    <span>Account settings</span>
                    </a></li>
                <li><a class="danger" href="##">
                    <i data-feather="log-out" aria-hidden="true"></i>
                    <span>Log out</span>
                    </a></li>
                </ul>
            </div>
            </div>
            
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style >
    
</style>
