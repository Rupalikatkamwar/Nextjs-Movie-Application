import { useRouter } from "next/router"

function Profile() {

    const router = useRouter()

    console.log(router.query.id,"sadijijijij")

    return <>
    
    ID PAGE
    <button onClick={()=> router.back()}>
        Back
    </button>
    </>
  }
  
  export default Profile