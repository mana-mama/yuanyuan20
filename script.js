function toggleMenu() {
    let menu = document.getElementsByClassName("long-bar");

    if (menu[0].classList.length == 1) {
        menu[0].classList.toggle("active");
    } else {
        menu[0].classList.remove("active");
    }        
}

let top_button = document.getElementById("myBtn");

onscroll = () => {
    if (scrollY != 0) {
        top_button.style.display = "block"
    } else {
        top_button.style.display = "none"
    }
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let option_box = document.querySelector("select");
let options_list = document.querySelector("option");
let rec_prod = document.querySelector(".recommend-prod");
let all_prod = document.querySelector(".all-prod");
let box_prod = document.querySelector(".product-box");

function organizingJSON(data, i) {
    if (i == 0) {
        for (j = 0; j < data.length; j++) {
            var opt_name = data[j].name;
            var opt_value = data[j].no;
            generateOptionList(opt_name, opt_value);
        }
    } else if (i == 5) { 
        for (j = 0; j < data.length; j++) {
            var prod_value = i;
            var prod_pic_path = data[j].pic;
            var prod_link = data[j].link;
            generateRecProductsData(prod_value, prod_pic_path, prod_link);
        }
    } else if (data.length > 0) { 
        for (j = 0; j < data.length; j++) {
            var prod_value = i;
            var prod_pic_path = data[j].pic;
            var prod_link = data[j].link;
            generateProductsData(prod_value, prod_pic_path, prod_link);
        }
    }
}

function generateOptionList(opt_name, opt_value) {
    if (opt_value > 0) {
        const new_opt = options_list.cloneNode(true);
        option_box.appendChild(new_opt);

        new_opt.value = opt_value;
        new_opt.textContent = opt_name;
    }

}

function generateProductsData(prod_value, prod_pic_path, prod_link) {
    const new_box = box_prod.cloneNode(true);
    all_prod.appendChild(new_box);

    new_box.id = prod_value;
    new_box.href = prod_link;
    new_box.childNodes[1].src = "picture/" + prod_pic_path;
}

function generateRecProductsData(prod_value, prod_pic_path, prod_link) {
    const new_box = box_prod.cloneNode(true);
    rec_prod.appendChild(new_box);

    new_box.id = prod_value;
    new_box.href = prod_link;
    new_box.childNodes[1].src = "picture/" + prod_pic_path;
}

function deleteFirstBox() {
    box_prod.remove()
}

function getOption(selected_option) {
    updateProductsList(selected_option)
}

function updateProductsList(n) {
    let product_boxes = document.querySelectorAll(".all-prod .product-box");

    for (i = 0; i < product_boxes.length; i++) {
        product_boxes[i].style.display = "none";
    }

    if (n == "0") {
        for (i = 0; i < product_boxes.length; i++) {
            product_boxes[i].style.display = "block";
        }
    } else {
        for (i = 0; i < product_boxes.length; i++) {
            if (String(product_boxes[i].id) == n) {
                product_boxes[i].style.display = "block";
            }
        }
    }
}