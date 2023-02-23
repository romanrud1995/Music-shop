import axios from "axios";
import { REQUEST_FROM_API, END_MUSICS_REQUEST_API, CHANGE_PAGE_OF_MUSICS, SEARCH_MUSICS } from "../actionTypes";


const musicsRequest = () => ({
    type: REQUEST_FROM_API,
});

const endMusicsRequest = receivedResponse => ({
    type: END_MUSICS_REQUEST_API,
    musics: receivedResponse  ? receivedResponse : [],
});

export function getMusicsFromAPI() {
    return dispatch => {
        dispatch(musicsRequest());
        return axios.get("http://localhost:4000/musics")
            .then((res) => dispatch(endMusicsRequest(res.data)))
            .catch(error => {
                console.log(error)
            });
    };
    
}

export const changePageOfMusics = iNumberOfPage => ({
    type: CHANGE_PAGE_OF_MUSICS,
    page: iNumberOfPage ? iNumberOfPage : 1,
});

export const searchMusics = stringToSearch => ({
    type: SEARCH_MUSICS,
    stringToSearch: stringToSearch ? stringToSearch : "",
});