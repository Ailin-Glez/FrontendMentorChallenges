function Price({ className, plan, planPrice }) {
    const { licence, storage, users, sendUp } = plan
    return (
        <section className={className}>
            <p className="licence">{licence}</p>
            <p className="price">${planPrice[licence]}</p>
            <p className="details first">{storage} Storage</p>
            <p>{users} Users Allowed</p>
            <p className="details last">Send up to {sendUp} GB</p>
            <button>Learn more</button>
        </section>
    );
}

export default Price;