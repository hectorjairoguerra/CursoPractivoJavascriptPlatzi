const precioOriginal = 120;
const descuento = 18;

function calcularPrecionConDescuento(precioOriginal, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precioOriginal * porcentajePrecioConDescuento / 100
    return precioConDescuento;    
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    // const inputDiscount = document.getElementById("InputDiscount");
    // const discountValue = inputDiscount.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const userCouponValue = inputCoupon.value;

    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];

    const isCouponValueValid = function (coupon) {
        return coupon.name === userCouponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + userCouponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        precioConDescuento = calcularPrecionConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText="El precio con descuento es $" + precioConDescuento;
    }        
}
    // const priceWithDiscount = calcularPrecionConDescuento(priceValue, discountValue);
    // 
