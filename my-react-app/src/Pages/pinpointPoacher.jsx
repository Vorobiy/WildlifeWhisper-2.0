import Header from '../Header.jsx';

export function PinpointPoacher() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen px-4">
                <div className="relative border border-sky-500 p-4 h-[75vh] w-full md:w-3/4 rounded-2xl text-white m-11">
                    <h1 className="text-center text-xl md:text-2xl">Welcome to Pinpoint Poacher.</h1>
                    <h2 className="text-center text-lg md:text-xl">Report where you saw a poacher, upload evidence, and get a reward!</h2>
                    <br />

                    <div className="relative flex justify-center m-12">
                    <label className="absolute -top-5 left-3 text-sm md:text-base px-1 rounded" for="fname">First name (optional):</label>
                    <input 
                            className="w-full md:w-2/3 h-12 rounded-2xl pl-4" 
                            type="text" 
                            id="fname" 
                            name="fname" 
                            placeholder="Enter your First Name" 
                        />
                    </div>

                    <div className="relative flex justify-center m-12">
                    <label className="absolute -top-5 left-3 text-sm md:text-base px-1 rounded" for="lname">Last name (optional):</label>
                    <input 
                            className="w-full md:w-2/3 h-12 rounded-2xl pl-4" 
                            type="text" 
                            id="lname" 
                            name="lname" 
                            placeholder="Enter your Last Name" 
                        />
                    </div>

                    <div className="relative flex justify-center m-12">
                    <label className="absolute -top-5 left-3 text-sm md:text-base px-1 rounded" for="email">Email Adress (optional):</label>
                    <input 
                            className="w-full md:w-2/3 h-12 rounded-2xl pl-4" 
                            type="text" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your Email Adress" 
                        />
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
}

export default PinpointPoacher;