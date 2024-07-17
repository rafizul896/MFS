import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "./useAxiosCommon";

const useUser = () => {
    const id = localStorage.getItem('id');
    console.log(id)
    const { data: user, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/user/${id}`);
            return data
        }
    })
    return { user, isLoading }
};

export default useUser;