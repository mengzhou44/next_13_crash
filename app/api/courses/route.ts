import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';

type Course = {
     id: string | number
     title: string
     description: string
     link: string
     level: string 
}
 
export async function GET(request: any) {
    console.log('step3')
  return NextResponse.json(courses);
}

export async function POST(request: any) {
  const { title, description, level, link } = await request.json();

  const newCourse: Course = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  (courses as Course[]).push(newCourse);

  return NextResponse.json(courses);
}