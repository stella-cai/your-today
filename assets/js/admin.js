function showAdminTab(tabType) {
    if (tabType == 5) {
        document.getElementById("all-account-section").style.display = "none";
        document.getElementById("user-feedback-section").style.display = "block";
    }

    else if (tabType == 4) {
        document.getElementById("user-feedback-section").style.display = "none";
        document.getElementById("all-account-section").style.display = "block";
    }
}

