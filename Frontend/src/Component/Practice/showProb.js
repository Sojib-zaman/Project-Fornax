import React from 'react';
import { Link} from 'react-router-dom';
import './showProb.css'

const Problem = ({problem}) => {


    return (
        <div>
            <Link to={'problem/' + problem.ID} className='prob-link' >
                <div className='prob-container'>

                    <div className='prob-title'>
                        <h1> {problem.TITLE}</h1>
                    </div>
                    <div className='prob-tag'>
                        <div className='tag'>
                            <h6>Type : {problem.CATEGORY}</h6>
                        </div>
                        
                        <div className='difficulty'>
                        <h6> Rank : {problem.RANK } </h6>
                        </div>
                        <div className='info'>
                        <h6>Submission : {problem.SUBMISSION_COUNT } </h6>
                        <h6>Accepted : {problem.ACCEPTANCE_COUNT } </h6>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Problem;