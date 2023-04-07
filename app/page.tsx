'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loading from './loading';
import CourseSearch from './components/course-search';

export default function HomePage() {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)

     useEffect(()=> {
        async function fetchCourses(){
              let res = await fetch('/api/courses');
              res = await res.json();
              setCourses(res as any);
              setLoading(false)
        }
        fetchCourses();
     },[])

     if (loading === true)  return <Loading />
  return (
    <div>
      <h3>Home Page</h3>
      <CourseSearch getSearchResults={ courses=> setCourses(courses) } />
      <Courses courses={courses} />  
    </div>
  );
}

type CoursesProps = {
     courses: any
}

const Courses: React.FC<CoursesProps> =  ({  courses }: CoursesProps) => {
  return (
    <div className='courses'>
      {courses.map((course: any) => (
        <div key={course.id} className='card'>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target='_blank' className='btn'>
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};
