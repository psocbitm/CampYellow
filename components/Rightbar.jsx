import styles from '../styles/rightbar.module.css'
function Rightbar() {

  const news = [{
    id: 12312,
    desc: "Lorem ipsum dolor sitnicao unde corporis molestiae coctetur?",
    createdAt: "1d Ago"
  },
  {
    id: 121,
    desc: "Lorem ipsum dsectetur?",
    createdAt: "2d Ago"
  },
  {
    id: 312,
    desc: "Lorem  explicabo quo aut, distinctio unde corporis molestiae ctetur?",
    createdAt: "3d Ago"
  },
  {
    id: 1612,
    desc: "Lorem ipsu sitnctio unde corporis molestiae consectetur?",
    createdAt: "4d Ago"
  },
  {
    id: 123122,
    desc: "Loriae consectetur?",
    createdAt: "1d Ago"
  }]

  return <div className={`${styles.rightbar}`}>

    <div className={` ${styles.rightbarTop} ${styles.rightbarElement} shadow`}>
      <h5 className='fw-bolder'>Peer in news</h5>

      {news.map(article => {
        return <div key={article.id} className='d-flex flex-column my-2'>
          <span className='fw-normal'>{article.desc}</span>
          <span className='fw-lighter'>{article.createdAt}</span>
        </div>
      })}

      <div className="d-grid gap-2">
        <button type='button' className='btn btn-outline-primary my-2'>Check for more news</button>

      </div>
    </div>

    <div className={` ${styles.rightbarBottom} ${styles.rightbarElement} shadow`}>
      <h5 className='fw-bold mb-4'>Top oppotunities for you</h5>

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

      <div className="d-grid gap-2">
        <button type='button' className='btn btn-outline-primary my-2'>Check for more oppotunities</button>

      </div>
    </div>
  </div>
}

export default Rightbar;
