(function () {
    var menu = document.getElementById("mobileMenu");
    var btn = document.querySelector(".mobile-btn");
    if (!menu || !btn) return;

    function setOpen(open) {
        menu.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.setAttribute("aria-label", open ? "Închide meniul" : "Deschide meniul");
        document.body.classList.toggle("menu-open", open);
    }

    window.toggleMobileMenu = function () {
        setOpen(!menu.classList.contains("is-open"));
    };

    menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            setOpen(false);
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setOpen(false);
    });
})();
