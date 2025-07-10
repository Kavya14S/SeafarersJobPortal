import { useForm } from "react-hook-form"
import { Link,useNavigate } from "react-router-dom"
const Signin = () => {
    const form = useForm({
    defaultValues:
      {
          username:"",
          password:""
      }
    
  });
    const {register,handleSubmit,formState} = form;
    const {errors} = formState;
    const navigate = useNavigate()
    const onSubmit = (data) =>{
    console.log(data);
    navigate('/');
  }
  return (
    <>
    <section>
        <div className="2xl:container bgg  h-screen">
            <div className="w-[90%] flex justify-center items-center grid grid-cols-1 h-screen mx-auto ">
                <div className="bg-white shadow-2xl rounded-md gap-2 w-fit p-10 flex flex-col mx-auto space-y-2">
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <p className="text-xl md:text-2xl lg:text-3xl text-[#073345] font-light font-[Poppins]">WELCOME</p>
                        <p className="text-[17px] md:text-xl lg:text-2xl text-[#073345] font-light font-[Poppins]">Navigate Your Future at Sea !</p>
                    </div>
                    <form onSubmit = {handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4" id="form">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="id" className="text-base font-medium font-[Poppins]">Username</label>
                            <input type="text" {...register("username",{required:{value:true,message:"Username is required"}})} id="username" className="border-b-2 px-2" />
                            <p className="text-red-500">{errors?.username?.message}</p>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-base font-medium font-[Poppins]">Password</label>
                            <input type="password" {...register("password",{required:"password is required"})} id="password"
                                className=" border-b-2 px-2" />
                            <p className="text-red-500">{errors?.password?.message}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="rem" />
                            <label htmlFor="rem" className="text-base font-medium font-[Poppins]">Remember Me</label>
                        </div>
                        <div className="flex justify-center items-center font-[Poppins] bg-[#20d6f0] rounded-sm text-[#073345] p-1">
                        <button className="font-[Poppins] bg-[#20d6f0] rounded-sm text-[#073345] p-1">Sign In</button>
                        </div>
                    </form>
                    <div className="flex items-center justify-start space-x-2">
                        <p>Don't have an account? </p>
                        <Link to="/SeafarerRegistration"><p className="font-[Poppins] underline text-blue-600 text-sm">Register</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Signin
