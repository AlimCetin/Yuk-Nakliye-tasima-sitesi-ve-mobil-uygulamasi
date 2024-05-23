/* eslint-disable import/no-anonymous-default-export */

// Axios
import axios from "axios";

// Persist Data Url
const PERSIST_URL = "http://localhost:8080/api/v1.0.0/carriers";
//Burada firmaların servis bağlantıları belirleniyor
class CarrierApi {

    // CREATE
    // @PostMapping("/create")
    companyFoodCreate(carrierDto) {
        return axios.post(`${PERSIST_URL}/create`, carrierDto, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carrierDto),
        })
    }
} //end class

export default  new CarrierApi()
