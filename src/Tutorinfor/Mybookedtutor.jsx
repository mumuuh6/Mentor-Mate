import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MentorContext } from "../../Mentorprovider";
import { Card, CardHeader, CardBody, Spinner } from "@material-tailwind/react";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { MdOutlineVerified, MdOutlinePlayLesson } from "react-icons/md";

const Mybookedtutor = () => {
    const { user,userSignOut } = useContext(MentorContext);
    const emailofbooking = user?.email;
    const [bookedemail, setbookedemail] = useState([]);
    const [bookedtutor, setbookedtutor] = useState([]);
    const [bookeddata, setbookeddata] = useState([]);
    const [reviewupdated, setreviewupdated] = useState(false);
    const [error, setError] = useState('');  // Error state
    const [loading, setLoading] = useState(true); // New state for loading

    // Show loading spinner for first 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        axios
            .get(`https://mentor-mate-server-side.vercel.app/mybookedinfo?email=${emailofbooking}`, { withCredentials: true })
            .then((data) => {
                setbookedemail(data.data);
            })
            .catch((err) => {
                setError("Error fetching booked tutor information.");
                userSignOut()
                .then(res=>console.log(res))
                console.error(err.message);
            });

        axios
            .get("https://mentor-mate-server-side.vercel.app/tutor")
            .then((data) => {
                setbookedtutor(data.data);
            })
            .catch((err) => {
                setError("Error fetching tutor information.");
                console.error(err);
            });

        setreviewupdated(false);
    }, [emailofbooking, reviewupdated]);

    useEffect(() => {
        if (bookedemail.length > 0 && bookedtutor.length > 0) {
            const tutorid = bookedtutor.filter((tutor) =>
                bookedemail.some((booking) => booking._id === tutor._id)
            );
            setbookeddata(tutorid);
        }
    }, [bookedemail, bookedtutor]);
    if (loading) {
        return (
            <div className="flex justify-center items-center gap-8 h-screen w-full">
                <Spinner color="blue" className="h-12 w-12" />
            </div>
        );
    }

    const handlereview = (id, review) => {
        axios
            .put(`https://mentor-mate-server-side.vercel.app/tutor/${id}`, { review: review + 1 })
            .then((res) => {
                console.log(res.data);
                setreviewupdated(true);
            })
            .catch((err) => {
                setError("Error updating review.");
                console.error("Error updating review:", err);
            });
    };

    return (
        <div className="flex flex-col gap-4 py-4  mt-24 lg:mt-28 justify-center items-center">
            {error && (
                <div className="text-red-500 text-lg mb-4">
                    <strong>{error}</strong>
                </div>
            )}

            {bookeddata.map((data) => (
                <div key={data._id} className="max-w-sm md:max-w-none flex flex-col justify-center items-center gap-3">
                    <Card className="w-full max-w-[48rem] h-auto justify-center items-center flex-col md:flex-row lg:flex-row">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                        >
                            <img
                                src={data.url}
                                alt="Tutor"
                                className="h-full w-full object-fit"
                            />
                        </CardHeader>
                        <CardBody className="flex justify-between items-center flex-row lg:flex-row md:flex-row text-start w-screen">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    <h3>{data.name}</h3>
                                    <MdOutlineVerified className="text-blue-900" />
                                </div>
                                <div className="bg-purple-200 text-purple-900 w-24 rounded-lg text-start pl-1">
                                    {data.Type}
                                </div>
                                <div className="flex flex-col">
                                    <p className="flex items-center gap-1">
                                        <PiStudent className="text-black" /> 24 Active Students.
                                    </p>
                                    <p className="flex items-center">
                                        <MdOutlinePlayLesson className="text-black" /> 2712 lessons
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <FaAmericanSignLanguageInterpreting className="text-black" />
                                    <p>Speaks {data.language} proficiently</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <h3>
                                        Star: <p>{data.review}</p>
                                    </h3>
                                    <h3>BDT {data.price}</h3>
                                </div>
                                <button
                                    onClick={() => handlereview(data._id, data.review)}
                                    className="p-3 border-2 rounded-lg bg-purple-500 text-black text-md font-bold"
                                >
                                    Review
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Mybookedtutor;
