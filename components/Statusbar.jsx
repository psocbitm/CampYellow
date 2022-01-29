import styles from '../styles/statusbar.module.css'
function Statusbar() {
    return <div className={`${styles.statusbar} shadow`}>
        <div className={`${styles.statusbarTop} d-flex align-items-center`}>
            <img className={styles.userImage} src='/images/userAvatar.svg' />
            <input placeholder='Start a conversation' type="text" className={styles.inputBox} data-bs-toggle="modal" data-bs-target="#exampleModal" />
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create a post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex flex-start'>
                                <img className={styles.userImage} src='/images/userAvatar.svg' alt="" />
                                <h6 className=''>Palash Asati</h6>
                            </div>
                            <textarea className={`${styles.modelInput}`} placeholder='Write Something Here'/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.statusbarBottom} d-flex justify-content-evenly mt-3`}>
            <div className={`${styles.statusbarLink} d-flex align-items-center`}>
                <span style={{ fontSize: "25px", marginRight: "10px" }}>
                    <i aria-hidden className="fas fa-images"></i>
                </span>
                <span>
                    Photos
                </span>
            </div>
            <div className={`${styles.statusbarLink} d-flex align-items-center`}>
                <span style={{ fontSize: "25px", marginRight: "10px" }}>
                    <i aria-hidden className="fas fa-video"></i>
                </span>
                <span>
                    Videos
                </span>
            </div>
            <div className={`${styles.statusbarLink} d-flex align-items-center`}>
                <span style={{ fontSize: "25px", marginRight: "10px" }}>
                    <i aria-hidden className="fas fa-calendar"></i>
                </span>
                <span>
                    Events
                </span>
            </div>
        </div>
    </div>;
}

export default Statusbar;
