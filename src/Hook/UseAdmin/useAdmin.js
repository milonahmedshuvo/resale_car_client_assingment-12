import React, { useEffect, useState } from 'react';



const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(null)



 console.log(isAdmin)

    useEffect(() => {
        fetch(`https://react-assignment-server-12.vercel.app/singupUsers/admin/${email}`)
            .then(res => res.json())
            .then((data)=>{
                setIsAdmin(data.role)
            })
            .catch((error)=>console.log(error))
    }, [email])

    return [isAdmin]

};

export default useAdmin;