import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const query: string |null = searchParams.get('query');

  if (query === null) {
    return NextResponse.error();
  }

  const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase()))
     
  return NextResponse.json(filteredCourses);
}