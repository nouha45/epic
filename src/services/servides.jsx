import axios from 'axios'

 
class servides{
 updateUser(id, user) {
  return axios.put(`http://localhost:8029/users/${id}`, user, {
    headers: {
      "Content-Type": "application/json"
    }
  })
}

 findMonumentByName(name){
  return axios.get(`http://localhost:8029/monuments/name/`+name);
}

findMonumentByCity(city){
  return axios.get(`http://localhost:8029/monuments/city/`+city);
}
 

 registerUser(user) {
  return axios.post("http://localhost:8029/users/register", user, {
    headers: {
      "Content-Type": "application/json"
    }
  })
}
 

 addMonument(formData) {
  return axios.post("http://localhost:8029/monuments/save", formData)
}
 

 getMonumentsByDescription(description) {
  return axios.get(`http://localhost:8029/monuments/city/${description}`)
    .then(response => response.data)
}
 

 getMonumentsByName(name) {
  return axios.get(`http://localhost:8029/monuments/city/${name}`)
    .then(response => response.data)
}
 

 getMonumentsByCity(cityName) {
  return axios.get(`http://localhost:8029/monuments/city/${cityName}`)
    .then(response => response.data)
}
 

 getAllMonuments() {
  return axios.get("http://localhost:8029/monuments/all")
    .then(response => response.data)
}
 

 getAllNormalUsers() {
  return axios.get("http://localhost:8029/users/normalusers")
    .then(response => response.data)
}
 

 getAllFiles() {
  return axios.get("http://localhost:8029/files")
    .then(response => response.data)
}


 

 applyForUpgradation(id) {
  return axios.put(`http://localhost:8029/users/apply-for-upgradations/${id}`)
}


 

 getUpgradationRequests() {
  return axios.get("http://localhost:8029/users/upgradation-requests")
    .then(response => response.data)
}



 

 uploadVideo(formData) {
  return axios.post("http://localhost:8029/save", formData)
}
 

 upgradeToMonumentManager(id) {
  return axios.put(`http://localhost:8029/users/upgrade/monuments/manager/${id}`)
}
 

 deleteUser(id) {
  return axios.delete(`http://localhost:8029/users/${id}`)
}


 

 login(user) {
  return axios.post("http://localhost:8029/users/authenticate", user, {
    headers: {
      "Content-Type": "application/json"
    }
  })
}
}
export default new servides()
 


