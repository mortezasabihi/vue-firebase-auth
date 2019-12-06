import { getUser } from "@/services/jwt.service";

export default {
  user: getUser(),
  isLoggedIn: false,
  loading: false,
  errors: null
};
