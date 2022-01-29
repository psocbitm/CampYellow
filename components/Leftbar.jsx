import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/leftbar.module.css'
function Leftbar() {

  const [user, setUser] = useState({
    name: "Palash Asati",
    desc: "Upcoming Intern @ CampYellow | BITM'23 | Web Developer",
    followers: 1231,
    profileViewsThisMonth: 90,
    postViewsThisMonth: 340
  });

  return <div className={`${styles.leftbar}`}>

    <div className={` ${styles.leftbarTop} ${styles.leftbarElement} shadow d-flex align-items-center flex-column justify-content-center`}>
      <img src='/images/userAvatar.svg' className={styles.userImage}></img>
      <h4>{user.name}</h4>
      <span className='text-center fw-lighter'>{user.desc}</span>
      <hr style={{ width: "100%" }} />

      <ul className="list-group" style={{ width: "100%" }}>
        <li className={`${styles.listGroupItem} list-group-item d-flex justify-content-between align-items-center`}>
          Number of followers
          <span className="badge bg-primary rounded-pill">{user.followers}</span>
        </li>
        <li className={`${styles.listGroupItem} list-group-item d-flex justify-content-between align-items-center`}>
          Profile views this month
          <span className="badge bg-primary rounded-pill">{user.profileViewsThisMonth}</span>
        </li>
        <li className={`${styles.listGroupItem} list-group-item d-flex justify-content-between align-items-center`}>
          Post views this month
          <span className="badge bg-primary rounded-pill">{user.postViewsThisMonth}</span>
        </li>
      </ul>
    </div>

    <div className={` ${styles.leftbarBottom} ${styles.leftbarElement} shadow`}>
      <h5 className='fw-bold mb-4'>Your groups and clubs</h5>

      <div className="events">
        <div className="event d-flex align-items-center ">
          <img src='/images/event.svg' className={styles.eventImage}></img>
          <h6 className='fw-normal'>Dummy Event Name</h6>
        </div>
        <div className="event d-flex align-items-center ">
          <img src='/images/event.svg' className={styles.eventImage}></img>
          <h6 className='fw-normal'>Dummy Event Name2</h6>
        </div>
        <div className="event d-flex align-items-center ">
          <img src='/images/event.svg' className={styles.eventImage}></img>
          <h6 className='fw-normal'>Dummy Event Name3</h6>
        </div>
      </div>

      <button className='btn btn-outline-primary mt-2'>Discover more events and groups</button>
    </div>
  </div>;
}

export default Leftbar;
