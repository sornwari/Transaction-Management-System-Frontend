import type { LoginModel } from "@/model/authModel";
import type { SearchDashboardModel } from "@/model/dashboardModel";
import type { CreateUserModel, SearchUserModel, UpdateUserViewModel } from "@/model/userModel";
import { axiosClient } from "@/utils/axiosClient";

class DashboardService {
  searchDashboards(body: SearchDashboardModel) {
    return axiosClient.post(`/Dashboard/searchDashboard`, body);
  }
}
export default new DashboardService();
