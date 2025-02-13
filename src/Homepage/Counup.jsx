import { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";

const Counup = () => {
    const [tutor, setTutor] = useState([]);
    const [user, setuser] = useState([]);
    const [totalReviews, setTotalReviews] = useState(0);

    useEffect(() => {
        axios.get("https://mentor-mate-server-side.vercel.app/tutor")
            .then(res => {
                const userinfo=res.data;
                console.log(res)
                setTutor(res.data);
                // Calculate the total reviews by summing up the review counts
                const total=userinfo.reduce((acc, dat) => acc + dat.review, 0)
                setTotalReviews(total);
            })
            .catch(err => console.log(err));

            axios.get(`https://mentor-mate-server-side.vercel.app/users`)
            .then(res => {
                const userinfo=res.data;
                
                setuser(userinfo)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 border-2 mt-3 grid grid-cols-1 justify-center items-center lg:grid-cols-5 ">
            {/* Tutor Count */}
            <div className="p-4 flex flex-col justify-center items-center">
                <h3>Tutor we have!</h3>
                <div className="flex">
                <CountUp
                    className="account-balance"
                    start={0}
                    end={tutor.length}
                    duration={3}
                    useEasing={true}
                    separator=","
                />
                <p>+</p>
                </div>
            </div>

            {/* Review Count */}
            <div className="p-4 flex flex-col justify-center items-center">
                <h3>Tutor Reviews</h3>
               <div className="flex">
               <CountUp
                    className="account-balance"
                    start={0}
                    end={totalReviews} // Total reviews accumulated
                    duration={3}
                    useEasing={true}
                    separator=","
                />
                <p>+</p>
               </div>
            </div>
            {/* Language Count */}
            <div className="p-4 flex flex-col justify-center items-center">
                <h3>Total language</h3>
                <div className="flex">
                <CountUp
                    className="account-balance"
                    start={0}
                    end={5} // Total reviews accumulated
                    duration={3}
                    useEasing={true}
                    separator=","
                />
                <p>+</p>
                </div>
            </div>
            <div className="p-4 flex flex-col justify-center items-center">
                <h3>User we have!</h3>
                <div className="flex">
                <CountUp
                    className="account-balance"
                    start={0}
                    end={user.length} // Total reviews accumulated
                    duration={3}
                    useEasing={true}
                    separator=","
                />
                <p>+</p>
                </div>
            </div>
            <div className="p-4 flex flex-col justify-center items-center">
                <h3 className="text-black">4.8⭐⭐⭐⭐⭐</h3>
                <h3>on the App Store</h3>
                
            </div>
        </div>
    );
};

export default Counup;
