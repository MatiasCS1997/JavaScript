let btnCalcular = document.querySelector("#get-total");
btnCalcular.addEventListener("click", () => {
  let inputCantidad = document.querySelector("#cantidad").value;
  let txtmonto = document.querySelector("#monto");
  txtmonto.innerHTML = inputCantidad;
});
