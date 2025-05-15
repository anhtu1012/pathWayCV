import { ValidateBaseClass } from "@/apis/ddd/validate.class.base";

import {
  PermisionRequestGetItem,
  PermisionRequestGetSchema,
  UserRequestLoginItem,
  UserRequestLoginSchema,
  UserRequestRegisterItem,
  UserRequestRegisterSchema,
} from "@/dtos/auth/auth.request.dto";
import {
  PermisionResponseGetItem,
  UserResponseLoginItem,
  UserResponseLogoutItem,
  UserResponseRegisterItem,
} from "@/dtos/auth/auth.response.dto";
import { AxiosService } from "../../apis/axios.base";

class AuthServicesBase extends AxiosService {
  protected readonly basePath = "/sa";

  async login(formData: UserRequestLoginItem): Promise<UserResponseLoginItem> {
    await ValidateBaseClass.validate(formData, UserRequestLoginSchema);
    return this.post(`${this.basePath}/user/login`, formData);
  }

  async register(
    formData: UserRequestRegisterItem
  ): Promise<UserResponseRegisterItem> {
    await ValidateBaseClass.validate(formData, UserRequestRegisterSchema);
    return this.post(`${this.basePath}/user/register`, formData);
  }

  async logout(): Promise<UserResponseLogoutItem> {
    return this.post(`${this.basePath}/user/logout`, {});
  }

  async getPermision(
    formData: PermisionRequestGetItem
  ): Promise<PermisionResponseGetItem> {
    await ValidateBaseClass.validate(formData, PermisionRequestGetSchema);
    return this.post(`${this.basePath}/group/get_permission`, formData);
  }
}

const AuthServices = new AuthServicesBase();
export default AuthServices;
