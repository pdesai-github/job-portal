import React from "react";

interface LayoutMainProps {
    left: React.ElementType;
    center: React.ElementType;
    right: React.ElementType;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ left, center, right }) => {

    const Left = left;
    const Center = center;
    const Right = right;

    return (
        <div>

            <div className="container">

                <div className="row">
                    <div className="col-3">
                        <Left></Left>
                    </div>
                    <div className="col-6">
                        <Center></Center>
                    </div>
                    <div className="col-3">
                        <Right></Right>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutMain;