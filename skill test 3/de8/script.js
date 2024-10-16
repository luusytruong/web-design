const btnBuys = Array.from(document.querySelectorAll(".prd-info button"));
const tbody = document.querySelector("table tbody");

btnBuys.map((btnBuy, index) => {
    btnBuy.addEventListener("click", () => {
        const parent = btnBuy.closest(".prd");
        const code = `prd${index}`;
        parent.classList.add("added", code);

        const src = parent.querySelector(".prd img").src;
        const name = parent.querySelector("p.prd-name").textContent.trim();
        const price = parseInt(
            parent.querySelector("p.prd-price").textContent.trim()
        );

        const compare = tbody.querySelector(`.prd-cart.${code}`);
        if (compare) {
            const quantityInput = compare.querySelector("input.prd-cart-quantity");
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            loadData();
        } else {
            const html = `
                    <td class="prd-cart-name">${name}</td>
                    <td>
                        <div class="quantity-area">
                            <i class="fa-solid fa-caret-up"></i>
                            <i class="fa-solid fa-caret-down"></i>
                            <input value="1" type="text" class="prd-cart-quantity">
                        </div>
                    </td>
                    <td class="prd-cart-price">${price}</td>
                    <td class="prd-cart-total">${price}</td>
                    <td>
                        <i class="fa-solid fa-xmark"></i>
                    </td>
            `;
            const newPrd = document.createElement("tr");
            newPrd.classList.add(`prd-cart`, `${code}`);
            newPrd.innerHTML = html;

            tbody.insertBefore(newPrd, tbody.lastElementChild);

            const btnDel = newPrd.querySelector(".fa-xmark");

            btnDel.addEventListener("click", () => {
                parent.classList.remove("added", code);
                btnDel.closest(".prd-cart").remove();
                loadData();
            });
        }
    });
});

function loadData() {
    let total = 0;
    const prds = Array.from(document.querySelectorAll("tr.prd-cart"));

    prds.map((prd) => {
        const quantity = parseInt(
            prd.querySelector("input.prd-cart-quantity").value
        );
        const price = parseInt(
            prd.querySelector("td.prd-cart-price").textContent.trim()
        );

        prd.querySelector("td.prd-cart-total").textContent = price * quantity;
        total += price * quantity;
    });

    tbody.querySelector("td.order-price.total").textContent = total;
}
loadData();
