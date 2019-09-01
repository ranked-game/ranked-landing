// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import moment from 'moment';
import Firebase from '../../utils/firebase';
import Timer from '../Timer';
import Spinner from '../Spinner';

const Dashboard = '/static/assets/images/dashboard.png';
const wave = '/static/assets/images/bottom2.png';

class StartupPage extends Component {
    state = {
        secondsToStart: null,
    };

    componentDidMount = async () => {
        const db = Firebase.firestore();

        const collection = await db.collection('closedBetaStartDate').get();

        collection.forEach((doc) => {
            const { date } = doc.data();

            const goalTime = moment(date).utc();
            const now = moment().utc();

            const diff = goalTime.diff(now, 'seconds');

            this.setState({
                secondsToStart: diff,
            });
        });
    };
    render() {
        const { secondsToStart } = this.state;
        const {
            content: { title, subtitle, timerTitle, timerValues },
            button,
        } = this.props;

        return (
            <div className={Styles.container}>
                <div className={Styles.table}>
                    <div className={Styles.infoBlock}>
                        <div className={Styles.bigText}>{title}</div>
                        <div className={Styles.p1}>{subtitle}</div>
                        <div className={Styles.p2}>{timerTitle}</div>
                        {secondsToStart ? (
                            <Timer seconds={secondsToStart} values={timerValues} />
                        ) : (
                            <Spinner size="5rem" loader />
                        )}
                        <div className={Styles.btns}>
                            <button className={Styles.fireBtnOrange}>{button}</button>
                        </div>
                    </div>

                    <img className={Styles.dashboardImg} src={Dashboard} alt={'dashboard'} />
                </div>
                <img className={Styles.wave} src={wave} alt={'wave'} />
            </div>
        );
    }
}

export default StartupPage;
