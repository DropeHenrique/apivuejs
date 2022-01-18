import {http} from "./config";




export  default {
    listar:() => {
        return http.get("produto")

    },
    salvar:(produto) => {
        return http.post("produto/add",produto)
    },
    atualizar:(produto) => {
        return http.put("produto/{id}",produto)
    },
    apagar:(produto) => {
        return http.delete("produto/{id}", produto)
    }
}