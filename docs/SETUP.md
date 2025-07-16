# Portfolio Website Setup Guide

This guide will help you set up and customize the portfolio website for your own use.

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process required - it's a static website!

## Customization

### Personal Information

Edit the following files to add your personal information:

#### `index.html`
- Update the `<title>` tag with your name
- Replace "John Doe" with your actual name
- Update contact information in the contact section
- Modify the hero section content
- Add your own projects in the projects section

#### `css/style.css`
- Customize colors by changing the CSS variables
- Modify fonts if desired
- Adjust spacing and layout as needed

### Adding Your Photo

1. Create an `images` folder in the project root
2. Add your profile photo (recommended: 400x400px, square format)
3. Replace the profile placeholder in `index.html`:
   ```html
   <div class="hero-image">
       <img src="images/your-photo.jpg" alt="Your Name" class="profile-image">
   </div>
   ```

### Project Showcase

To add your own projects:

1. Replace the project cards in the projects section
2. Add project images to the `images` folder
3. Update project descriptions and technologies used
4. Add links to live demos and GitHub repositories

### Contact Form

The contact form currently shows a success message but doesn't actually send emails. To make it functional:

1. **Option 1: Use a service like Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action attribute
   
2. **Option 2: Use Netlify Forms**
   - Deploy to Netlify
   - Add `netlify` attribute to the form

3. **Option 3: Backend integration**
   - Set up a backend service to handle form submissions
   - Update the JavaScript in `js/main.js`

## Deployment Options

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Custom domain support available

### Vercel
1. Import your GitHub repository
2. Automatic deployments
3. Great performance optimization

### Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Configure any necessary redirects

## Browser Compatibility

This website is compatible with:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Optimization

### Images
- Optimize images before adding them
- Use WebP format for better compression
- Consider lazy loading for better performance

### CSS and JavaScript
- The code is already minification-ready
- Consider using a CDN for external libraries
- Enable gzip compression on your server

## SEO Optimization

1. **Meta tags**: Update meta descriptions and keywords
2. **Open Graph**: Add Open Graph meta tags for social sharing
3. **Schema markup**: Consider adding structured data
4. **Sitemap**: Generate and submit a sitemap to search engines

## Accessibility

The website includes basic accessibility features:
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast colors

To improve accessibility further:
- Add alt text to all images
- Ensure proper heading hierarchy
- Test with screen readers
- Validate color contrast ratios

## Maintenance

### Regular Updates
- Keep external libraries updated
- Test across different browsers regularly
- Monitor website performance
- Update content regularly

### Analytics
Consider adding:
- Google Analytics for traffic insights
- Google Search Console for SEO monitoring
- Performance monitoring tools

## Troubleshooting

### Common Issues

**Fonts not loading**
- Check internet connection
- Verify Google Fonts URLs
- Consider hosting fonts locally

**JavaScript not working**
- Check browser console for errors
- Ensure all script files are properly linked
- Verify file paths are correct

**Responsive design issues**
- Test on actual devices
- Use browser developer tools
- Check CSS media queries

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Validate your HTML and CSS
3. Test in different browsers
4. Review the documentation

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

