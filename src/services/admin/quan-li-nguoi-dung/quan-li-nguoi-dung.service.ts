/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosService } from "../../../apis/axios.base";

class QuanlyNguoiDungServicesBase extends AxiosService {
  protected readonly basePath = "/customers";
  async getAllUser(): Promise<any> {
    return this.get(`${this.basePath}/list`);
  }
}

const QuanlyNguoiDungServices = new QuanlyNguoiDungServicesBase();
export default QuanlyNguoiDungServices;
