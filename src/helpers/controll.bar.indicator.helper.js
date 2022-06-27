export const controlIndicator = () => {
    let CONTAINER_PADDING_HALF = "7em";

    let nav = document.getElementById("nav");
    let pointer = document.getElementById("pointer");
    let links = nav.getElementsByClassName("barItem");

    pointer.style.width = "calc(100% /" + links.length + " - " + CONTAINER_PADDING_HALF + ")"

    for (let i = 0; i < links.length; i++) {
        let current = links[i];
        current.dataset.order = i * 160 + "%";
        current.addEventListener("click", movePointer);
    }


    function movePointer(e) {
        let order = e.currentTarget.dataset.order;
        pointer.style.transform = "translate3d(" + order + ",0,0)"
    }
}