import ClientPage from './ClientPage';

export const metadata = {
  alternates: {
    canonical: '/planning/interactive-map',
  },
};

export default function Page(props) {
  return <ClientPage {...props} />;
}
