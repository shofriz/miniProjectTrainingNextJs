/////Dynamic Route

import BackButton from '@/components/backbutton';
import { useRouter } from 'next/router';

function CatImage({ cat }) {
    const router = useRouter();
    const { id } = router.query;

    return (
      <>
      <BackButton/>
      <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-4xl text-white font-bold mb-4">Good Luck!!!</h1>
          <div className="h-80 w-80 overflow-hidden">
            <img src={cat.url} alt={`Cat ${cat.id}`} className="h-full w-full object-cover" />
          </div>
          <p className="text-4xl text-white font-bold mb-4">name : {cat.id}</p>
        </div>
      </>
        
      );
      
      
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const { data } = context.query;

    return {
        props: {
            cat: JSON.parse(data),
        },
    };
}

export default CatImage;
