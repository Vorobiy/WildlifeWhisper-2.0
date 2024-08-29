import Header from '../Header.jsx';
import Upload from "../Upload.jsx"
export function PinpointPoacher() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen px-4">
                <div className="relative border-sky-500 p-4 h-[75vh] w-full md:w-3/4 rounded-2xl text-white border-4 border-b-8 border-r-8">
                    <h1 className="text-center text-xl md:text-3xl mt-2">Welcome to Pinpoint Poacher.</h1>
                    <h2 className="text-center text-lg md:text-2xl">Report where you saw a poacher, upload evidence, and get a reward!</h2>
                    <br />

                    <div className="relative flex justify-center m-12">
                    <input 
                            className="w-full md:w-3/4 h-12 rounded-2xl pl-4 text-black" 
                            type="text" 
                            id="fname" 
                            name="fname" 
                            placeholder="Enter your First Name" 
                        />
                    </div>

                    <div className="relative flex justify-center m-12">
                    <input 
                            className="w-full md:w-3/4 h-12 rounded-2xl pl-4 text-black" 
                            type="text" 
                            id="lname" 
                            name="lname" 
                            placeholder="Enter your Last Name" 
                        />
                    </div>

                    <div className="relative flex justify-center m-12">
                    <input 
                            className="w-full md:w-3/4 h-12 rounded-2xl pl-4 text-black" 
                            type="text" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your Email Adress" 
                        />
                    </div>

                    <div className="relative flex justify-center m-12">
                    <input 
                            className="w-full md:w-3/4 h-12 rounded-2xl pl-4 text-black" 
                            type="text" 
                            id="bitcoin" 
                            name="bitcoin" 
                            placeholder="Enter your Bitcoin Address" 
                            required
                        />
                    </div>
                    <Upload></Upload>
                </div>
                <br />
            </div>
        </>
    );
}

export default PinpointPoacher;