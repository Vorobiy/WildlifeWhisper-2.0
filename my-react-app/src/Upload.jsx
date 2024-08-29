import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa"; // Assuming you are using react-icons

export function Upload() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <form className="flex flex-col items-center justify-center bg-sky-500 w-1/2 p-6 rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
                    <label className="cursor-pointer mb-4">
                        <input 
                            {...register("picture")} 
                            type="file" 
                            className="hidden" 
                        />
                        <FaUpload className="text-white text-4xl" /> 
                    </label>
                    <button type="submit" className="bg-white text-sky-500 px-4 py-2 rounded-lg">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Upload;