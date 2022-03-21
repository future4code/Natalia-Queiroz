import axios from "axios"
import { baseURL } from "./baseURL"

const news = {
  title: "Putin tá putin",
  content: "Putin manda tropas russa invadir a Ucrânia coma 'justificativa' que: 'Nem meu pai me dizia não, imagina um país que é do tamanho da meu quintal'",
  date: Date.now()
}

const createNews = (news: any): Promise<string> => {
    return axios
    .put(`${baseURL}/news`, ())
}

const getAllSubscribers = () => {}

const getSubscribersIds = (subscribers: any) => {}

const notifyAllSubscribers = () => {}

createNews(news)                // criar noticia
  .then(getAllSubscribers)      // buscar assinantes
  .then(getSubscribersIds)      // extrair id's (etapa síncrona)
  .then(notifyAllSubscribers)   // enviar notificacoes