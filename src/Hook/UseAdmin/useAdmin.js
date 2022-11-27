import React, { useEffect, useState } from 'react';



const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(null)



 console.log(isAdmin)

    useEffect(() => {
        fetch(`http://localhost:5000/singupUsers/admin/${email}`)
            .then(res => res.json())
            .then((data)=>{
                setIsAdmin(data.role)
            })
            .catch((error)=>console.log(error))
    }, [email])

    return [isAdmin]

};

export default useAdmin;