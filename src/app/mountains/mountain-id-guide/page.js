import ClientPage from './ClientPage';

export const metadata = {
  alternates: {
    canonical: '/mountains/mountain-id-guide',
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
