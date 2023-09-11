import axios from "axios";
import { SYSCOM_API, SYSCOM_API_CLIENT, SYSCOM_API_SECRET,HOST } from "../config";


export const categorias =  async (req, res )=>{
    try {
        
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")

        const {data: {access_token},}= await axios.post('https://developers.syscom.mx/oauth/token', params,categorias, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth:{
                username: SYSCOM_API_CLIENT,
                password: SYSCOM_API_SECRET,
        }
        
    });
    console.log(access_token);
    const response = await axios.get(`${SYSCOM_API}/categorias`,{
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    });
    
    console.log(response.data);
    return res.json(response.data);
        
    } catch (error) {
        return res.status(500).send("Something goes wrong");
    }

};
// export const categorias = async (req, res)=>{
//     try {
//         const params = new URLSearchParams()
//         params.append("grand_type", "client_credentials")

//     const {data: {access_token} } = axios.post('https://developers.syscom.mx/oauth/token', params,{
//         headers:{
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         auth: {
//             username: SYSCOM_API_CLIENT,
//             password: SYSCOM_API_SECRET,
//         }
//     })
//     console.log(access_token);
//     const response = await axios.get(`${SYSCOM_API}/categorias`, 
//     {
//         headers:{
//             Authorization: `Bearer ${access_token}`, 
//         }
//     });
//     // console.log(response.data);
//     res.json(response.data);
//     } catch (error) {
//         return res.status(500).send("Something goes wrong");
//     }
// };