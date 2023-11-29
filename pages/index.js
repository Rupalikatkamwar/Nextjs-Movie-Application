import { useRouter } from "next/router"

function Index() {
  const router = useRouter()
    return <>
    
<button onClick={()=> router.push(`/profile/${"123"}`)}>NExt BUtton

</button>

    </>
  }
  
  export default Index