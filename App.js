const heding = React.createElement(
"div",
{id: "heding", xgf: 'lll', className: "goal"},
[
    React.createElement("h4",{id: "heding2", xgf: 'lll', className: "goal"}, "nameKumar"  
),
    React.createElement("h2",{id: "heding3", xgf: 'lll', className: "goal"}, "Karnsh singh") 
]
);


console.log(heding)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heding)