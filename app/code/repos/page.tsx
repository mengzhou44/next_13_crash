
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos(): Promise<any> {
     let res= await fetch('https://api.github.com/users/mengzhou44/repos', 
      {
        next: {
          revalidate: 60,
        },
     })
     res= await res.json()
     return res;
}

type Repo = {
    id: string
    name: string 
    description: string
    stargazers_count: number
    forks_count: number
    watchers_count: number
}

export default  async function ReposPage() {
     const repos = await fetchRepos();
     return  <div className='repos-container'>
     <h2>Repositories</h2>
     <ul className='repo-list'>
       {repos.map((repo:any) => (
         <li key={repo.id}>
           <Link href={`/code/repos/${repo.name}`}>
             <h3>{repo.name}</h3>
             <p>{repo.description}</p>
             <div className='repo-details'>
               <span>
                 <FaStar /> {repo.stargazers_count}
               </span>
               <span>
                 <FaCodeBranch /> {repo.forks_count}
               </span>
               <span>
                 <FaEye /> {repo.watchers_count}
               </span>
             </div>
           </Link>
         </li>
       ))}
     </ul>
   </div>
}