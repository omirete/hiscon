function toggle_description(elem, id) {
    // alert("hello world!");
    var desc = document.getElementById(id);
    var sectionHeight = desc.scrollHeight;
    const expanded_class = "show_desctiption_expanded";

    if(desc.classList.contains(expanded_class)){
        desc.classList.remove(expanded_class);
        desc.style.removeProperty("max-height");
        elem.innerHTML = "...</br><span class='show_more_description'>Mostrar más.</span>"

    } else {
        desc.classList.add(expanded_class);
        desc.style.maxHeight = sectionHeight + "px";
        elem.innerHTML = "<span class='show_more_description'>Mostrar menos.</span>"
    }
}