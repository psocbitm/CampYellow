import styles from '../styles/navbar.module.css'
function Navbar() {
    return <>
        <nav class={`${styles.navbar} navbar sticky-top navbar-expand-lg navbar-light shadow-sm`}>
            <div class="container">
                <a class="navbar-brand" href="#">
                    Camp<span className='text-warning'>Yellow</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">



                    <ul className={`${styles.navbarList} navbar-nav d-flex justify-content-between`}>
                        <div className={styles.inputContainer}>
                            <span className={styles.searchIcon}><i className="fas fa-search"></i></span>
                            <input className={styles.input} type="text" />
                        </div>
                        <div className={`${styles.navbarItemsList} d-flex`}>
                            <li class="nav-item">
                                <a class={`${styles.item} nav-link active justify-content-between align-items-center flex-column`} aria-current="page" href="#">
                                    <span className={`${styles.icon}`}><i className="fas fa-home"></i></span>
                                    <span className={`${styles.iconText} fw-lighter`}>My Feed</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class={`${styles.item} nav-link active justify-content-between align-items-center flex-column`} aria-current="page" href="#">
                                    <span className={`${styles.icon}`}><i className="fas fa-award"></i></span>
                                    <span className={`${styles.iconText} fw-lighter`}>Opportunities</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class={`${styles.item} nav-link active justify-content-between align-items-center flex-column`} aria-current="page" href="#">
                                    <span className={`${styles.icon}`}><i className="fas fa-project-diagram"></i></span>
                                    <span className={`${styles.iconText} fw-lighter`}>My Network</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class={` ${styles.item} nav-link active justify-content-between align-items-center flex-column`} aria-current="page" href="#">
                                    <span>
                                        <img className={styles.userImg} src="/images/userAvatar.svg" alt="" />
                                    </span>
                                    <span className={`${styles.iconText} fw-lighter`}>Profile</span>
                                </a>
                            </li>

                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </>;
}

export default Navbar;
