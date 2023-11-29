import { useRouter } from "next/router"

function Profile() {

    const router = useRouter()

    return <>
    
    PROFILE
    <button onClick={()=> router.back()}>
        Back
    </button>
    </>
  }
  
  export default Profile