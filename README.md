# GitHub Portfolio

A beautiful, responsive portfolio website that automatically fetches and displays your GitHub profile and repositories using the GitHub API.

## Features

- 📊 Displays your GitHub profile information
- 📂 Shows your latest repositories with stats
- ⭐ Repository stars, forks, and language info
- 📱 Fully responsive design
- 🎨 Modern gradient UI
- ⚡ Fast and lightweight

## Setup Instructions

### 1. Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git
- A GitHub account

### 2. Local Development

1. **Navigate to the project folder**
   ```bash
   cd github-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update your GitHub username**
   - Open `src/App.js`
   - Change line 11: `const GITHUB_USERNAME = 'your-username';`
   - Replace `'your-username'` with your actual GitHub username

4. **Run the development server**
   ```bash
   npm start
   ```
   - Your portfolio will open at http://localhost:3000

### 3. Deploy to GitHub Pages

1. **Create a GitHub repository**
   - Go to GitHub and create a new repository
   - Name it: `your-username.github.io` (replace `your-username` with your actual GitHub username)
   - Do NOT initialize with README

2. **Update package.json**
   - Open `package.json`
   - Change line 5: `"homepage": "https://your-username.github.io"`
   - Replace `your-username` with your actual GitHub username

3. **Initialize Git and push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

5. **Visit your live site**
   - Go to: `https://your-username.github.io`
   - It may take a few minutes to go live

### 4. Making Updates

After making changes to your code:

```bash
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy
```

## Customization

### Change Colors
Edit `src/index.css` and `src/App.css` to customize the gradient and colors:
```css
/* In src/index.css */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Repository Display
In `src/App.js`, change the number of repos displayed:
```javascript
// Line 18
const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
```
Change `per_page=12` to any number you want.

### Add Social Links
You can add more links in the header section of `src/App.js`:
```javascript
<a href="https://linkedin.com/in/yourprofile" className="btn btn-secondary">
  LinkedIn
</a>
```

## Troubleshooting

### "User not found" error
- Check that you've updated the `GITHUB_USERNAME` in `src/App.js`
- Make sure your GitHub profile is public

### Deploy fails
- Make sure the repository name is exactly `your-username.github.io`
- Check that you've updated the `homepage` in `package.json`
- Try running `npm install gh-pages --save-dev` again

### Site not loading after deploy
- Wait 5-10 minutes for GitHub Pages to build
- Check GitHub repository Settings → Pages to see build status
- Clear your browser cache

## Technologies Used

- React
- GitHub API
- GitHub Pages
- CSS3

## License

Free to use and modify for your own portfolio!
