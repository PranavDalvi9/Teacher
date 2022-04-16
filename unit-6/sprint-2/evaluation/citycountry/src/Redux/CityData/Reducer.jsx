import { LOADING, SUCCESS , ERROR, ADD_COUNTRY } from "./Action";

const initState = {
    error: "false",
    loading: "false",
    cityData: [],
    countryData: ["india"   ]
};

export const  CityDataReducer = (store = initState , {type,payload}) => {

    switch (type){
        case LOADING:
            return {...store,
                loading:true
            };

        case SUCCESS:
            return{
                ...store,
                error: false,
                loading:false
                // cityData: [],
                // countryData:[]
            }

        case ERROR:
            return {
                ...store,
                error:true
            }

        case ADD_COUNTRY:
            return{
                ...store,
                countryData: [...store.countryData, payload]
            }


            default:
                return store
    }
}