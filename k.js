const Bit =document.getElementById("Bit");
    Bit.addEventListener("input",function (){
        Byte.value = Bit.value / 8
        KiloByte.value =Bit.value / 8 / 1024
    })
    const Byte =document.getElementById("Byte");
    Byte.addEventListener("input",function (){
        Bit.value = Byte.value * 8
        KiloByte.value =Byte.value / 1024
    })
    const KiloByte =document.getElementById("KiloByte");
    KiloByte.addEventListener("input",function (){
        Bit.value = KiloByte.value * 8 *1024
        Byte.value = KiloByte.value * 1024
    })