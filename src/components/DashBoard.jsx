import { Button } from "keep-react"


const DashBoard = () => {
  return (
    <div className="bg-[#F3F5FF] flex h-1/2 px-36 items-center justify-center gap-2 p-4">
     <div className="w-1/2 flex gap-8  "> 
     
     <Button color="primary" variant="outline">
       Continue with user 1  ➡️
      </Button>
      <Button color="warning" variant="outline">
      Continue with user 2  ➡️
      </Button>
     </div>
     <div className="w-1/2">
      <img className="rounded-lg" src="https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt=""/> 
     </div>

    </div>
  )
}

export default DashBoard
