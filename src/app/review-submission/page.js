import ClientPage from './ClientPage';

export const metadata = {
  alternates: {
    canonical: '/review-submission',
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
