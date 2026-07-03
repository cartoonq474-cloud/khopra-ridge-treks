import ClientPage from './ClientPage';

export const metadata = {
  alternates: {
    canonical: '/planning/difficulty-calculator',
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
