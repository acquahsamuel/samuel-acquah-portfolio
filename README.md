# Samuel Portfolio
 
## Usage

### Install Dependencies
```bash
npm install
```

### Run Dev Server (http://localhost:3000) 
```bash
npm run dev
```

### Creating posts

* Create a markdown file in the "posts" folder and name it whatever you want as the slug
* Add the frontmatter/fields at the top and then the post body. See an example in the "posts" folder of this repo
* Add your cover image and author image in the public/images folder
* For category color coding, edit the "Components/CategoryLabel.js" file

### Caching

Husky is used to run a cache script on git commit. Caching is used for the search api route/serverless function
