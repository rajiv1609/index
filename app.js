const heading = React.createElement("div", { id: "perant" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello warld this from react"), React.createElement("h2", {}, "i am second element")]), React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello warld this from react"), React.createElement("h2", {}, "i am second element")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

