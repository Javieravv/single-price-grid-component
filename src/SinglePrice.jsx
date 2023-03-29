
export const SinglePrice = () => {
  return (
    <section className="section-main">
        <h1 className="sr-only">Single Price Component</h1>
        <article className="article-description">
          <h2>Join our commuynity</h2>
          <p>30-day, hassle-free money back guarantee</p>
          <p>Gain access to our full libray of tutorials along with expert code reviews.<br />Perfect for any developers who are serious about honing their skills. </p>
        </article>

        <article className="article-subscription">
            <h3>Monthly Subscription</h3>
            <p>$29<span> per month</span></p>
            <p>Full access less than $1 a day</p>
            <button>Sign Up</button>
        </article>


        <article className="article-whyus">
            <h3>Why Us</h3>
            <ul>
                <li>Tutorials by industry experts</li>
                <li>Peer & expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
            </ul>
        </article>
    </section>
  )
}
