import { BACKEND_API_URL_CUVI } from "~/config/api.config.js";

export default function ({ $axios }, inject) {
  const api = $axios.create();

  // console.log('[axios]', BACKEND_API_CHAT_SUMA);
  api.setBaseURL(BACKEND_API_URL_CUVI);

  inject("api", api);
}
