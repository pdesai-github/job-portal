import NavBar from "../nav/NavMenu";

const LayoutMain: React.FC = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                  
                    <div className="col-12">
                        <NavBar></NavBar>
                    </div>
                  
                </div>
                <div className="row">
                    <div className="col-3">
                        <h1>First col</h1>
                    </div>
                    <div className="col-6">
                        <h1>Sec col</h1>
                    </div>
                    <div className="col-3">
                        <h1>Third col</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutMain;