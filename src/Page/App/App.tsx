
export default (ref: any) =>

<section className="App">
    <header>
        <img src="/image/logo.svg" className="logo" alt="logo" />
        <p>
            Property `name`: {ref.props.name}
        </p>
        <p>
            Property `title`: {ref.props.title}
        </p>
        <p>
            Dynamic Variable: {ref.state.counter}
        </p>

        <a className="link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            React Makes Me Sad
        </a>
    </header>
</section>
