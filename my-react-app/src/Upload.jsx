import { useForm } from "react-hook-form";

export function Upload() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className="flex items-center justify-center ">
                <form className="flex flex-col items-center justify-center bg-sky-500 w-1/2 rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("picture")} type="file" className="mb-4" />
                    <button type="submit" className="bg-white text-sky-500 px-4 py-2 rounded-lg">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Upload;  