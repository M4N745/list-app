import axios from "axios";
import useSWR from "swr";
import { Container } from '@/pages/jokes/index.style.ts';
import dayjs from 'dayjs';

const endpoint = "https://api.chucknorris.io/jokes/random?category=dev";

const fetcher = (url: string) =>
  axios.get(url).then((res) => ({ ...res.data, fetched: new Date() }));

export default function Jokes() {
  const { data } = useSWR(endpoint, fetcher, { refreshInterval: 15000 });

  if (data) {
    return (
      <Container>
        {data.value} - (updated at: {dayjs(new Date(data.fetched).toISOString()).format('YYYY-MM-DD HH:mm:ss')})
      </Container>
    );
  }
  return "Loading...";
}
