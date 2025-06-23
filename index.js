/**Javascript */
// const heading = document.createElement("h2");
//        heading.textContent="Hello World";
//        heading.className = "header";
//        document.getElementById("root").append(heading);

//        console.log("Javascript element: ",heading);


      /**REACT */

const reactHeading = React.createElement("h1",{className : "head", id : "reactHead",
     children:"Hello React!!"});

ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// console.log("React element: ",reactHeading);
