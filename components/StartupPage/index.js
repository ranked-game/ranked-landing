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

    componentDidMount = () => {
        const db = Firebase.firestore();

        db.collection('closedBetaStartDate')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const { date } = doc.data();

                    const goalTime = moment(date).utc();
                    const now = moment().utc();

                    const diff = goalTime.diff(now, 'seconds');

                    this.setState({
                        secondsToStart: diff,
                    });
                });
            });
    };
    render() {
        const { secondsToStart } = this.state;

        return (
            <div className={Styles.container}>
                <div className={Styles.table}>
                    <div className={Styles.infoBlock}>
                        <div className={Styles.bigText}>lead the competition and win prizes</div>
                        <div className={Styles.p1}>
                            Our application is in beta testing, become one of the first players and
                            get prizes.
                        </div>
                        <div className={Styles.p2}>Time to open beta:</div>
                        {secondsToStart ? (
                            <Timer seconds={secondsToStart} />
                        ) : (
                            <Spinner size="5rem" loader />
                        )}
                        <div className={Styles.btns}>
                            <button className={Styles.fireBtnOrange}>Download</button>
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
