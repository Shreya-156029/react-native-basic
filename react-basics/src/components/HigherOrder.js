import React from 'react';
const UpdateComponent = OriginalComp => {
    class NewComp extends React.Component
    {
        render()
        {
            return <OriginalComp name="The User"/>;
        }
    }
    return NewComp;
}
export default UpdateComponent;