const form = document.getElementById("form")

const render = () => {
  const garage = getGarage()
  garage.map((cars) => createSectionCars(cars))
}
const carros = []
const createSectionCars = ({ modeloCarro, placaCarro, horarioEntrada }) => {
  const divRow = document.createElement("div")
  divRow.classList.add("row")
  divRow.innerHTML = `
              <div class="column">${modeloCarro}</div>
              <div class="column">${placaCarro}</div>
            <div class="column">${horarioEntrada}</div>
              <div class="column">
                <button class="delete"><i class="fa-solid fa-trash"></i></button>
              </div>
            `
  document.querySelector(".container").appendChild(divRow)
  carros.push(divRow)
  console.log(carros)
}
const getGarage = () =>
  localStorage.garage ? JSON.parse(localStorage.garage) : []
render()
function cadastrarVeiculo(e) {
  e.preventDefault()
  const modeloCarro = document.getElementById("modeloCarro").value
  const placaCarro = document.getElementById("placaCarro").value
  console.log(modeloCarro)
  console.log(placaCarro)
  if (modeloCarro == "" || placaCarro == "") {
    alert("Preencha todos os campos")
    return
  }

  const date = new Date()
  const car = {
    modeloCarro: modeloCarro,
    placaCarro: placaCarro,
    horarioEntrada: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  }
  console.log(car)
  const garage = getGarage()
  garage.push(car)
  createSectionCars(car)
  localStorage.garage = JSON.stringify(garage)

  modeloCarro.value = " "
  placaCarro.value = " "
}

form.addEventListener("submit", cadastrarVeiculo)
