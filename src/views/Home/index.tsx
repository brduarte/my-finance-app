import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Layout from './Layout.tsx';
import {TransactionsModel} from '../../services/core/models/TransactionsModel.ts';
import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';
import {UserModel} from '../../services/core/models/UserModel.ts';
import {useAuthProfileContext} from '../../contexts/AuthProfileContext.tsx';
import {RefreshControl} from 'react-native';
import {ITransactionService} from '../../services/core/interfaces/TransactionServiceInterface.ts';
import {TransactionService} from '../../services/core/services/TransactionService.ts';
import {
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {DateHelper} from '../../helpers/DateHelper.ts';
import {useSharedValue, withSpring} from 'react-native-reanimated';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IResumeService} from '../../services/core/interfaces/ResumeServiceInterface.ts';
import {ResumeService} from '../../services/core/services/ResumeService.ts';
import {ResumeModel} from '../../services/core/models/ResumeModel.ts';

export default function Home(): React.JSX.Element {
  const bottomSheet = useBottomSheet();
  const authSession = useAuthProfileContext();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [refreshing, setRefreshing] = React.useState(false);
  const heightFilterMonth = useSharedValue(100);
  const [isFilterMonthOpen, setFilterMonthOpen] = useState(false);

  const [transactions, setTransactions] = useState<TransactionsModel[]>([]);
  const [resume, setResume] = useState<ResumeModel>({
    balance: 0,
    revenue: 0,
    expenses: 0,
  });

  const [user, setUser] = useState<UserModel>();
  const [month, setMonth] = useState<number>(
    DateHelper.getCurrentMonthNumber() - 1,
  );

  function redirectToWalletPage() {
    bottomSheet.open();
  }

  function openOrCloseFilterMonth() {
    setFilterMonthOpen(!isFilterMonthOpen);
  }

  const fadeInFilterMonth = () => {
    heightFilterMonth.value = withSpring(50);
  };

  const fadeOutFilterMonth = () => {
    heightFilterMonth.value = withSpring(0);
  };

  async function loadTransactions() {
    const transactionService: ITransactionService = new TransactionService();
    const transactions: TransactionsModel[] = await transactionService.getAll(
      3,
      month + 1,
    );

    setTransactions(transactions);
  }

  async function loadResume(): Promise<void> {
    const resumeService: IResumeService = new ResumeService();
    setResume(await resumeService.getResume(month + 1));
  }

  async function loadProfile() {
    const response = await authSession.getProfile();
    setUser(response);
  }

  async function selectMonth(month: number) {
    setMonth(month);
  }

  useMemo(() => {
    if (isFilterMonthOpen) {
      fadeInFilterMonth();
    } else {
      fadeOutFilterMonth();
    }
  }, [isFilterMonthOpen]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all([loadTransactions(), loadResume()]);
    setRefreshing(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      setMonth(DateHelper.getCurrentMonthNumber() - 1);
      Promise.all([loadProfile(), loadTransactions(), loadResume()]).then();
      setFilterMonthOpen(false);
    }, []),
  );

  useEffect(() => {
    Promise.all([loadTransactions(), loadResume()]).then();
  }, [month]);

  return (
    <Layout
      user={user}
      resume={resume}
      transactions={transactions}
      actionBtnCardTotalBalance={redirectToWalletPage}
      openFilterMonth={openOrCloseFilterMonth}
      isFilterMonthOpen={isFilterMonthOpen}
      animatedFilterMonth={heightFilterMonth}
      navigation={navigation}
      selectMonth={selectMonth}
      monthSelected={month}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}
