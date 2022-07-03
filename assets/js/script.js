let btnCalcular = document.querySelector("#get-total");
btnCalcular.addEventListener("click", () => {
  let inputCantidad = document.querySelector("#cantidad").value;
  let txtmonto = document.querySelector("#amount");
  txtmonto.innerHTML = inputCantidad;
  /*seleccion de color*/
  let colors = document.querySelector("#colors").value;
  document.querySelector("#selectedColor");
  document.getElementById("coloruser").style.color = colors;
  /*price*/
  let selectPrice = document.querySelector("#price").value;
  /*total*/
  let txtTotal = document.querySelector("#total");
  txtTotal.innerHTML = selectPrice * inputCantidad;
});
