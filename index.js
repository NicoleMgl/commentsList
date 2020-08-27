import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from'./CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
                
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Selena"
                    timeAgo="Today at 4:45AM"
                    comment="I like this!"
                    icon={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Alice"
                    timeAgo="Today at 1:34PM"
                    comment="Me too."
                    icon={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Paul"
                    timeAgo="Today at 4:45PM"
                    comment="I think this is okay~"
                    icon={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Vicky"
                    timeAgo="Today at 9:00PM"
                    comment="could be better lol"
                    icon={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));