import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  const navigateTo = (route) => {
    router.push(route);
  };

  return {
    navigateTo,
  };
};

export default Navigation;