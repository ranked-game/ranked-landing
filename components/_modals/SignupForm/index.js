// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import Spinner from '../../Spinner';
const tick = '../../../static/assets/svg/ticked.svg';
const cross = '../../../static/assets/svg/cross.svg';

export default class SignupForm extends Component {
    state = {
        loading: false,
        success: false,
        fail: false,
        name: '',
        email: '',
    };

    _handleInput = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        });
    };

    _send = async () => {
        const { email } = this.state;
        const { toggleModal } = this.props;

        try {
            this.setState({
                loading: true,
            });

            console.log(email);

            const response = await fetch('https://api.ranked.game/api/contact/mvp/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.status.toString().startsWith('20')) throw new Error();

            this.setState(
                {
                    success: true,
                },
                () => {
                    setTimeout(() => {
                        toggleModal();
                    }, 1000);
                },
            );
        } catch (err) {
            this.setState(
                {
                    fail: true,
                },
                () => {
                    setTimeout(() => {
                        toggleModal();
                    }, 2000);
                },
            );
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    _closeModal = ({ target: { id } }) => {
        const { toggleModal } = this.props;

        if (id === 'bg') toggleModal();
    };

    render() {
        const { loading, name, email, fail, success } = this.state;

        return (
            <section className={Styles.bg} id="bg" onClick={this._closeModal}>
                <div
                    className={`${Styles.container} ${success ||
                        (fail && Styles.successContainer)}`}
                >
                    {loading ? (
                        <Spinner size="5rem" loader />
                    ) : fail ? (
                        <>
                            <p>Something went wrong</p>
                            <p>Try sending a message to admin@ranked.game</p>
                            <img src={cross} className={Styles.cross} />
                        </>
                    ) : success ? (
                        <>
                            <p>Message sent!</p>
                            <img src={tick} className={Styles.tick} />
                        </>
                    ) : (
                        <>
                            <p>Leave your email to apply for beta&#8209;testing</p>
                            <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                value={name}
                                onChange={this._handleInput}
                            />
                            <input
                                type="text"
                                placeholder="Your email"
                                name="email"
                                value={email}
                                onChange={this._handleInput}
                            />
                            <button onClick={this._send}>Apply</button>
                        </>
                    )}
                </div>
            </section>
        );
    }
}
