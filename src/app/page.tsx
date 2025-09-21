// app/page.jsx
import MortgageForm from '@/components/MortgageForm';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <MortgageForm />
      </div>
    </Layout>
  );
}