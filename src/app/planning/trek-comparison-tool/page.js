import ClientPage from './ClientPage';

export const metadata = {
  alternates: {
    canonical: '/planning/trek-comparison-tool',
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
