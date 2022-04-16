import { LOADING, SUCCESS , ERROR } from "./Action";

const initState = {
    error: "false",
    loading: "false",
    cityData: [],
    countryData: []
}

export CityDataReducer = (store = initState , {type,payload}) => {
    switch (type){
        case LOADING:
            return {...store,
                loading:true
            };

        case SUCCESS:
            return{
                ...store,
                error: false,
                loading:false,
                cityData: [],
                countryData:[]
            }

        case ERROR:
            return {
                ...store,
                error:true
            }


            default:
                return store
    }
}