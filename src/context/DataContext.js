import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const getReducer = (state, action) => {
    switch (action.type) {
        case "design":
            return { design: action.payload };
        default:
            return state;
    }
}

const tryDesign = (dispatch) => async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
        const AuthStr = 'Bearer '.concat(token);
        // console.log(AuthStr);
        let design_res = null;
        try {
            const res = await trackerApi.get(`/Designs`, {
                headers: {
                    Authorization: AuthStr,
                }
            });
            // dispatch({ type: "signin", payload: res.data });
            // console.log(res.data);
            design_res = res;
            // await AsyncStorage.setItem("design", JSON.stringify(design_res));
        } catch (err) {
            console.log(err);
        }
        // console.log(global_res);
        dispatch({ type: "design", payload: design_res });
        // dispatch({ type: "signin", payload: {design: design_res.data} });
        navigate("TrackList");
    } else {
        navigate("Signup");
    }
}

export const { Provider, Context } = createDataContext(
    getReducer,
    { tryDesign },
    { design: null }
);