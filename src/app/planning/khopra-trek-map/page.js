import ClientPage from './ClientPage';

export const metadata = {
  alternates: {
    canonical: '/planning/khopra-trek-map',
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
