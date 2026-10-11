function addRecommendation() {
    let recommendationText = document.getElementById("new_recommendation");

    if (recommendationText.value != null && recommendationText.value.trim() !== "") {
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = "<p>“" + recommendationText.value + "”</p><span>- Anonymous</span>";

        document.getElementById("all_recommendations").appendChild(element);
        recommendationText.value = "";
        showPopup(true);
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById("popup").style.display = "block";
    } else {
        document.getElementById("popup").style.display = "none";
    }
}