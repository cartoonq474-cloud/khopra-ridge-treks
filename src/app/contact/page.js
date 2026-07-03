import ClientPage from './ClientPage';

export const metadata = {
  alternates: {
    canonical: '/contact',
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
