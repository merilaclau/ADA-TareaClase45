/***********************************************
* Crear un objeto "receta" que tenga una lista 
* de ingredientes con su cantidad, y un 
* metodo que muestre un texto de 
* las cantidades. Por ejemplo:
* - La receta <nombre> lleva 2 tazas de harina,
* 5 gramos de levadura, etc...
*/

// VERSIÓN CON REDUCE + ARRAY DE ARRAYS
const recipe = {
    name: "budín vegano de banana",
    ingredientList: [["harina leudante","2 tazas"],["agua","1/3 taza"],["azúcar","1 taza"],["aceite","2/3 taza"],["bananas","2 unidades"]],
    get recipeText () {
        let recipeDescription = this.ingredientList.reduce((description, ingredientItem) => description += `${ingredientItem[1]} de ${ingredientItem[0]}, `, "");
        let finalDescription = recipeDescription.substr(0, recipeDescription.length - 2) + ".";
        console.log(`La receta de ${this.name} es ${finalDescription}`);
    }
}

// VERSIÓN CON REDUCE + ARRAY DE OBJETOS
const recipe = {
    name: "budín vegano de banana",
    ingredientList: [
        {ingredient: "harina leudante",quantity: "2 tazas"},
        {ingredient: "agua", quantity: "1/3 taza"},
        {ingredient: "azúcar", quantity: "1 taza"},
        {ingredient: "aceite", quantity: "2/3 taza"},
        {ingredient: "bananas", quantity: "2 unidades"}
    ],
    get recipeText () {
        let recipeDescription = this.ingredientList.reduce((description, ingredientItem) => description += `${ingredientItem.quantity} de ${ingredientItem.ingredient}, `, "");
        let finalDescription = recipeDescription.substr(0, recipeDescription.length - 2) + ".";
        console.log(`La receta de ${this.name} es ${finalDescription}`);
    }
}

// VERSIÓN CON FOR EACH EN CLASE
const receta = {
    nombre: 'pancakes',
    ingredientes: [
        {cantidad: '2', ingrediente: 'huevos'},
        {cantidad: 'una taza', ingrediente: 'harina'},
        {cantidad: 'una taza', ingrediente: 'leche'}
    ],
    get receta() {
        let texto = `La receta de ${this.nombre} es: `;
        this.ingredientes.forEach(ingrediente => texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}, `);
        const textoFinal = texto.substr(0, texto.length - 2) + '.';
        return textoFinal;
    }
};
