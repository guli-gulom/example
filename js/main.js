
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const title = React.createElement("h2",{className: "title"}, "Couldn't find a size you need?");

const text = React.createElement("p",{className: "text"},  "We'll work directly with you to create a fully branded packaging system.");

const button = React.createElement("button", {className: "btn"}, "Request a Quote")
const line = React.createElement("div", {className: "line"})


const content = React.createElement("div", {className: "content"},
title,
text,
button)
const title2 = React.createElement("h2",{className: "title"},  "Need a free dieline template?");

const text2 = React.createElement("p",{className: "text"},   "Let us know what size you need and we'll email an Adobe illustrator dieline to you within 3-4 business days.");

const button2 = React.createElement("button", {className: "btn"}, "Request a Quote")

const content2 = React.createElement("div", {className: "content2"},
line, 
title2,
text2,
button2)

const wrapper = React.createElement("div", {className: "wrapper"}, content, content2)
root.render(wrapper)