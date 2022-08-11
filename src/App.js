import { Paper, CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Services from './components/Services';
import WalletBalanceCard from './components/WalletBalanceCard';
import CustomerImg from './components/CustomerImg';
import ChoresSection from './components/ChoresSection';
import ReviewCard from './components/ReviewCard';
import TreatSection from './components/TreatSection';
import DinnerSection from './components/DinnerMenu';
import CovidMessageCard from './components/CovidMessageCard';
import ImageList from './components/ImageList';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Container maxWidth={'sm'}>
        <Paper className='paper' elevation={24}>
          <Header />
          <Services />
          <WalletBalanceCard />
          <CustomerImg />
          <ChoresSection />
          <ReviewCard />
          <TreatSection />
          <DinnerSection />
          <CovidMessageCard />
          <ImageList />
          <Footer />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
