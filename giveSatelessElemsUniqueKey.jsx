const frontEndFrameworks = ["React", "Angular", "Ember", "Knockout", "Backbone", "Vue"];

function Frameworks() {
const renderFrameworks = frontEndFrameworks.map(item => <li key={item+1}>{item}</li>)
}

return (
    <div>
        <h1>Popular Frontend Javascript Framworks</h1>
        <ul>
            {renderFrameworks}
        </ul>
    </div>
)