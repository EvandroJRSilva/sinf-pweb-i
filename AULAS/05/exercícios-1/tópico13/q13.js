function q13(){
    pessoa = {
        "name": "Tiago de Sousa Moura",
        "weight": 70,
        "height": 1.7,
        "age": 19
    }

    for (attr in pessoa){
        if (attr != "name" && attr != "age") continue;

        console.log(`${attr}: ${pessoa[attr]}`);
    }
}