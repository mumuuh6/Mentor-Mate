import { render } from "react-dom";
import CountUp from "react-countup";

const onComplete = () => {
    console.log("Completed! 👏");
};

const onStart = () => {
    console.log("Started! 💨");
};

const Counup = () => {
    return (
        <div className="border-4 shadow-xl">
            <div>
                <CountUp
                    className="account-balance"
                    start={0}
                    end={49500000}
                    duration={3}
                    useEasing={true}
                    separator=","
                />
            </div>
        </div>
    );
};

export default Counup;