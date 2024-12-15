import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import styles from './Main.module.scss';
import endImg from '../../assets/img/end-img.jpg';

import { StartBlock } from '../../components/StartBlock';
import { InviteBlock } from '../../components/InviteBlock';
import { DateBlock } from '../../components/DateBlock';
import { LocationBlock } from '../../components/LocationBlock';
import { DressCodeBlock } from '../../components/DressCodeBlock';
import { EndBlock } from '../../components/EndBlock';
import { TimingBlock } from '../../components/TimingBlock';
import { FormBlock } from '../../components/FormBlock';
import { DesktopView } from '../../components/DesktopView';

export const Main = () => {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div className={styles.main}>
			<DesktopView />
			<div className={styles.mainMobile}>
				<StartBlock />
				<InviteBlock />
				<DateBlock />
				<LocationBlock />
				<TimingBlock />
				<DressCodeBlock />
				<FormBlock />
				<EndBlock />
				<img src={endImg} alt='' />
			</div>
		</div>
	);
};
