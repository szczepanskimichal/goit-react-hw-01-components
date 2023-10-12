import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics';
import stat from './Statistics/statistic.json';

import { Friendlist } from './FriendList';
import friends from './FriendList/friends.json';

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
