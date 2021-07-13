import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
    return (
      <section>
        <h2 className="section-title">
          <Skeleton duration={1} height={30} width={300} />
        </h2>
  
        <ul className="list">
          {Array(9)
            .fill()
            .map((item, index) => (
              <li className="card" key={index}>
                <div className = "skeletonDiv">&nbsp;&nbsp;
                <Skeleton rect={true} height={70} width={70} /> &nbsp;&nbsp;
                <div className = "skeletonDiv2">
                <Skeleton variant="text" height={30}  width={300} />
                <Skeleton variant="text"  width={100} width={300} />
                <Skeleton variant="text"  width={70} />
                </div> 
                </div>
              </li>
            ))}
        </ul>
      </section>
    );
  };

  export default SkeletonCard;