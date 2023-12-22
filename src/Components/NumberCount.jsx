
import CountUp from "react-countup";
import useCart from "../hook/useCart";
import img from '../assets/image/banner-task.jpg';
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const NumberCount = () => {
const [tasks] = useCart([])

const todoTasks = tasks
    .filter((task) => task.status === "toDo")


  const workingTasks = tasks
    .filter((task) => task.status === "working")


  const doneTasks = tasks
    .filter((task) => task.status === "done")


  return (
    <div className="my-24">
      <SectionTitle SectionTitle={"Condition"}/>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="hero min-h-[700px] bg-fixed"
      >
        <div className="hero-overlay bg-opacity-0 "></div>
        <div className="hero-content flex-col lg:flex-row-reverse container m-auto ">

          <div className="card shrink-0 w-1/2  shadow-2xl bg-base-200">
            <div className="card-body">
              <div className="stats stats-vertical lg:stats-horizontal shadow-xl">
                <div className="stat">
                  <div className="stat-title">To Do</div>
                  <div className="stat-value">
                    <CountUp
                      duration={10}
                      className="stat-value counter text-secondary"
                      start={1000}
                      end={todoTasks.length || 0}
                    ></CountUp>
                    K
                  </div>
                  <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Working...</div>
                  <div className="stat-value">
                    <CountUp
                      duration={10}
                      className="stat-value counter text-secondary"
                      start={1000}
                      end={workingTasks.length || 0}
                    ></CountUp>
                    K
                  </div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Task Done</div>
                  <div className="stat-value">
                    <CountUp
                      duration={10}
                      className="stat-value counter text-secondary"
                      start={1000}
                      end={doneTasks.length || 0}
                    ></CountUp>
                    K
                  </div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberCount;
