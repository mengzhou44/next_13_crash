import { Suspense } from 'react';
import Link from 'next/link';
import Repo from './repo';
import RepoDirs from './repo-dirs';
 
type RepoPageParams = {
     name: string
}

type RepoPageProps = {
      params: RepoPageParams
}
 
const RepoPage = async ({ params: { name } } :RepoPageProps) => {
  
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo  name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading repo dirs...</div>}>
        <RepoDirs  name={name} />
      </Suspense>
      
    </div>
  );
};
export default RepoPage;