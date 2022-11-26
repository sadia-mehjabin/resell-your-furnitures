import { useEffect, useState } from "react";

const useIsSeller = email => {
    const [isSeller, setIsSeller] = useState(false)
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(()=> {
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res  => res.json())
            .then(data => {
                console.log(data)
                setIsSeller(data.isAdmin)
                setIsSellerLoading(false)
            })
        }
    }, [email]);
    return [isSeller, isSellerLoading];
}

export default useIsSeller;