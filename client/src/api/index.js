import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertLampada = payload => api.post(`/lampada`, payload)
export const getAllLampadas = () => api.get(`/lampadas`)
export const updateLampadaById = (id, payload) => api.put(`/lampada/${id}`, payload)
export const deleteLampadaById = id => api.delete(`/lampada/${id}`)
export const getLampadaById = id => api.get(`/lampada/${id}`)

const apis = {
    insertLampada,
    getAllLampadas,
    updateLampadaById,
    deleteLampadaById,
    getLampadaById,
}

export default apis
