import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";

import { PiStudent } from "react-icons/pi";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
import { Link } from "react-router-dom";
const Eachtutor = (tuition) => {
    const { language, Type, name, price, review, url, _id } = tuition.tuition;
    
    return (
        <div>
            <Card className="w-full max-w-[48rem] h-48 flex-row ">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src={url}
                        alt="card-image"
                        className="h-full w-full object-fit"
                    />
                </CardHeader>
                <CardBody className="flex justify-between items-center text-start w-screen">
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-1">
                            <h3>{name}</h3>
                            <p><MdOutlineVerified className="text-blue-900"></MdOutlineVerified></p>

                        </div>
                        <div className="bg-purple-200 text-purple-900 w-24 rounded-lg  text-start pl-1">{Type}</div>
                        <div className="flex flex-col"><p className="flex items-center gap-1 "><PiStudent className="text-black"></PiStudent>24 Active Students.</p><p className="flex items-center"><MdOutlinePlayLesson className="text-black"></MdOutlinePlayLesson>2712 lessons</p></div>
                        <div className="flex items-center"><p><FaAmericanSignLanguageInterpreting className="text-black"></FaAmericanSignLanguageInterpreting></p><p>Speaks {language} profeciently</p></div>

                    </div>
                    <div>
                        <div className="mb-4">
                            <h3>star <p>{review}</p></h3>
                            <h3>BDT {price}</h3>
                        </div>
                        <div>
                            <Link to={`/tutor/${_id}`} className="p-3 border-2 rounded-lg bg-purple-500 text-black text-md font-bold">Book trial lesson</Link>
                        </div>

                    </div>


                </CardBody>

            </Card>
        </div>
    );
};

export default Eachtutor;