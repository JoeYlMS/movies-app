import { API, API_KEY} from "./constants";

export const generateUrl = path => `${API}${path}?api_key=${API_KEY}`
