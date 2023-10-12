import { Profile } from './Profile';
import user from './Profile/user.json';
import { Statistics } from '.Statistics/statistics.json';
import stat from './Statistics/statistics.json';
import { Friendlist } from '.FrirndList';
import friends from '.FrirndList/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transaction from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        // msFlexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile {...user}></Profile>
      <Statistics stats={stat}></Statistics>
      <Friendlist friends={friends}></Friendlist>
      <TransactionHistory item={transaction}></TransactionHistory>
    </div>
  );
};
