import fs from 'fs'
import { join } from 'path'
import { getFields, getMDBySlug } from './markdown'


export const POSTS_DIRECTORY = join(process.cwd(), '_content', 'posts')
export const PEOPLE_DIRECTORY = join(process.cwd(), '_content', 'people')
export const LABS_DIRECTORY = join(process.cwd(), '_content', 'labs')
export const PUBLICATIONS_DIRECTORY = join(process.cwd(), '_content', 'publications')

export const getSlugs = (dir:string) => {
  return fs.readdirSync(dir)
}

export const getPostSlugs = () => {
  return getSlugs(POSTS_DIRECTORY)
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  return getMDBySlug(POSTS_DIRECTORY, slug, fields)
}

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (new Date(post1.fields.date) > new Date(post2.fields.date) ? -1 : 1))
  return posts
}

export const getPeopleSlugs = () => {
  return getSlugs(PEOPLE_DIRECTORY)
}

export const getPersonBySlug = ( slug: string, fields: string[] = []) => {
  return getMDBySlug(PEOPLE_DIRECTORY, slug, fields)
}

export const getAllPeople = (fields: string[] = []) => {
  const slugs = getSlugs(PEOPLE_DIRECTORY)
  const posts = slugs
    .map((slug) => getPersonBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.fields.lastName < post2.fields.lastName ? -1 : post1.fields.firstName < post2.fields.firstName ? -1 : 1))
  return posts
}






export const getLabSlugs = () => {
  return getSlugs(LABS_DIRECTORY)
}

export const getLabBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.json$/, '')
  const fullPath = join(LABS_DIRECTORY, `${realSlug}.json`)
  return JSON.parse(fs.readFileSync(fullPath).toString())
}

export const getAllLabs = () => {
  const slugs = getLabSlugs()
  const labs = slugs.map((slug) => getLabBySlug(slug)).sort((lab1, lab2) => (lab1.name <= lab2.name ? -1 : 1))
  
  // const labs = slugs
  //   .map((slug) => await getLabBySlug(slug))
  //   // sort posts by date in descending order
  //   .sort((lab1, lab2) => (lab1.name > lab2.name ? -1 : 1))
  return labs
}



export const getPublicationSlugs = () => {
  return getSlugs(PUBLICATIONS_DIRECTORY)
}

export const getPublicationsBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.json$/, '')
  const fullPath = join(PUBLICATIONS_DIRECTORY, `${realSlug}.json`)
  return JSON.parse(fs.readFileSync(fullPath).toString()).publications
}

export const getAllPublications = () => {
  const slugs = getPublicationSlugs()
  const labs = slugs.map((slug) => getPublicationsBySlug(slug))
  return labs
}
