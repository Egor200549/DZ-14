import Comment from '../Comment';
import './style.css';
import data from '../../data/comments.json';

const Comments = () => {
    return (
        <section className='comments flx_col g_80'>
            <div className='services__head flx_row al_cen jc_sb'>
                <div className="flx_col g_20">
                    <div className="flx_col g_4">
                        <p className='step_text'>Testimonials</p>
                        <p className='head_text'>What My Clients Say</p>
                    </div>
                    <div className='flx_col g_4'>
                        <p className='g40_text'>Total Reviews</p>
                        <p className='g80_text'>323</p>
                    </div>
                </div>
                <div className="comments_buttons flx_row g_30 jc_sb al_cen">
                    <div className="group_buttons__first group_buttons flx_row">
                        <button className='item_button flx_row al_cen jc_cen'>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.25 1.5L1.75 10L10.25 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className='item_button flx_row al_cen jc_cen'>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.75 1.5L10.25 10L1.75 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <a href='#' className='grey_button'>View All Testimonials&ensp;&#8594;</a>
                </div>
            </div>
            <div className="comments__part flx_row jc_sb g_30">
                {data.comments.map((comment) => { return <Comment data={comment} key={comment.id} /> })}
            </div>
            <div className="group_buttons__second group_buttons flx_row" style={{ width: 'fit-content', alignSelf: 'center' }}>
                <button className='item_button flx_row al_cen jc_cen'>
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.25 1.5L1.75 10L10.25 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className='item_button flx_row al_cen jc_cen'>
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 1.5L10.25 10L1.75 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Comments;