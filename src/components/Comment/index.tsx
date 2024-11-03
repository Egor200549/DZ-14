import { FC } from 'react';
import Sign from '../Sign';
import Socials from '../Socials';
import './style.css';

interface Comment {
    id: number,
    user: string,
    place: string,
    score: number[],
    comment: string;
}

interface Props {
    data: Comment;
}

const Comment: FC<Props> = ({ data }) => {

    return (
        <article className='comment flx_col g_30 jc_sb'>
            <div className="flx_col g_30">
                <div className='flx_row al_cen jc_sb'>
                    <div className="flx_col">
                        <p className='g90_text'>{data.user}</p>
                        <p className='g40_text'>{data.place}</p>
                    </div>
                    <Socials />
                </div>
                <div className='flx_row g_4'>
                    {data.score.map((item, index) => { return <Sign data={item} key={index} /> })}
                </div>
            </div>
            <p className='g90_text'>{data.comment}</p>
        </article>
    )
}

export default Comment;