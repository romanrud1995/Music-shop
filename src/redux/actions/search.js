import { SEARCH_MUSICS } from "../actionTypes";

export const searchMusics = stringToSearch => {

    return {

        type: SEARCH_MUSICS,
        stringToSearch: stringToSearch ? stringToSearch : "",


    }
};

