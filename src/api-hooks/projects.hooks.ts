import axios from "axios"
import { useEffect, useState } from "react"

export const useAllProjects = (page:number = 1,per_page:number=10)=>{
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([]);
    const [hasNext,setHasNext] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/iconicsudip/repos`, {
                    params: { page, per_page }
                });
                const nexResponse = await axios.get(`https://api.github.com/users/iconicsudip/repos`, {
                    params: { page: page+1, per_page }
                })
                setHasNext(nexResponse.data.length > 0)
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => {
            // Any cleanup logic, if needed
        };
    }, [page, per_page]); // Trigger the effect whenever page or per_page changes

    return { loading, data, hasNext };
}