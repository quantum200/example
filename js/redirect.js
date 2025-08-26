(function () {
    const viewportWidth = document.documentElement.clientWidth;
    const currentURL = window.location.href;

    const isOnMobile = currentURL.includes("/html/main_phone.html");
    const isOnDesktop = currentURL.includes("/index.html") || currentURL.endsWith("/");

    if (viewportWidth <= 425 && !isOnMobile) {
        console.log("🔁 Раннее перенаправление на мобильную версию");
        window.location.replace("/html/main_phone.html");
    } else if (viewportWidth > 425 && !isOnDesktop) {
        console.log("🔁 Раннее перенаправление на десктопную версию");
        window.location.replace("/index.html");
    } else {
        console.log("✅ Перенаправление не требуется");
    }
})();