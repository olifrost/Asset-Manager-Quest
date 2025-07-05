# Asset Manager Quest - Build Guide

This project uses [Tweego](http://www.motoslave.net/tweego/) to compile Twine games from source files.

## Quick Start

### Using VS Code Tasks (Recommended)
1. Open Command Palette (`Cmd+Shift+P`)
2. Type "Tasks: Run Task"
3. Choose from available build tasks:
   - **Build All Versions** - Runs the complete build script (default build task)
   - **Build Main Game** - Builds just the main `index.html`
   - **Build Dev Version** - Builds development version with debug options
   - **Build Backpack Version** - Builds the backpack mini-game
   - **Build Proof Version** - Builds proofing version for editing
   - **Build Graph Version** - Builds graph visualization
   - **Build Reddit Version** - Builds Reddit-specific version
   - **Watch Mode - Main Game** - Auto-rebuilds main game on file changes
   - **List Story Formats** - Shows available story formats
   - **Open Main Game** - Opens the compiled game in browser

### Using the Build Script
```bash
./tweego.sh
```

### Manual Tweego Commands
```bash
# Main game
./tweego --head=src/head.txt -o index.html -m options/devmode.js src website

# Development version
./tweego --head=src/head.txt -o dev.html -m options/devmode.js src website

# Backpack version
./tweego --head=src/head.txt -o backpack.html src backpack

# Proofing version (for editing)
./tweego --head=src/head.txt -o proof.html -f illume src website

# Graph visualization
./tweego --head=src/head.txt -o graph.html -f dotgraph src website

# Watch mode (auto-rebuild on changes)
./tweego --head=src/head.txt -o index.html -m options/devmode.js src website -w
```

## Project Structure

- `src/` - Main game source files (Twee notation)
- `website/` - Website-specific content and styling
- `backpack/` - Backpack mini-game files
- `reddit/` - Reddit-specific modifications
- `options/` - Build options and modules
- `storyformats/` - Bundled Tweego story formats
- `tweego` - Tweego compiler binary (bundled)

## Story Formats

This project bundles the following story formats locally:

### Available Formats
Run `./tweego --list-formats` to see all available formats:

- **SugarCube 2** (`sugarcube-2`) - Main story format (default)
- **Illume** (`illume`) - Proofing format for editing
- **DotGraph** (`dotgraph`) - Graph visualization format
- **CopyPaste** (`CopyPaste`) - Copy/paste proofing format

### Using Different Formats
```bash
# Use a specific format
./tweego -f sugarcube-2 -o game.html src
./tweego -f illume -o proof.html src        # For proofing/editing
./tweego -f dotgraph -o graph.html src      # For visualization
```

## Development Workflow

1. **Start watch mode**: Use "Watch Mode - Main Game" task or run:
   ```bash
   ./tweego --head=src/head.txt -o index.html -m options/devmode.js src website -w
   ```

2. **Edit source files** in `src/` directory using Twee v3 notation

3. **Test changes** - Tweego will auto-rebuild when files change

4. **Build all versions** when ready to publish:
   - Use "Build All Versions" task, or
   - Run `./tweego.sh`

## File Extensions Supported

- `.tw`, `.twee` - Twee notation source files
- `.css` - Stylesheets (auto-bundled)
- `.js` - JavaScript files (auto-bundled)
- `.png`, `.jpg`, `.gif`, `.svg` - Images (become image passages)
- `.mp3`, `.ogg`, `.wav` - Audio files (become audio passages)
- `.mp4`, `.webm` - Video files (become video passages)
- `.woff`, `.woff2`, `.ttf` - Fonts (auto-bundled as @font-face)

## Troubleshooting

### Story Formats Not Found
- Ensure `storyformats/` directory exists and contains format folders
- Run `./tweego --list-formats` to verify available formats

### Build Errors
- Check that `src/head.txt` exists
- Verify source files use proper Twee v3 notation
- Check for syntax errors in JavaScript/CSS modules

### Permission Errors
```bash
chmod +x tweego
chmod +x tweego.sh
```

## Resources

- [Tweego Documentation](http://www.motoslave.net/tweego/)
- [Twee v3 Specification](https://github.com/iftechfoundation/twine-specs/blob/master/twee-3-specification.md)
- [SugarCube Documentation](http://www.motoslave.net/sugarcube/2/)
