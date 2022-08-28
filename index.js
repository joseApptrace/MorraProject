import * as AppViews from "./components/App";
import * as Attacher from "./components/Alice";
import * as Deployer from "./components/Bob";
import * as Player from "./components/Player";
import RenderViews, { renderDOM } from "./layouts/renderViews";
import ReachContextProvider from "./context/ReachContext";
import { useEffect } from "react";

const Views = {
    ...AppViews,
    ...Attacher,
    ...Deployer,
    ...Player,
};

function App () {
    useEffect(() => { document.title = "Morra Project" }, [])
    return (
        <div >
            <RenderViews { ...Views } />
        </div>
    );
}

renderDOM(
    <ReachContextProvider>
        <App />
    </ReachContextProvider>
);

export default App;
