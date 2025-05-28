import { AxiosService } from "../../apis/axios.base";

class AuthServicesBase extends AxiosService {
  protected readonly basePath = "/sa";
}

const AuthServices = new AuthServicesBase();
export default AuthServices;
