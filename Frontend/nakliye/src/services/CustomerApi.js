/* eslint-disable import/no-anonymous-default-export */

// Axios
import axios from "axios";

// Persist Data Url
const PERSIST_URL = "http://localhost:8080/api/v1.0.0/customers";
//Burada müşterilerin servis bağlantıları belirleniyor
class CustomerApi {
    // SEARCH  customerId
    //@GetMapping("/search")
    customerFindBycustomerId(customerId) {
        return axios.get((`${PERSIST_URL}/search?customerId=${customerId}`));
    }
    // CREATE
    // @PostMapping("/create")
    customerRouteCreate(customerDto) {
        return axios.post(`${PERSIST_URL}/create`, customerDto, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerDto),
        })
    }

} //end class

export default  new CustomerApi()
