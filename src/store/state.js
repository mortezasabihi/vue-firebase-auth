import { getUser } from "@/services/jwt.service";

export default {
  user: getUser(),
  loading: false,
  errors: null
};
