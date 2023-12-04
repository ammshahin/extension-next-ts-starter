import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useUser = ()=> {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['test'],
        queryFn: getDummyData
    })
    return {data, isLoading, isError, error};
}

const getDummyData = async()=> {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users",
    {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return data;
}