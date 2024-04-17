import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md'; //Had to import mark down correctly https://stackoverflow.com/questions/44678315/how-to-import-markdown-md-file-in-typescript
import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';



const mainFeaturedPost = {
  title: 'Full Stack Software Engineer',
  languages: 'Languages: JavaScript | Typescript | C# | HTML | CSS | SQL',
  frameworks: 'Env/Frameworks: React | Node.js | Express | PUG | Redux | jQuery | .NET | Angular',
  cloud: 'Cloud: Azure | AWS',
  databases: 'Databases: PostgreSQL | CosmosDB',
  testing: 'Testing Suites: Jest',
  other: 'Other: Github | Git | Heroku | Netlify | VSCode | Postman | PGAdmin | Agile/Scrum | Miro | Jira | StripeAPI | Zod | Webpack | JWT | JSON',
  certifications: 'Certifications: AZ900 Azure Fundamentals | AZ204 Azure Developer Associate | AWS Associate Developer',
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: '',
};

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
// ];

const posts = [post2, post1];

const sidebar = {
  title: 'About',
  description:
    'This is a tech-focused but sometimes not tech-focused blog.',
  archives: [
    { title: 'March 2024', url: '#' }
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/ErikGraciosa' },
    { name: 'X', icon: XIcon, url: 'https://twitter.com/erikgraciosa' },
    { name: 'Linked In', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/erikgraciosa/' }
  ],
};

export default function Blog() {
  return (
    <>
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="My Tech Blog" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              />
          </Grid>
        </main>
      </Container>
      <Footer />
    </>
  );
}
