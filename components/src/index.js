import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetails"
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return (
             <div className="ui container comments">
             <ApprovalCard>
                 <h4>Warning</h4>
                 Are you sure you want to approve it
             </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail picture = {faker.image.avatar()} author="SAM" timeAgo="Today at 6:00PM" commentdata="Nice blog post!!"/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail picture = {faker.image.avatar()} author="ram" timeAgo="Today at 7:00PM" commentdata="excellent blog post!!"/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail picture = {faker.image.avatar()} author="alex" timeAgo="Today at 8:00PM" commentdata="good blog post!!"/>
                </ApprovalCard>
            </div>       
            );
};

ReactDOM.render(<App />, document.querySelector('#root'));
