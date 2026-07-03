import ClientPage from './ClientPage';

export const metadata = {
  alternates: {
    canonical: '/checkout',
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
